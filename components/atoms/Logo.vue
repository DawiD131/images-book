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
    width: 6rem;
    height: 6rem;
  }

  &__text {
    font-size: 3.4rem;
    color: $color-white;
    font-weight: 300;
  }
}
</style>
