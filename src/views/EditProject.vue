<script setup lang="ts">
interface Props {
  id: string
}
defineProps<Props>()
</script>

<template>
  <div>{{ id }}</div>
</template>
