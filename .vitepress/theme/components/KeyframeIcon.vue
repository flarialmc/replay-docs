<script setup lang="ts">
const props = withDefaults(defineProps<{ type?: string; label?: string }>(), {
  type: "linear",
  label: "Keyframe"
});
</script>

<template>
  <span class="keyframe-icon" :class="`keyframe-icon--${props.type}`" role="img" :aria-label="props.label">
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <template v-if="props.type === 'hold'">
        <path d="M3 17h7V7h11" class="keyframe-icon__line" />
        <rect x="8" y="5" width="4" height="4" rx=".5" />
      </template>
      <template v-else-if="props.type === 'ease-in'">
        <path d="M3 18c8 0 12-1 18-12" class="keyframe-icon__line" />
        <path d="m18 6 3-3 3 3-3 3z" transform="translate(-3 0)" />
      </template>
      <template v-else-if="props.type === 'ease-out'">
        <path d="M3 18C9 7 13 6 21 6" class="keyframe-icon__line" />
        <path d="m0 18 3-3 3 3-3 3z" />
      </template>
      <template v-else-if="props.type === 'ease-in-out'">
        <path d="M3 18C9 18 15 6 21 6" class="keyframe-icon__line" />
        <path d="m9 12 3-3 3 3-3 3z" />
      </template>
      <template v-else-if="props.type === 'bezier'">
        <path d="M3 18C8 18 15 6 21 6" class="keyframe-icon__line" />
        <path d="M7 16 17 8" class="keyframe-icon__handle" />
        <circle cx="7" cy="16" r="1.5" />
        <circle cx="17" cy="8" r="1.5" />
      </template>
      <template v-else>
        <path d="m12 4 8 8-8 8-8-8z" />
      </template>
    </svg>
  </span>
</template>

<style scoped>
.keyframe-icon {
  display: inline-flex;
  width: 1.4em;
  height: 1.4em;
  color: var(--vp-c-brand-1);
  vertical-align: -0.28em;
}

.keyframe-icon svg { width: 100%; height: 100%; overflow: visible; }
.keyframe-icon path:not(.keyframe-icon__line, .keyframe-icon__handle),
.keyframe-icon rect,
.keyframe-icon circle { fill: currentColor; }
.keyframe-icon__line,
.keyframe-icon__handle { fill: none; stroke: currentColor; stroke-width: 1.8; stroke-linecap: round; }
.keyframe-icon__handle { stroke-width: 1; opacity: .65; }
</style>
