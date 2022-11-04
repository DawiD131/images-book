<template>
  <ModalLayout>
    <div class="albums-modal">
      <Input placeholder="album name" />
      <Button text="add album" button-type="success" />
    </div>
  </ModalLayout>
</template>

<script lang="ts" setup>
import Input from "../../atoms/Input.vue";
import ModalLayout from "~/components/atoms/ModalLayout.vue";
import Button from "~/components/atoms/Button.vue";
</script>

<style lang="scss" scoped>
.albums-modal {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 2rem;
}
</style>
