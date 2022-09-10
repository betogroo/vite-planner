<script setup lang="ts">
import { ref } from 'vue'
import { Project } from '@/types/project'

interface Props {
  item: Project
}
defineProps<Props>()

const details = ref(false)
</script>

<template>
  <v-card
    variant="elevated"
    class="d-flex align-center mb-1 card-border"
    :disabled="item.disabled"
    :class="item.complete ? 'complete' : ''"
    :key="item.id"
  >
    <v-card variant="plain" @click="details = !details" class="mr-auto">
      <v-card-title class="text-body-1">{{ item.title }}</v-card-title>
      <v-card-text v-if="details" class="text-body-1">{{
        item.details
      }}</v-card-text>
    </v-card>

    <v-card-actions min-width="90">
      <app-icon-btn icon="mdi-pencil"></app-icon-btn>
      <app-icon-btn icon="mdi-trash-can"></app-icon-btn>
      <app-icon-btn icon="mdi-check"></app-icon-btn>
    </v-card-actions>
  </v-card>
</template>
