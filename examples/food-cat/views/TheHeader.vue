<template>
  <header>
    <router-link to="/">
      <h1>Food Cat</h1>
    </router-link>
    <select v-model="currency">
      <template v-for="currency of CURRENCYS" :key="currency">
        <option :value="currency">{{ currency }}</option>
      </template>
    </select>
  </header>
</template>

<script lang="ts">
import { computed, defineComponent } from 'vue'
import { CURRENCYS } from '../static'
import { useStore } from '../store'

export default defineComponent({
  name: 'top-header',
  setup() {
    const currency = computed({
      set(value: typeof CURRENCYS[0]) {
        useStore().mutations.setCurrency(value)
      },
      get() {
        return useStore().state.currency
      },
    })
    return {
      currency,
      CURRENCYS,
    }
  },
})
</script>

<style scoped>
h1 {
  margin-top: 0;
  margin-bottom: 0;
  vertical-align: middle;
}
</style>
