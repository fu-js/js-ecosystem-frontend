<template>
  <div
    ref="elRef"
    :class="
      cn(
        'flex aspect-square cursor-pointer items-center justify-center rounded-full',
      )
    "
  >
    <slot />
  </div>
</template>

<script setup lang="ts">
defineOptions({
  inheritAttrs: true,
});

import { animate } from "animejs";

const dockIcon = useAppConfig().dock.icon;
const scale = ref(1);
const elRef = ref<HTMLDivElement | null>(null);
const mouseX = inject<Ref<number>>("mouseX", ref(Infinity));
const padding = computed(() => Math.max(6, dockIcon.size * 0.2));

watch(mouseX, (newX) => {
  if (!elRef.value) return;

  const rect = elRef.value.getBoundingClientRect();
  const dist = Math.abs(newX - rect.left - rect.width / 2);

  const currentScale =
    dist < dockIcon.distance ? 1 - dist / dockIcon.distance : 0;

  const targetSize =
    dockIcon.size + dockIcon.size * (dockIcon.paddingRatio - 1);
  const targetScale =
    scale.value + (dockIcon.scaleRatio - currentScale) * currentScale;

  // animate(elRef.value, {
  //   scale: targetScale,
  //   width: `${targetSize}px`,
  //   height: `${targetSize}px`,
  //   duration: dockIcon.duration,
  //   easing: "easeOutElastic(1, .6)",
  // });
});
</script>
