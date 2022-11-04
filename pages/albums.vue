<template>
  <div class="albums">
    <Navbar>
      <template #nav-buttons>
        <Button text="posts" />
        <Button text="account" />
      </template>
    </Navbar>
    <div class="albums__control-bar">
      <Button
        class="albums__control-bar__add-button"
        text="add new album"
        button-type="success"
      />
    </div>
    <div class="albums__albums-wrapper">
      <AlbumTile />
      <AlbumTile />
      <AlbumTile />
      <AlbumTile />
      <AlbumTile />
    </div>
    <ModalLayout> asdasd </ModalLayout>
  </div>
</template>

<script lang="ts" setup>
import Navbar from "../components/organisms/Navbar.vue";
import AlbumTile from "../components/organisms/AlbumTile.vue";
import Button from "../components/atoms/Button.vue";
import ModalLayout from "~/components/atoms/ModalLayout.vue";
</script>

<style lang="scss">
.albums {
  &__albums-wrapper {
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }

  &__control-bar {
    display: flex;
    justify-content: flex-start;
    margin: 2.5rem 0 2rem 0;

    &__add-button {
      max-width: max-content;
    }
  }
}
</style>
