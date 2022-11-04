<template>
  <div>
    <Navbar>
      <template #nav-buttons>
        <Button text="posts" />
        <Button text="account" />
      </template>
    </Navbar>
    <div class="albums-wrapper">
      <AlbumTile />
      <AlbumTile />
      <AlbumTile />
      <AlbumTile />
      <AlbumTile />
    </div>
  </div>
</template>

<script lang="ts" setup>
import Navbar from "../components/organisms/Navbar.vue";
import AlbumTile from "../components/organisms/AlbumTile.vue";
import Button from "../components/atoms/Button.vue";
</script>

<style lang="scss" scoped>
.albums-wrapper {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}
</style>
