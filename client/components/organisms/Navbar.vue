<template>
  <header class="navbar">
    <Logo class="navbar__logo"/>
    <nav class="navbar__nav">
      <slot name="nav-buttons"></slot>
    </nav>
  </header>
</template>

<script lang="ts" setup>
import Logo from "../atoms/Logo.vue";
</script>

<style lang="scss" scoped>
.navbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 2rem 0;

  &__logo {
    flex-grow: 1;
  }

  &__nav {
    display: flex;
    gap: 1rem;
    max-height: 4rem;
  }
}
</style>
