<template>
  <div class="post-tile">
    <h3 class="post-tile__header">Title</h3>
    <img class="post-tile__image" src="https://via.placeholder.com/300x200"/>
    <div class="post-tile__description">
      jkfansdkjfanldk jnfaslkdjnfl skajdnflsakdjfnlsa kdjfnasldkf jnasdlkfjnasldkfjnas dlkfjnsdaflkj nasdflkjsdanf
    </div>
    <div class="post-tile__bottom-box">
      <span class="post-tile__bottom-box__author">author: Tom Petty</span>
      <Link text="see comments"/>
    </div>
  </div>
</template>

<script lang="ts" setup>
import Link from "~/components/atoms/Link.vue";
</script>

<style scoped lang="scss">
.post-tile {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background: $light-background;
  width: 31rem;
  height: 38rem;
  border-radius: $radius-primary;
  padding: 2rem 2.5rem;
  box-shadow: $shadow-small;

  &__header {
    font-size: 2.2rem;
    font-weight: 300;
    color: $color-text;
  }

  &__image {
    width: 100%;
  }

  &__description {
    font-size: 1.4rem;
    color: $color-text;
    font-weight: 300;
    word-break: break-word;
  }

  &__bottom-box {
    display: flex;
    justify-content: space-between;

    &__author {
      font-size: 1rem;
      font-weight: 700;
    }
  }
}
</style>
