<template>
  <ul class="dishes-wrapper">
    <template v-for="dish of dishes" :key="dish.name">
      <li>
        <div class="dish">
          <div class="dish--left">
            <div class="dish-name">{{ dish.name }}</div>
            <div class="dish-description">{{ dish.description }}</div>
            <div class="dish-price">
              {{ dish.remaining === 0 ? 'Sold out' : '' }} {{ formatPrice(dish.price, exchangeRate) }}
            </div>
          </div>
          <div v-if="dish.imageUrl" class="dish--right">
            <image-placeholder class="dish-image" width="48" height="48" />
          </div>
        </div>
      </li>
    </template>
  </ul>
</template>

<script lang="ts">
import { computed, defineComponent, PropType } from 'vue'
import { Dish, formatPrice } from '../static'
import { useStore } from '../store'

export default defineComponent({
  name: 'dishes',
  props: {
    dishes: {
      required: true,
      type: Array as PropType<Array<Dish>>,
    },
  },
  setup() {
    const store = useStore()

    return {
      exchangeRate: computed(() => store.state.exchangeRates[store.state.currency]),
      formatPrice,
      addToCart: store.mutations.addToCart,
    }
  },
})
</script>

<style scoped>
ul {
  text-align: start;
  list-style-type: none;
  padding: 0;
  margin: 0;
  max-width: 480px;
}

li:not(:first-child) {
  border-top: 1px solid #ddd;
}

.dish {
  display: flex;
  justify-content: space-between;
  padding: 0 8px;
  margin: 8px 0;
  cursor: pointer;
}

.dish--right {
  display: flex;
  align-items: center;
}

.dish-name {
  font-weight: bold;
}
</style>
