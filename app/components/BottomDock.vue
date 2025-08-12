<template>
  <div
    class="absolute overflow-hidden h-24 w-full flex items-center bottom-0 left-[50vw] -translate-x-[50%]"
  >
    <Dock direction="middle">
      <DockIcon>
        <UButton
          :class="iconClasses"
          icon="i-lucide-circle"
          color="neutral"
          variant="link"
        />
      </DockIcon>
      <DockIcon>
        <UButton
          :class="iconClasses"
          icon="i-lucide-square"
          color="neutral"
          variant="link"
        />
      </DockIcon>

      <USeparator orientation="vertical" :class="dock.separator.h" />

      <DockIcon>
        <ColorModeButton
          :class="cn('text-primary', iconClasses)"
          variant="link"
        />
      </DockIcon>

      <USeparator orientation="vertical" :class="dock.separator.h" />

      <DockIcon>
        <UIDebugButton
          :class="cn('', iconClasses)"
        />
      </DockIcon>
      <DockIcon>
        <UButton
          :class="iconClasses"
          icon="i-lucide-diamond"
          color="neutral"
          variant="link"
        />
      </DockIcon>
    </Dock>
  </div>
</template>

<script setup lang="ts">
const iconClasses = "rounded-full";
const dock = useAppConfig().dock;
</script>
