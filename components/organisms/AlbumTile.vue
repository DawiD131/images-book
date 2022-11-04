<template>
  <div class="album-tile">
    <div class="album-tile__info">
      <span class="album-tile__info__title"> Animals images </span>
      <span class="album-tile__info__author">author: Tom Petty</span>
    </div>
    <Button text="See album" class="album-tile__button" button-type="info" />
  </div>
</template>

<script lang="ts" setup>
import Button from "~/components/atoms/Button.vue";
</script>

<style lang="scss" scoped>
.album-tile {
  display: flex;
  justify-content: space-between;
  width: 100%;
  height: 7.5rem;
  padding: 2rem 2.5rem;
  background: $light-background;
  border-radius: $radius-primary;

  &__info {
    display: flex;
    flex-direction: column;
    gap: 0.8rem;

    &__title {
      font-size: 1.8rem;
      font-weight: 300;
    }

    &__author {
      font-size: 1rem;
      font-weight: 700;
    }
  }

  &__button {
    flex-basis: 12rem;
  }
}
</style>
