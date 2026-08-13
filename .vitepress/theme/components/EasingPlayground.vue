<script setup lang="ts">
import { computed, onBeforeUnmount, onMounted, ref } from "vue";
import KeyframeIcon from "./KeyframeIcon.vue";

const presets = [
  { id: "linear", name: "Linear", icon: "linear", points: [0, 0, 1, 1], summary: "Same speed from start to finish.", camera: "Mechanical camera move; useful for constant-speed passes." },
  { id: "hold", name: "Hold", icon: "hold", points: [0, 0, 1, 1], summary: "Keeps old value, then changes instantly.", camera: "Switch weather or visibility without blending between states." },
  { id: "ease-in", name: "Ease in", icon: "ease-in", points: [.42, 0, 1, 1], summary: "Starts slowly, then speeds up.", camera: "Camera gently leaves a still position." },
  { id: "ease-out", name: "Ease out", icon: "ease-out", points: [0, 0, .58, 1], summary: "Starts quickly, then slows near end.", camera: "Camera settles softly on a subject." },
  { id: "ease-in-out", name: "Ease in + out", icon: "ease-in-out", points: [.42, 0, .58, 1], summary: "Slow start, faster middle, slow end.", camera: "Natural shot between two points." },
  { id: "bezier", name: "Custom curve", icon: "bezier", points: [.25, .1, .25, 1], summary: "You shape acceleration with two handles.", camera: "Fine control for dramatic starts, stops, and reveals." }
];

const selectedId = ref("ease-in-out");
const duration = ref(2.5);
const custom = ref([.25, .1, .25, 1]);
const elapsed = ref(0);
const playing = ref(false);
let frame = 0;
let startedAt = 0;

const selected = computed(() => presets.find(({ id }) => id === selectedId.value) ?? presets[0]);
const points = computed(() => selectedId.value === "bezier" ? custom.value : selected.value.points);
const path = computed(() => {
  if (selectedId.value === "hold") return "M28 284 H292 V40";
  const [x1, y1, x2, y2] = points.value;
  return `M28 284 C${28 + x1 * 264} ${284 - y1 * 244}, ${28 + x2 * 264} ${284 - y2 * 244}, 292 40`;
});

const cubic = (t: number, a: number, b: number) => {
  const inverse = 1 - t;
  return 3 * inverse * inverse * t * a + 3 * inverse * t * t * b + t * t * t;
};

const easedProgress = computed(() => {
  const progress = Math.min(elapsed.value / duration.value, 1);
  if (selectedId.value === "hold") return progress >= 1 ? 1 : 0;
  const [x1, y1, x2, y2] = points.value;
  let low = 0;
  let high = 1;
  for (let index = 0; index < 16; index += 1) {
    const middle = (low + high) / 2;
    if (cubic(middle, x1, x2) < progress) low = middle;
    else high = middle;
  }
  return cubic((low + high) / 2, y1, y2);
});

const dotX = computed(() => 28 + Math.min(elapsed.value / duration.value, 1) * 264);
const dotY = computed(() => 284 - easedProgress.value * 244);
const cameraX = computed(() => -10 + easedProgress.value * 30);

const animate = (time: number) => {
  elapsed.value = Math.min((time - startedAt) / 1000, duration.value);
  if (elapsed.value < duration.value) frame = requestAnimationFrame(animate);
  else playing.value = false;
};

const play = () => {
  cancelAnimationFrame(frame);
  elapsed.value = 0;
  playing.value = true;
  startedAt = performance.now();
  frame = requestAnimationFrame(animate);
};

const reset = () => {
  cancelAnimationFrame(frame);
  elapsed.value = 0;
  playing.value = false;
};

onMounted(reset);
onBeforeUnmount(() => cancelAnimationFrame(frame));
</script>

