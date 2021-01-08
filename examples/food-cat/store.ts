import { createStore } from 'vuex-light'
import { CURRENCY_SYMBOLS, Dish, Restaurant } from './static'
import { fetchMoreRestaurants } from './api'
import { useRouter } from 'vue-router'

const store = createStore({
  state: {
    currencySymbol: CURRENCY_SYMBOLS.$,
    restaurants: [] as Restaurant[],
  },

  getters: {
    restaurant({ state }) {
      const router = useRouter()
      return state.restaurants.find(restanrant => restanrant.id === router.currentRoute.value.params.name)
    },
  },

  mutations: {
    changeCurrencySymbol({ state }, currencySymbol: CURRENCY_SYMBOLS) {
      state.currencySymbol = currencySymbol
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
  },
})
export default store

export function useStore() {
  return store
}
