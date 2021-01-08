<template>
  <div class="dish">
    <div class="dish-name">{{ dish.name }}</div>
    <div class="dish-short-description">{{ dish.description }}</div>
    <div class="dish-price">{{ priceWithCurrencySymbol }}</div>
    <div class="dish-remaining">{{ dish.remaining }}</div>
    <button @click="addToCart(dish.name)">Add</button>
    <image-placeholder width="256" height="256" :text="dish.name" />
  </div>
</template>

<script lang="ts">
import { computed, defineComponent, PropType } from 'vue'
import { Dish, formatPriceWithCurrencySymbol } from '../static'
import { useStore } from '../store'

export default defineComponent({
  name: 'dish',
  props: {
    dish: {
      required: true,
      type: Object as PropType<Dish>,
    },
  },
  setup(props) {
    const {
      state: { currencySymbol },
      mutations: { addToCart },
    } = useStore()

    return {
      priceWithCurrencySymbol: computed(() => formatPriceWithCurrencySymbol(props.dish.price, currencySymbol)),
      addToCart,
    }
  },
})
</script>
