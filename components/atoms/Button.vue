<template>
  <NuxtLink
    v-if="props.to"
    :to="props.to"
    class="button"
    :class="props.buttonType"
    >{{ props.text }}</NuxtLink
  >
  <button v-else class="button" :class="props.buttonType">
    {{ props.text }}}
  </button>
</template>

<script lang="ts" setup>
import { defineProps } from "@vue/runtime-core";

type ButtonType = "primary" | "success";

export interface Props {
  text: string;
  buttonType?: ButtonType;
  to?: string;
}

const props = withDefaults(defineProps<Props>(), {
  buttonType: "primary",
  to: null,
});
</script>

<style lang="scss" scoped>
.button {
  border: none;
  border-radius: $radius-primary;
  width: 100%;
  padding: 1.3rem 2rem;
  font-size: 1.5rem;
  font-weight: 300;
  cursor: pointer;
  transition: all 0.15s;
  display: flex;
  justify-content: center;
  align-items: center;
  color: $color-black;
  text-decoration: none;

  &:hover {
    transform: translateY(-3px);
    box-shadow: $shadow-small;
  }

  &.primary {
    background: $color-primary;
  }

  &.success {
    background: $color-success;
  }
}
</style>
