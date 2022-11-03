<template>
  <div>
    <Navbar></Navbar>
    <div class="form-wrapper">
      <AuthForm />
    </div>
  </div>
</template>

<script lang="ts" setup>
import Navbar from "~/components/organisms/Navbar.vue";
import AuthForm from "~/components/organisms/AuthForm.vue";
</script>

<style lang="scss">
.form-wrapper {
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
