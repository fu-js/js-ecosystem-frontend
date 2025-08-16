<script setup lang="ts">
const open = ref(false);
</script>

<template>
  <UModal
    v-model:open="open"
    title="Create Permission"
    :ui="{ footer: 'justify-end' }"
  >
    <UButton icon="i-heroicons-plus" label="Create Permission" />

    <template #body>
      <slot>
        <USkeleton class="h-48" />
      </slot>
    </template>

    <template #footer="{ close }">
      <UButton
        label="Cancel"
        color="neutral"
        variant="outline"
        @click="close"
      />
      <UButton label="Create" color="neutral" />
    </template>
  </UModal>
</template>
