<template>
  <div class="logo">
    <div class="logo__image" v-html="logo"></div>
    <span class="logo__text">images book</span>
  </div>
</template>

<script lang="ts" setup>
import { logo } from "~/components/shared/icons";
</script>

<style lang="scss" scoped>
.logo {
  display: flex;
  align-items: center;
  gap: 1.2rem;

  &__image {
    width: 5rem;
    height: 5rem;
  }

  &__text {
    font-size: 3rem;
    color: $color-white;
    font-weight: 300;
  }
}
</style>
