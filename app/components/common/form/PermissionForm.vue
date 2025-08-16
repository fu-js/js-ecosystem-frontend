<template>
  <UForm class="flex flex-col gap-4" :state="formState" @submit="submitForm">
    <UFormField label="Name" name="action" required>
      <UInput class="w-full" v-model="formState.action" />
    </UFormField>
    <UFormField label="Category" name="category" required>
      <UInput class="w-full" v-model="formState.category" />
    </UFormField>
    <UFormField label="Description" name="description">
      <UTextarea class="w-full" v-model="formState.description" />
    </UFormField>
  </UForm>
</template>

<script setup lang="ts">
import type { Permission } from "@prisma/client";

const props = defineProps<{ permission: Partial<Permission> | null }>();
const emit = defineEmits(["close", "submitted"]);

const formState = reactive<Partial<Permission>>({
  id: undefined,
  action: "",
  category: "",
  description: "",
});

watch(
  () => props.permission,
  (newVal) => {
    if (newVal) {
      Object.assign(formState, newVal);
    } else {
      Object.assign(formState, {
        id: null,
        action: "",
        category: "",
        description: "",
      });
    }
  },
  { immediate: true }
);

const submitForm = async () => {
  await new Promise((resolve) => setTimeout(resolve, 500));
  emit("submitted", formState);
};
</script>
