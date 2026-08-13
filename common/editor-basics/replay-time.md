# Replay Time, Speed, and Freezes

> **Blueprint:** Planned timing track. Current playback speed/seek remain separate controls.

Two clocks matter:

- **Sequence time:** where edit playhead is.
- **Source replay time:** which recorded moment is shown.

Normally both move together. Timing keyframes let them differ.

## Speed

| Speed | Result |
| --- | --- |
| `0x` | Freeze source replay |
| `0.25x` | Quarter-speed slow motion |
| `1x` | Normal recording speed |
| `2x` | Twice as fast |
| `4x` | Four times as fast |

Camera may follow sequence time while world action slows. This creates smooth camera move around frozen or slowed action.

## Freeze

Freeze holds one replay moment while sequence continues. Use for:

- Orbit around hit
- Hold final pose
- Let narration explain moment
- Transition weather/time without moving actors

At freeze end, source time resumes from held moment unless keyframes intentionally jump elsewhere.

## Speed ramp

Speed ramp changes gradually:

1. Normal `1x`
2. Ease toward `0.2x` before impact
3. Hold slow motion briefly
4. Ease back to `1x`

Use speed graph; abrupt speed jumps can feel like lag.

## Time jump

Hold interpolation then jump source time for instant skip. Pair with camera cut. Smoothly interpolating across long replay gap forces editor to process/show everything between.

## Reverse

Reverse replay is not same as playing video backward. Recorded world state may need reconstruction. Until reliable reverse exists, use forward playback, freeze, cuts, or a rebuilt segment.

## Audio choice

Imported music usually stays sequence-locked at normal speed. Captured ambience may follow source speed. Editor should let each audio track choose.

## Timing pitfalls

- Freeze world but forget camera continues.
- Ease speed to nearly zero for too long.
- Jump source time without camera cut.
- Sync audio to source time, then change speed.
- Assume backward seek is instant; current replay rebuilds world state.
