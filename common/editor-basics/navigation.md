# Timeline Navigation and Selection

Fast navigation matters more than fancy tools. Most editing time is spent moving, selecting, and comparing.

## Move through time

- **Scrub:** drag playhead for quick search.
- **Step:** move one frame for exact timing.
- **Jump:** go to next/previous keyframe.
- **Play range:** loop short section while tuning it.
- **Zoom:** inspect frames or see whole sequence.

Zoom around cursor or playhead so selected moment does not disappear.

## Select safely

### One keyframe

Click it. Properties show exact time/value.

### Several keyframes

Drag selection box or Shift-click. Moving group should preserve spacing.

### A time range

Select range to move, scale, copy, or preview complete action.

### A track

Select track header to affect all its keyframes only when action clearly says so.

## Snap

Snapping aligns playhead/keyframes to:

- Frames
- Other keyframes
- Markers
- Audio beats or waveform peaks
- Sequence start/end

Hold a modifier to temporarily disable snapping. Strong snap is helpful until it blocks fine correction.

## Markers

Markers are notes at moments. They do not change replay.

Useful marker names:

- Fight starts
- Camera cut
- Beat
- Weather change
- Hide HUD actor
- Final frame

Use colors sparingly: perhaps red for action, yellow for review, green for approved.

## Ripple warning

Moving one keyframe should not move later content by default. A separate **ripple** action may shift everything after selection, but must be obvious because it changes timing across many tracks.
