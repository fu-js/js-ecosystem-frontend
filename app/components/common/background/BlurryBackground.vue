<template>
  <div class="w-full h-full outline outline-primary">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      version="1.1"
      xmlns:xlink="http://www.w3.org/1999/xlink"
      xmlns:svgjs="http://svgjs.dev/svgjs"
      viewBox="0 0 800 800"
      opacity="1"
    >
      <defs>
        <filter
          id="bbblurry-filter"
          x="-100%"
          y="-100%"
          width="400%"
          height="400%"
          filterUnits="objectBoundingBox"
          primitiveUnits="userSpaceOnUse"
          color-interpolation-filters="sRGB"
        >
          <feGaussianBlur
            stdDeviation="125"
            x="0%"
            y="0%"
            width="100%"
            height="100%"
            in="SourceGraphic"
            edgeMode="none"
            result="blur"
          ></feGaussianBlur>
        </filter>
      </defs>
      <g filter="url(#bbblurry-filter)">
        <ellipse
          rx="70.5"
          ry="70.5"
          cx="508.0008128094925"
          cy="564.6702490436892"
          fill="hsl(37, 99%, 67%)"
        ></ellipse>
        <ellipse
          rx="70.5"
          ry="70.5"
          cx="248.36199649033074"
          cy="302.97808717877683"
          fill="hsl(316, 73%, 52%)"
        ></ellipse>
        <ellipse
          rx="70.5"
          ry="70.5"
          cx="281.3029014843645"
          cy="395.4150788849547"
          fill="hsl(185, 100%, 57%)"
        ></ellipse>
      </g>
    </svg>
  </div>
</template>
