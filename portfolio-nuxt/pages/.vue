<script setup>

const routes = [
  { path: '/app', component: App },
  { path: '/project', component: Project }
];

</script>

<template>
    <router-view v-slot="{ Component }">
      <transition>
        <app :is="Component" />
      </transition>
    </router-view>
  </template>