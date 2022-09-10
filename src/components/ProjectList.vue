<script setup lang="ts">
import useProject from '@/composables/useProject'
import ProjectCard from './ProjectCard.vue'
const { projects, error, fetchProject } = useProject()
await fetchProject()
</script>

<template>
  <div v-if="error">
    <v-alert type="error">{{ `${error.code} - ${error.message}` }}</v-alert>
  </div>
  <template v-else-if="projects.length">
    <ProjectCard
      :item="project"
      v-for="project in projects"
      :key="project.id"
    />
  </template>
  <v-alert v-else type="warning">No data</v-alert>
</template>

<style lang="scss" scoped>
.card-border {
  border-left: 5px solid red;
}
.complete {
  border-left-color: green;
}
</style>
