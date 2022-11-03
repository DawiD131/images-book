<template>
  <header class="navbar">
    <Logo />
    <nav>
      <slot name="nav-buttons"></slot>
    </nav>
  </header>
</template>

<script lang="ts" setup>
import Logo from "../atoms/Logo.vue";
</script>

<style scoped>
.navbar {
  padding: 2.5rem 0;
}
</style>
