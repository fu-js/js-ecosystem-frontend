<template>
  <div
    @mousemove="handleMouseMove"
    @mouseleave="handleMouseLeave"
    :class="classes"
  >
    <slot :icon-size="180" />
  </div>
</template>

<script setup lang="ts">
const props = withDefaults(
  defineProps<{
    class?: string;
    iconSize?: number;
    iconMaxSize?: number;
    iconDistance?: number;
    direction?: "top" | "middle" | "bottom";
  }>(),
  {
    direction: "middle",
  }
);

const mouseX = ref(Infinity);
provide("mouseX", mouseX);

const handleMouseMove = (event: MouseEvent) => {
  mouseX.value = event.pageX;
};

const handleMouseLeave = () => {
  mouseX.value = Infinity;
};

const classes = cn(
  "mx-auto flex h-16 w-max justify-center gap-2 rounded-2xl border bg-neutral-900/10 p-4 backdrop-blur-md",
  {
    "items-start": props.direction === "top",
    "items-center": props.direction === "middle",
    "items-end": props.direction === "bottom",
  },
  props.class
);
</script>
