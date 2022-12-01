<template>
  <div>
    <Navbar>
      <template #nav-buttons>
        <Button text="create account"/>
      </template>
    </Navbar>
    <div class="form-wrapper">
      <AuthForm/>
    </div>
  </div>
</template>

<script lang="ts" setup>
import Navbar from "~/components/organisms/Navbar.vue";
import AuthForm from "~/components/organisms/AuthForm.vue";
import Button from "~/components/atoms/Button.vue";
</script>

<style lang="scss">
.form-wrapper {
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 5rem;
}
</style>
