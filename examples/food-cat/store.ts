import { createStore } from 'vuex-light'
import { CURRENCYS, Dish, Restaurant } from './static'
import { fetchMoreRestaurants } from './api'
import { useRouter } from 'vue-router'

const store = createStore({
  state: {
    restaurants: [] as Restaurant[],
    currency: 'HUF' || CURRENCYS[0],
    exchangeRates: {} as { [P: string]: number },
  },

  getters: {
    restaurant({ state }) {
      const router = useRouter()
      return state.restaurants.find(restanrant => restanrant.id === router.currentRoute.value.params.name)
    },
  },

  mutations: {
    setCurrency({ state }, currency: typeof CURRENCYS[0]) {
      state.currency = currency
    },
    setExchangeRates({ state }, exchangeRates: { [P: string]: number }) {
      state.exchangeRates = exchangeRates
    },
    setRestaurants({ state }, restaurants: Restaurant[]) {
      state.restaurants = restaurants
    },
    addToCart({ state, getters }, dishName: Dish['name']) {
      const restaurant = state.restaurants.find(
        restaurant => restaurant.id === (getters.restaurant.id as Restaurant['id']),
      )
      if (restaurant === undefined) return

      const dish = restaurant.dishes.find((dish: Dish) => dish.name === dishName)
      if (dish === undefined) return
      if (dish.remaining <= 0) return

      dish.remaining -= 1
    },
  },

  actions: {
    async fetchRestaurants({ mutations }) {
      mutations.setRestaurants(await fetchMoreRestaurants())
    },
    async fetchExchangeRate({ mutations }) {
      fetch('https://api.exchangeratesapi.io/latest?base=USD', { mode: 'cors' })
        .then(async response => {
          mutations.setExchangeRates((await response.json()).rates)
        })
        .catch(error => {
          console.error(error)
        })
    },
  },
})
export default store

export function useStore() {
  return store
}
