<template>
  <div v-if="restaurant">
    <div class="name">{{ restaurant.name }}</div>
    <div class="address">{{ restaurant.address }}</div>
    <div class="phoneNumber">{{ restaurant.phoneNumber }}</div>
    <hr />
    <template v-for="dish of restaurant.dishes" :key="dish.name">
      <dish :dish="dish" />
    </template>
  </div>
  <div v-else>
    <div>Sorry, we cannot find the restaurant.</div>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent } from 'vue'
import Dish from './Dish.vue'
import { useStore } from '../store'

export default defineComponent({
  name: 'restaurant',
  components: {
    Dish,
  },
  setup() {
    return {
      restaurant: computed(() => useStore().getters.restaurant),
    }
  },
})
</script>
