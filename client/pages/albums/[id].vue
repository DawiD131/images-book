<template>
  <main class="page">
    <Navbar>
      <template #nav-buttons>
        <Button text="albums"/>
        <Button text="account"/>
        <Button text="logout"/>
      </template>
    </Navbar>
    <section class="page__posts-wrapper">
      <PostTile/>
      <PostTile/>
      <PostTile/>
      <PostTile/>
      <PostTile/>
      <PostTile/>
    </section>
  </main>
</template>

<script lang="ts" setup>
import Navbar from "~/components/organisms/Navbar.vue";
import Button from "~/components/atoms/Button.vue";
import PostTile from "~/components/organisms/PostTile.vue";

definePageMeta({
  middleware: ["auth"]
});
</script>

<style lang="scss">
.page {
  &__posts-wrapper {
    display: flex;
    align-items: center;
    gap: 3rem 2rem;
    justify-content: space-between;
    flex-wrap: wrap;
  }
}
</style>
