<template>
  <div>
    <template v-for="restaurant of restaurants" :key="restaurant.id">
      <router-link :to="`/restaurant/${restaurant.id}`">
        <div>{{ restaurant.name }}</div>
        <image-placeholder width="256" height="256" :text="restaurant.name" />
      </router-link>
    </template>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent } from 'vue'
import { useStore } from '../store'

export default defineComponent({
  name: 'restaurants',
  setup() {
    const restaurants = computed(() => useStore().state.restaurants)
    return {
      restaurants,
    }
  },
})
</script>
