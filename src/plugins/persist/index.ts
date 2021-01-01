import { set, get } from 'shvl'
import { StateReturnType, Subscriber, CreateStoreReturnType } from '../../'
const deepMerge = require('deepmerge')

/**
 * @public
 */
export const defaultKey = 'vuex' as string

/**
 * @public
 */
export const defaultPaths = null as string[] | null

/**
 * @public
 */
export function defaultReducer<State extends StateReturnType<any>>(state: State, paths: string[] | null) {
  const unwrappedState = Object.keys(state).reduce((unwrappedState, key) => {
    unwrappedState[key] = state[key]
    return unwrappedState
  }, {} as any)
  return paths === null
    ? unwrappedState
    : paths.reduce((substate: any, path: string) => set(substate, path, get(unwrappedState, path)), {})
}

/**
 * @public
 */
export function defaultSubscriber<Store extends CreateStoreReturnType<any, any, any>>(store: Store) {
  return function (handler: Subscriber) {
    return store.subscribe(handler)
  }
}

/**
 * @public
 */
export type Storage = {
  getItem: (key: string) => any
  setItem: (key: string, value: any) => void
  removeItem: (key: string) => void
}
/**
 * @public
 */
export const defaultStorage: Storage = window.localStorage

/**
 * @public
 */
export function defaultGetState(key: Parameters<Storage['getItem']>['0'], storage: Storage) {
  const value = storage.getItem(key)

  try {
    return typeof value !== 'undefined' ? JSON.parse(value) : undefined
  } catch (err) {}

  return undefined
}

/**
 * @public
 */
export function defaultSetState(key: Parameters<Storage['setItem']>['0'], state: any, storage: Storage) {
  return storage.setItem(key, JSON.stringify(state))
}

/**
 * @public
 */
export function defaultFilter() {
  return true
}

/**
 * @public
 */
export const defaultOverwrite = false as boolean

/**
 * @public
 */
export const defaultFetchBeforeUse = false as boolean

const randomKey = '4u33j8eqxxyndzw5slhe6xyt9tuymkvf'
/**
 * @public
 */
export function defaultAssertStorage(storage: Storage): void | Error {
  storage.setItem(randomKey, 1)
  storage.removeItem(randomKey)
}

/**
 * @public
 */
export function defaultArrayMerge(_: any[], savedState: any[]) {
  return savedState
}

/**
 * @public
 */
export function defaultOnRehydrated<Store extends CreateStoreReturnType<any, any, any>>(_: Store) {}

/**
 * @public
 */
export type RequiredOptions = {
  key: typeof defaultKey
  paths: typeof defaultPaths
  reducer: typeof defaultReducer
  subscriber: typeof defaultSubscriber
  storage: typeof defaultStorage
  getState: typeof defaultGetState
  setState: typeof defaultSetState
  filter: (mutation: string) => boolean
  overwrite: typeof defaultOverwrite
  fetchBeforeUse: typeof defaultFetchBeforeUse
  assertStorage: typeof defaultAssertStorage
  arrayMerge: typeof defaultArrayMerge
  onRehydrated: typeof defaultOnRehydrated
}

/**
 * @public
 */
export type Options = Partial<RequiredOptions>

function normalize(options: Options): RequiredOptions {
  return {
    key: options.key || defaultKey,
    paths: options.paths || defaultPaths,
    reducer: options.reducer || defaultReducer,
    subscriber: options.subscriber || defaultSubscriber,
    storage: options.storage || defaultStorage,
    getState: options.getState || defaultGetState,
    setState: options.setState || defaultSetState,
    filter: options.filter || defaultFilter,
    overwrite: options.overwrite !== undefined ? options.overwrite : defaultOverwrite,
    fetchBeforeUse: options.fetchBeforeUse !== undefined ? options.fetchBeforeUse : defaultFetchBeforeUse,
    assertStorage: options.assertStorage || defaultAssertStorage,
    arrayMerge: options.arrayMerge || defaultArrayMerge,
    onRehydrated: options.onRehydrated || defaultOnRehydrated,
  }
}

/**
 * @public
 */
export function createPersistPlugin(options?: Options) {
  const normalizedOptions = normalize(options || {})

  normalizedOptions.assertStorage(normalizedOptions.storage)

  let savedState: any
  if (normalizedOptions.fetchBeforeUse) {
    savedState = normalizedOptions.getState(normalizedOptions.key, normalizedOptions.storage)
  }

  return function <Store extends CreateStoreReturnType<any, any, any>>(store: Store) {
    if (normalizedOptions.fetchBeforeUse === false) {
      savedState = normalizedOptions.getState(normalizedOptions.key, normalizedOptions.storage)
    }

    if (typeof savedState === 'object' && savedState !== null) {
      store.replaceState(
        normalizedOptions.overwrite
          ? savedState
          : deepMerge(store.state, savedState, {
              arrayMerge: normalizedOptions.arrayMerge,
              clone: false,
            }),
      )
      normalizedOptions.onRehydrated(store)
    }

    normalizedOptions.subscriber(store)(mutation => {
      if (normalizedOptions.filter(mutation.key))
        normalizedOptions.setState(
          normalizedOptions.key,
          normalizedOptions.reducer(store['state'], normalizedOptions.paths),
          normalizedOptions.storage,
        )
    })
  }
}