<template>
  <div class="easing-playground">
    <div class="easing-presets" role="group" aria-label="Easing type">
      <button
        v-for="preset in presets"
        :key="preset.id"
        type="button"
        :class="{ active: selectedId === preset.id }"
        :aria-pressed="selectedId === preset.id"
        @click="selectedId = preset.id; reset()"
      >
        <KeyframeIcon :type="preset.icon" :label="`${preset.name} icon`" />
        <span>{{ preset.name }}</span>
      </button>
    </div>

    <div class="easing-layout">
      <div>
        <svg class="easing-graph" viewBox="0 0 320 320" role="img" :aria-label="`${selected.name} value graph`">
          <g class="grid">
            <path v-for="n in 5" :key="`v${n}`" :d="`M${28 + n * 52.8} 40V284`" />
            <path v-for="n in 4" :key="`h${n}`" :d="`M28 ${284 - n * 61}H292`" />
          </g>
          <path d="M28 40V284H292" class="axes" />
          <path :d="path" class="curve" />
          <circle :cx="dotX" :cy="dotY" r="7" class="playhead-dot" />
          <text x="160" y="312" text-anchor="middle">time →</text>
          <text x="12" y="162" text-anchor="middle" transform="rotate(-90 12 162)">value →</text>
        </svg>
      </div>

      <div class="easing-copy">
        <h3>{{ selected.name }}</h3>
        <p>{{ selected.summary }}</p>
        <p><strong>Replay example:</strong> {{ selected.camera }}</p>
        <div class="position-readout" aria-live="polite">
          Camera X: <strong>{{ cameraX.toFixed(1) }}</strong>
        </div>
        <label>
          Preview duration: {{ duration.toFixed(1) }}s
          <input v-model.number="duration" type="range" min="1" max="6" step=".5" @input="reset" />
        </label>
        <div class="preview-actions">
          <button type="button" class="brand-button" @click="play">{{ playing ? "Restart" : "Play preview" }}</button>
          <button type="button" @click="reset">Reset</button>
        </div>
      </div>
    </div>

    <fieldset v-if="selectedId === 'bezier'" class="bezier-controls">
      <legend>Custom Bézier handles</legend>
      <label v-for="(label, index) in ['Start time', 'Start value', 'End time', 'End value']" :key="label">
        {{ label }}: {{ custom[index].toFixed(2) }}
        <input v-model.number="custom[index]" type="range" min="0" max="1" step=".01" @input="reset" />
      </label>
    </fieldset>
  </div>
</template>

<style scoped>
.easing-playground { margin: 24px 0; padding: 18px; border: 1px solid var(--vp-c-divider); border-radius: 14px; background: var(--vp-c-bg-soft); }
.easing-presets { display: grid; grid-template-columns: repeat(3, 1fr); gap: 8px; }
.easing-presets button { display: flex; align-items: center; gap: 8px; min-height: 44px; padding: 8px 10px; border: 1px solid var(--vp-c-divider); border-radius: 9px; background: var(--vp-c-bg); color: var(--vp-c-text-1); cursor: pointer; }
.easing-presets button:hover, .easing-presets button.active { border-color: var(--vp-c-brand-1); background: var(--vp-c-brand-soft); }
.easing-layout { display: grid; grid-template-columns: minmax(240px, 1fr) minmax(220px, .9fr); gap: 24px; align-items: center; margin-top: 18px; }
.easing-graph { width: 100%; max-height: 330px; color: var(--vp-c-text-2); }
.grid path { fill: none; stroke: var(--vp-c-divider); stroke-width: 1; }
.axes { fill: none; stroke: var(--vp-c-text-2); stroke-width: 2; }
.curve { fill: none; stroke: var(--vp-c-brand-1); stroke-width: 5; stroke-linecap: round; }
.playhead-dot { fill: var(--vp-c-brand-1); stroke: var(--vp-c-bg); stroke-width: 3; }
.easing-graph text { fill: var(--vp-c-text-2); font-size: 13px; }
.easing-copy h3 { margin-top: 0; }
.easing-copy label, .bezier-controls label { display: grid; gap: 5px; margin: 12px 0; font-size: 14px; }
input[type="range"] { width: 100%; accent-color: var(--vp-c-brand-1); }
.position-readout { padding: 10px 12px; border-radius: 8px; background: var(--vp-c-bg); font-variant-numeric: tabular-nums; }
.preview-actions { display: flex; gap: 8px; margin-top: 14px; }
.preview-actions button { padding: 7px 12px; border: 1px solid var(--vp-c-divider); border-radius: 7px; background: var(--vp-c-bg); color: var(--vp-c-text-1); cursor: pointer; }
.preview-actions .brand-button { border-color: var(--vp-c-brand-1); background: var(--vp-c-brand-1); color: white; }
.bezier-controls { display: grid; grid-template-columns: 1fr 1fr; gap: 0 16px; margin-top: 16px; padding: 12px 16px; border: 1px solid var(--vp-c-divider); border-radius: 10px; }
.bezier-controls legend { padding: 0 6px; font-weight: 600; }
@media (max-width: 700px) { .easing-presets { grid-template-columns: 1fr 1fr; } .easing-layout { grid-template-columns: 1fr; } .bezier-controls { grid-template-columns: 1fr; } }
</style>
