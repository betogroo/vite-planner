<script setup lang="ts">
import { ref } from 'vue'

const drawerActive = ref(false)
const toggleDrawer = () => {
  drawerActive.value = !drawerActive.value
}
</script>

<template>
  <v-app class="bg-indigo-lighten-4">
    <v-container fluid>
      <AppBar @toggle-drawer="toggleDrawer" />
      <AppNavigationDrawer :drawerActive="drawerActive" />
      <v-main>
        <RouterView />
      </v-main>
    </v-container>
  </v-app>
</template>
