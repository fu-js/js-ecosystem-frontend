<template>
  <UCard>
    <div class="flex justify-between items-center mb-4">
      <h1 class="text-2xl font-bold">Permissions</h1>
      <PermissionModal>
        <PermissionForm :permission="null" />
      </PermissionModal>
    </div>

    <PermissionTable :permissions="allPermissions" />
  </UCard>
</template>

<script setup lang="ts">
import PermissionModal from "~/components/common/form/CreatePermissionModal.vue";
import PermissionForm from "~/components/common/form/PermissionForm.vue";
import PermissionTable from "~/components/common/table/PermissionTable.vue";

const allPermissions = getFakePermissions(12);
</script>
