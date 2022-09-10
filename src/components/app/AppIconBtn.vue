<script setup lang="ts">
interface Props {
  icon: string
}
defineProps<Props>()
</script>

<template>
  <v-icon class="ma-1 icon" size="small" :icon="icon"></v-icon>
</template>

<style lang="scss" scoped>
.icon {
  cursor: pointer;
  &:hover {
    color: #777;
  }
}
</style>
