<script setup lang="ts"></script>

<template>
  <header class="px-10 flex justify-between items-center bg-transparent">
    <div class="flex gap-2 items-center">
      <UAvatar alt="JS Club" size="md" />
      <span class="font-bold text-2xl">JS Club</span>
    </div>

    <UiNavigation />

    <div class="flex gap-1">
      <UButton variant="ghost" color="neutral" icon="i-lucide-search" />
      <UButton variant="ghost" color="neutral" icon="i-lucide-github" />
      <UButton variant="ghost" color="neutral" icon="i-lucide-sun" />
    </div>
  </header>
</template>
