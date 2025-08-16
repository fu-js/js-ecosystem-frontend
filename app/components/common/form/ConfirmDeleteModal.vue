<script setup lang="ts">
const open = ref(false);
</script>

<template>
  <UModal
    v-model:open="open"
    title="Delete"
    :ui="{ footer: 'justify-end' }"
  >
    <UButton icon="i-heroicons-plus" label="Create Permission" />

    <template #body>
      <slot>
        <ServerPlaceholder class="h-98" />
      </slot>
    </template>

    <template #footer="{ close }">
      <UButton
        label="Cancel"
        color="neutral"
        variant="outline"
        @click="close"
      />
      <UButton label="Delete" color="error" />
    </template>
  </UModal>
</template>
