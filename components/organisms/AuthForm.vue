<template>
  <form class="auth-form">
    <h4 class="auth-form__title">Hello!</h4>
    <div class="auth-form__inputs"></div>
  </form>
</template>

<script lang="ts" setup></script>

<style lang="scss" scoped>
.auth-form {
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 100%;
  max-width: 38rem;
  background: $form-background;
  padding: 2.5rem 3.5rem;
  border-radius: $radius-primary;

  &__title {
    font-size: 2.4rem;
    font-weight: 300;
  }

  &__inputs {
  }
}
</style>
