<template>
  <div v-if="restaurant">
    <div class="name">{{ restaurant.name }}</div>
    <div class="address">{{ restaurant.address }}</div>
    <div class="phoneNumber">{{ restaurant.phoneNumber }}</div>
    <hr />
    <dishes class="dishes" :dishes="restaurant.dishes" />
  </div>
  <div v-else>
    <div>Sorry, we cannot find the restaurant.</div>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent } from 'vue'
import Dishes from './Dishes.vue'
import { useStore } from '../store'

export default defineComponent({
  name: 'restaurant',
  components: {
    Dishes,
  },
  setup() {
    return {
      restaurant: computed(() => useStore().getters.restaurant),
    }
  },
})
</script>

<style scoped>
.dishes {
  margin: auto;
}
</style>
