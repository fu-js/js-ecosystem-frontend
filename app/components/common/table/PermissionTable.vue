<template>
  <UTable
    :data="fakePermissions"
    :columns="columns"
    :empty-state="{
      icon: 'i-heroicons-circle-stack',
      label: 'No data',
    }"
  >
    <template #description-data="{ row }">
      <span
        class="whitespace-nowrap overflow-hidden text-ellipsis max-w-[200px] block"
      >
        {{ row.getValue("description") }}
      </span>
    </template>

    <template #actions-data="{ row }">
      <div class="flex gap-2">
        <UButton
          icon="i-heroicons-pencil-square"
          variant="ghost"
          @click="$emit('edit', row)"
        />
        <UButton icon="i-heroicons-trash" variant="ghost" color="error" />
      </div>
    </template>
  </UTable>
</template>

<script setup lang="ts">
import type { TableColumn } from "@nuxt/ui";
import type { Permission } from "@prisma/client";

const props = defineProps<{ permissions: Permission[] }>();

const columns: TableColumn<Permission>[] = [
  { accessorKey: "action", header: "Name" },
  { accessorKey: "category", header: "Category" },
  { accessorKey: "description", header: "Description" },
];
</script>
