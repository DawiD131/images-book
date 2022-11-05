<template>
  <label class="input">
    <input class="input__input" placeholder=" " />
    <label class="input__label">{{ props.placeholder }}</label>
  </label>
</template>

<script lang="ts" setup>
const props = defineProps<{
  placeholder: string;
}>();
</script>

<style lang="scss" scoped>
.input {
  position: relative;
  display: block;

  &__label {
    position: absolute;
    top: 50%;
    left: 1.4rem;
    transform: translate(0, -55%);
    transition: top 0.2s;
    box-sizing: border-box;
    font-size: 1.2rem;
    font-weight: 300;
  }

  &__input {
    height: 3.5rem;
    padding: 0 1.3rem;
    border: none;
    border-radius: $radius-primary;
    width: 100%;

    &:not(:placeholder-shown) + label {
      top: -1rem;
    }

    &:focus {
      outline: none;
    }
  }
}
</style>
