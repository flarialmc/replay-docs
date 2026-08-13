# Keyframes

Keyframe = saved property value at specific time. Two keyframes create change: first says where value starts, second says where it ends.

## First camera animation

1. Move playhead to shot start.
2. Position camera.
3. Add keyframes for position and rotation.
4. Move playhead later.
5. Move camera to end position.
6. Add second keyframes.
7. Play range and adjust timing.

If no second keyframe exists, value stays unchanged.

## Keyframe icons

### <KeyframeIcon type="linear" label="Linear keyframe" /> Linear

Straight, steady change. Good baseline; often feels mechanical for camera stops.

### <KeyframeIcon type="hold" label="Hold keyframe" /> Hold

Value does not blend. It changes at keyframe. Best for visibility and simple weather switches.

### <KeyframeIcon type="ease-in" label="Ease-in keyframe" /> Ease in

Segment starts slowly, then gains speed.

### <KeyframeIcon type="ease-out" label="Ease-out keyframe" /> Ease out

Segment starts quickly, then slows at end.

### <KeyframeIcon type="ease-in-out" label="Ease-in-out keyframe" /> Ease in + out

Slow start and end with faster middle. Common camera default.

### <KeyframeIcon type="bezier" label="Bézier keyframe" /> Custom Bézier

Handles shape acceleration or path. Use when presets are close but not exact.

## Move vs change value

Dragging keyframe left/right changes **when** event happens. Editing its value changes **what** happens. A future editor should make these operations visually distinct.

## Fewer is smoother

Many keyframes can create bumps and accidental speed changes. Start with shot start/end. Add middle keyframe only for real direction, timing, or framing need.

## Copy and paste

Pasting should preserve:

- Time spacing between copied keyframes
- Values
- Easing type and handles
- Property compatibility

Camera position keys should not paste onto weather track.
