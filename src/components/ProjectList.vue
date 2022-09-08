<script setup lang="ts">
import useProject from '@/composables/useProject'
const { projects, error, fetchProject } = useProject()
await fetchProject()
</script>

<template>
  <div v-if="error">
    <v-alert type="error">{{ `${error.code} - ${error.message}` }}</v-alert>
  </div>
  <template v-else-if="projects.length">
    <v-card
      :disabled="item.complete"
      :border="true"
      class="pa-1 my-2"
      v-for="item in projects"
      :key="item.id"
    >
      <v-card-title class="text-h6">{{ item.title }}</v-card-title>
      <v-card-subtitle>{{ item.details }}</v-card-subtitle>
    </v-card>
  </template>
  <v-alert v-else type="warning">No data</v-alert>
</template>
