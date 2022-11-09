<template>
  <div class="modal-layout">
    <div class="modal-layout__content">
      <slot/>
    </div>
  </div>
</template>

<script>
export default {
  name: "ModalLayout",
};
</script>

<style lang="scss" scoped>
.modal-layout {
  position: absolute;
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
  width: 100%;
  min-height: 100vh;
  background: transparent;
  backdrop-filter: blur(3px);

  &__content {
    background: $modal-background;
    border-radius: $radius-primary;
    box-shadow: $shadow-big;
    padding: 4rem 4.5rem;
  }
}
</style>
