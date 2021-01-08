<template>
  <img :src="src" />
</template>

<script lang="ts">
import { computed, defineComponent } from 'vue'
export default defineComponent({
  name: 'image-placeholder',
  props: {
    width: {
      required: true,
      type: String,
    },
    height: {
      required: true,
      type: String,
    },
    text: {
      default: 'Placeholder',
      type: String,
    },
  },
  setup(props) {
    return {
      src: computed(() => {
        return `https://via.placeholder.com/${props.width}x${props.height}?text=${props.text}`
      }),
    }
  },
})
</script>
