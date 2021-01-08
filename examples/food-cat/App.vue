<template>
  <the-header></the-header>
  <router-view></router-view>
</template>

<script lang="ts">
import { defineComponent } from '@vue/runtime-dom'
import TheHeader from './views/TheHeader.vue'
import { useStore } from './store'

export default defineComponent({
  name: 'HelloWorld',
  components: {
    TheHeader,
  },
  setup() {
    const store = useStore()
    store.actions.fetchRestaurants()
  },
})
</script>
