<template>
  <nuxt-link class="link" to="">{{ props.text }}</nuxt-link>
</template>

<script lang="ts" setup>

const props = defineProps<{
  text: string
}>();
</script>

<style scoped lang="scss">
.link {
  color: $color-link;
  font-size: 1.2rem;
  font-weight: 700;
  cursor: pointer;
}
</style>
