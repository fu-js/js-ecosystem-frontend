<template>
  <UTable
    class="flex-1"
    sticky
    :data="data"
    :columns="columns"
    :loading="status === 'pending'"
    :column-visibility="columnVisibility"
  />
</template>

<script setup lang="tsx">
import type { TableColumn } from "@nuxt/ui";
import { Department, Status, type Member } from "@prisma/client";
import { h, resolveComponent } from "vue";
import departmentNames from "~/utils/departmentNames";
import MemberCell from "./MemberCell.vue";

const UBadge = resolveComponent("UBadge");
const UButton = resolveComponent("UButton");
const MemberDropdownMenu = resolveComponent("MemberDropdownMenu");

type PartialMember = Pick<
  Member,
  "name" | "cohort" | "email" | "department" | "status" | "rollNumber"
>;

const columnVisibility = ref<Partial<Record<keyof PartialMember, boolean>>>({
  rollNumber: false,
});

const { data, status } = await useFetch<Member[]>("/api/member", {
  transform: (data) => {
    return data ?? [];
  },
  lazy: true,
});

const createHeader = (text: string) => {
  return h("div", { class: "text-center dbg" }, text);
};

const columns: TableColumn<PartialMember>[] = [
  {
    accessorKey: "name",
    header: () => createHeader("Name"),
    cell: ({ row }) => {
      return (
        <MemberCell
          name={row.getValue("name")}
          id={row.getValue("rollNumber")}
        />
      );
    },
  },
  {
    accessorKey: "department",
    header: () => createHeader("Department"),
    cell: ({ row }) => {
      const color = (
        {
          [Department.BanChuyenMon]: "primary",
          [Department.BanDoiNgoai]: "bdn",
          [Department.BanNoiDung]: "bnd",
          [Department.BanTruyenThong]: "btt",
          [Department.BanVanHoa]: "bvh",
        } as const
      )[row.getValue("department") as string];

      const icon = (
        {
          [Department.BanChuyenMon]: "i-lucide-circle",
          [Department.BanDoiNgoai]: "i-lucide-square",
          [Department.BanNoiDung]: "i-lucide-triangle",
          [Department.BanTruyenThong]: "i-lucide-pyramid",
          [Department.BanVanHoa]: "i-lucide-gem",
        } as const
      )[row.getValue("department") as string];

      return h(
        "div",
        { class: "text-center dbg" },
        h(
          UBadge,
          { class: "", variant: "solid", icon, color },
          () => departmentNames[row.getValue("department") as Department]
        )
      );
    },
  },
  {
    accessorKey: "status",
    header: () => createHeader("Status"),
    cell: ({ row }) => {
      const color = (
        {
          [Status.Active]: "success",
          [Status.Inactive]: "neutral",
          [Status.Ban]: "error",
        } as const
      )[row.getValue("status") as string];

      return h(
        "div",
        { class: "text-center dbg" },
        h(
          UBadge,
          { class: "capitalize rounded-full", variant: "subtle", color },
          () => row.getValue("status")
        )
      );
    },
  },
  {
    accessorKey: "rollNumber",
  },
  {
    id: "actions",
    cell: ({ row }) => {
      return h(
        "div",
        { class: "text-left dbg" },
        h(MemberDropdownMenu, {}, () =>
          h(UButton, {
            icon: "i-lucide-ellipsis-vertical",
            color: "neutral",
            variant: "ghost",
            "aria-label": "Actions dropdown",
          })
        )
      );
    },
  },
];
</script>
