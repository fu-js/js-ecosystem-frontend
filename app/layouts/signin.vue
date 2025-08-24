<script setup lang="ts">
import { createDraggable, svg, stagger, animate, text } from "animejs";
import Line from "~/components/ui/svg/Line.vue";

const paperClasses = "absolute h-[40vh] w-[40vh] shadow-xl cursor-pointer";
const transition =
  "hover:opacity-40 hover:scale-110 transition-all duration-500 ease-in-out";

let paperCount = 3;

onMounted(() => {
  createDraggable(".card", { container: ".playground" });

  animate(svg.createDrawable(".drawable"), {
    draw: ["0 0", "0 1", "1 1"],
    ease: "inOutQuad",
    duration: 2000,
    delay: stagger(100),
  });
});

const moveOutside = (target: string) => {
  animate(target, { scale: "0", duration: 200 });
  paperCount--;
  if (paperCount === 0) {
    showOut(".club");
    opacityLine(".hook");
  }
};

const showOut = (target: string) => {
  animate(target, { opacity: "0.75", scale: "1.2", duration: 3000 });
};

const opacityLine = (target: string) => {
  animate(target, { opacity: "0.75", duration: 3000 });

  const { chars } = text.split(target, {
    chars: { wrap: "clip" },
  });

  animate(chars, {
    opacity: [{ to: [0.2, 1] }, { to: 0.2, delay: 1500, ease: "in(3)" }],
    duration: 250,
    ease: "out(3)",
    delay: stagger(50, { start: 0 }),
    loopDelay: 300,
    start: 2000,
    loop: true,
  });
};
</script>

<template>
  <div class="h-screen select-none">
    <div
      class="playground relative flex h-full w-full items-center justify-center overflow-hidden"
    >
      <Line class="pointer-events-none absolute z-1 scale-120" />

      <span
        class="club text-dimmed absolute top-[50%] left-[50%] w-full translate-x-[-50%] translate-y-[-100%] text-center text-8xl font-extralight tracking-wider opacity-10 text-shadow-md"
      >
        JS Club
      </span>
      <span
        class="hook text-dimmed absolute top-[50%] left-[50%] w-full translate-x-[-50%] translate-y-[50%] text-center text-6xl font-extralight tracking-wider opacity-10 text-shadow-md"
      >
        Câu lạc bộ học thuật số 1 FPTU
      </span>

      <div
        :class="
          cn(
            'paper-1 bg-muted -translate-x-[40vh] rotate-15',
            paperClasses,
            transition,
          )
        "
        @click="moveOutside('.paper-1')"
      ></div>
      <div
        :class="cn('paper-2 bg-elevated rotate-15', paperClasses, transition)"
        @click="moveOutside('.paper-2')"
      ></div>
      <div
        :class="
          cn(
            'paper-3 bg-accented translate-x-[40vh] rotate-15',
            paperClasses,
            transition,
          )
        "
        @click="moveOutside('.paper-3')"
      ></div>

      <UCard
        class="card bg-default/20 z-5 flex justify-center px-4 py-2 text-center shadow-lg backdrop-blur-sm md:px-8"
      >
        <div class="mb-6">
          <h1 class="mb-4 text-[clamp(1.6rem,5vw,2rem)] font-bold">
            Sign in to JS Club
          </h1>
          <p
            class="text-muted text-[clamp(1.3rem,4vw,1.6rem)] font-light text-wrap"
          >
            For club member only
          </p>
        </div>

        <UIcon
          class="text-dimmed mb-6 hidden size-12 rotate-0 transform transition-transform duration-300 ease-in-out hover:rotate-180 md:inline-block"
          name="i-lucide-pointer"
        ></UIcon>

        <div class="m-auto w-min p-0.5">
          <slot />
        </div>
      </UCard>
    </div>
  </div>
</template>
