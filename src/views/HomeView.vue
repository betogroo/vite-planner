<script setup lang="ts">
import ProjectList from '../components/ProjectList.vue'
</script>

<template>
  <Suspense>
    <ProjectList />
    <template #fallback> Loading... </template>
  </Suspense>
</template>

<style scoped></style>
