<template>
  <form class="auth-form">
    <h4 class="auth-form__title">Welcome back!</h4>
    <div class="auth-form__inputs">
      <Input placeholder="email"/>
      <Input placeholder="password"/>
    </div>
    <Button
        text="login"
        class="auth-form__button"
        button-type="success"
        to="/albums"
        @click="loginUser"
    />
  </form>
</template>

<script lang="ts" setup>
import Input from "~/components/atoms/Input.vue";
import Button from "~/components/atoms/Button.vue";
import { useUserStore } from "~/store/UserStore";

const { login } = useUserStore();

const loginUser = () => login({
  email: "test22@gmail.com",
  pwd: "test21"
});

</script>

<style lang="scss" scoped>
.auth-form {
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 100%;
  max-width: 35rem;
  background: $light-transparent-background;
  padding: 2.5rem 3.5rem;
  border-radius: $radius-primary;
  box-shadow: $shadow-big;

  &__title {
    font-size: 2.4rem;
    font-weight: 300;
    margin-bottom: 3.5rem;
  }

  &__inputs {
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 2.5rem;
  }

  &__button {
    margin-top: 18rem;
  }
}
</style>
