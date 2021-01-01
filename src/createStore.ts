import { ref, computed, Ref, ComputedRef, isReactive, toRefs, DeepReadonly } from 'vue'
import { getOwnKeys, assert, OmitFirst, isPlainObject } from './util'

/**
 * @alpha
 */
export type StateParamType = {
  [P: string]: unknown
}

/**
 * @alpha
 */
export type InnerStateType<S extends StateParamType> = {
  [P in keyof S]: Ref<S[P]>
}

/**
 * @alpha
 */
export type StateReturnType<S extends StateParamType> = {
  [P in keyof S]: DeepReadonly<Ref<S[P]>>
}

/**
 * @alpha
 */
export type GettersParamType<S extends StateParamType> = {
  [P: string]: (state: StateReturnType<S>) => unknown
}

/**
 * @alpha
 */
export type GettersReturnType<G extends GettersParamType<any>> = {
  [P in keyof G]: ComputedRef<ReturnType<G[P]>>
}

/**
 * @alpha
 */
export type MutationsParamType<S extends StateParamType> = {
  [P: string]: (state: InnerStateType<S>, ...payload: any[]) => void
}

/**
 * @alpha
 */
export type MutationsReturnType<M extends MutationsParamType<any>> = {
  [P in keyof M]: (...args: OmitFirst<Parameters<M[P]>>) => void
}

/**
 * @alpha
 */
export function createStore<
  State extends StateParamType,
  Getters extends GettersParamType<State>,
  Mutations extends MutationsParamType<State>
>(options: { state: State; getters?: Getters; mutations?: Mutations }) {
  if (__DEV__) {
    assert(isPlainObject(options.state), 'invalid state type.')
  }

  const optionState = isReactive(options.state) ? toRefs(options.state) : options.state
  const state = getOwnKeys(optionState).reduce((state, stateKey) => {
    return Object.assign(state, { [stateKey]: ref(optionState[stateKey]) })
  }, {}) as InnerStateType<State>

  const optionGetters = options.getters || ({} as Getters)
  const getters = getOwnKeys(optionGetters).reduce((getters, getterKey) => {
    const getter = computed(() => optionGetters[getterKey](state as any))
    return Object.assign(getters, { [getterKey]: getter })
  }, {}) as GettersReturnType<Getters>

  const optionMutations = options.mutations || ({} as Mutations)
  const mutations = getOwnKeys(optionMutations).reduce((mutations, mutationKey) => {
    const mutation = (...payload: unknown[]) => optionMutations[mutationKey](state, ...payload)
    return Object.assign(mutations, { [mutationKey]: mutation })
  }, {}) as MutationsReturnType<Mutations>

  return {
    state: state as StateReturnType<State>,
    getters,
    mutations,
  }
}