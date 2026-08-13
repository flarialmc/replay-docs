<script setup lang="ts">
import { computed, ref } from "vue";
import KeyframeIcon from "./KeyframeIcon.vue";

const time = ref(35);
const tracks = [
  { name: "Camera position", icon: "camera", color: "#fb7185", keys: [{ at: 0, type: "ease-out" }, { at: 35, type: "ease-in-out" }, { at: 72, type: "ease-in-out" }, { at: 100, type: "ease-in" }] },
  { name: "World time", icon: "clock", color: "#f59e0b", keys: [{ at: 0, type: "linear" }, { at: 52, type: "linear" }, { at: 100, type: "linear" }] },
  { name: "Weather", icon: "weather", color: "#60a5fa", keys: [{ at: 0, type: "hold" }, { at: 64, type: "hold" }, { at: 86, type: "hold" }] },
  { name: "Entity visibility", icon: "eye", color: "#a78bfa", keys: [{ at: 0, type: "hold" }, { at: 43, type: "hold" }, { at: 76, type: "hold" }] },
  { name: "Audio", icon: "audio", color: "#34d399", keys: [{ at: 18, type: "linear" }, { at: 88, type: "linear" }] }
];

const cameraX = computed(() => (-12 + time.value * .36).toFixed(1));
const hour = computed(() => 6 + time.value * .13);
const clock = computed(() => {
  const hours = Math.floor(hour.value) % 24;
  const minutes = Math.floor((hour.value % 1) * 60);
  return `${String(hours).padStart(2, "0")}:${String(minutes).padStart(2, "0")}`;
});
const weather = computed(() => time.value < 64 ? "Clear" : time.value < 86 ? "Rain" : "Thunder");
const visible = computed(() => time.value < 43 || time.value >= 76);
</script>

<template>
  <div class="timeline-demo">
    <div class="timeline-toolbar">
      <strong>Blueprint timeline</strong>
      <span>{{ (time * .3).toFixed(1) }}s</span>
    </div>
    <div class="ruler" aria-hidden="true">
      <span v-for="tick in [0, 5, 10, 15, 20, 25, 30]" :key="tick" :style="{ left: `${tick / 30 * 100}%` }">{{ tick }}s</span>
    </div>
    <div class="track-list">
      <div v-for="track in tracks" :key="track.name" class="track">
        <div class="track-name">
          <svg viewBox="0 0 24 24" aria-hidden="true">
            <path v-if="track.icon === 'camera'" d="M4 7h4l2-2h4l2 2h4v11H4zm8 2a3 3 0 1 0 0 6 3 3 0 0 0 0-6" />
            <path v-else-if="track.icon === 'clock'" d="M12 3a9 9 0 1 0 0 18 9 9 0 0 0 0-18m1 4v5l4 2-1 2-5-3V7z" />
            <path v-else-if="track.icon === 'weather'" d="M7 18h11a4 4 0 0 0 0-8h-1a6 6 0 0 0-11-1 4.5 4.5 0 0 0 1 9" />
            <path v-else-if="track.icon === 'eye'" d="M2 12s4-6 10-6 10 6 10 6-4 6-10 6S2 12 2 12m10-3a3 3 0 1 0 0 6 3 3 0 0 0 0-6" />
            <path v-else d="M5 9v6h4l5 4V5L9 9zm11 1a4 4 0 0 1 0 4m2-7a7 7 0 0 1 0 10" />
          </svg>
          <span>{{ track.name }}</span>
        </div>
        <div class="track-lane" :style="{ '--track-color': track.color }">
          <button
            v-for="key in track.keys"
            :key="key.at"
            type="button"
            class="timeline-key"
            :style="{ left: `${key.at}%` }"
            :aria-label="`Go to ${track.name} keyframe at ${(key.at * .3).toFixed(1)} seconds`"
            @click="time = key.at"
          >
            <KeyframeIcon :type="key.type" :label="`${key.type} keyframe`" />
          </button>
        </div>
      </div>
      <div class="playhead" :style="{ left: `calc(var(--track-label-width) + (100% - var(--track-label-width)) * ${time / 100})` }" aria-hidden="true" />
    </div>
    <label class="scrubber">
      Move playhead
      <input v-model.number="time" type="range" min="0" max="100" step="1" />
    </label>
    <div class="timeline-values" aria-live="polite">
      <span>Camera X <strong>{{ cameraX }}</strong></span>
      <span>Time <strong>{{ clock }}</strong></span>
      <span>Weather <strong>{{ weather }}</strong></span>
      <span>Entity <strong>{{ visible ? "Visible" : "Hidden" }}</strong></span>
    </div>
  </div>
</template>

<style scoped>
.timeline-demo { --track-label-width: 168px; margin: 24px 0; overflow: hidden; border: 1px solid var(--vp-c-divider); border-radius: 14px; background: var(--vp-c-bg-soft); }
.timeline-toolbar { display: flex; justify-content: space-between; padding: 12px 14px; border-bottom: 1px solid var(--vp-c-divider); }
.timeline-toolbar span { color: var(--vp-c-brand-1); font-variant-numeric: tabular-nums; }
.ruler { position: relative; height: 30px; margin-left: 168px; border-bottom: 1px solid var(--vp-c-divider); color: var(--vp-c-text-3); font-size: 11px; }
.ruler span { position: absolute; top: 7px; transform: translateX(-50%); }
.track-list { position: relative; }
.track { display: grid; grid-template-columns: 168px 1fr; min-height: 43px; border-bottom: 1px solid var(--vp-c-divider); }
.track-name { display: flex; align-items: center; gap: 8px; padding: 0 12px; border-right: 1px solid var(--vp-c-divider); font-size: 13px; }
.track-name svg { width: 19px; height: 19px; fill: var(--vp-c-text-2); }
.track-lane { position: relative; background: repeating-linear-gradient(90deg, transparent 0, transparent calc(16.666% - 1px), var(--vp-c-divider) 16.666%); }
.timeline-key { position: absolute; top: 50%; width: 26px; height: 28px; padding: 3px; border: 0; background: transparent; color: var(--track-color); transform: translate(-50%, -50%); cursor: pointer; }
.timeline-key :deep(.keyframe-icon) { color: var(--track-color); font-size: 18px; }
.playhead { position: absolute; top: 0; bottom: 0; width: 2px; background: var(--vp-c-brand-1); transform: translateX(-1px); pointer-events: none; }
.playhead::before { content: ""; position: absolute; top: -5px; left: -5px; border-top: 7px solid var(--vp-c-brand-1); border-left: 6px solid transparent; border-right: 6px solid transparent; }
.scrubber { display: grid; gap: 6px; padding: 12px 14px; font-size: 13px; }
.scrubber input { width: 100%; accent-color: var(--vp-c-brand-1); }
.timeline-values { display: grid; grid-template-columns: repeat(4, 1fr); gap: 1px; background: var(--vp-c-divider); border-top: 1px solid var(--vp-c-divider); }
.timeline-values span { padding: 10px; background: var(--vp-c-bg); color: var(--vp-c-text-2); font-size: 12px; }
.timeline-values strong { display: block; color: var(--vp-c-text-1); font-size: 14px; }
@media (max-width: 650px) { .timeline-demo { --track-label-width: 120px; } .track { grid-template-columns: var(--track-label-width) 1fr; } .ruler { margin-left: var(--track-label-width); } .track-name { padding: 0 7px; font-size: 11px; } .timeline-values { grid-template-columns: 1fr 1fr; } }
</style>
