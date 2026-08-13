# Timeline Anatomy

> **Blueprint:** Interactive example below teaches planned timeline behavior.

Timeline reads left to right. It answers four questions:

- **When are we?** — playhead
- **What can change?** — tracks and properties
- **Where are changes saved?** — keyframes
- **How long is something active?** — clips or ranges

<TimelineDemo />

Click keyframe icons or drag **Move playhead**. Readouts show values that would be active at that moment.

## Parts of a timeline

### Time ruler

Labels seconds or frames. Zooming changes ruler detail, not sequence duration.

### Playhead

Vertical line marking current time. Viewer and properties should always match it.

### Tracks

Rows for camera, world time, weather, visibility, audio, and future controls. Tracks can be expanded into individual properties.

### Keyframes

Small icons that store property values. Icon shape indicates interpolation.

### Work range

Optional start/end handles limit preview or output to one section. They should not delete content outside range.

## Continuous and discrete tracks

**Continuous values** can blend smoothly:

- Camera position
- Camera rotation
- Field of view
- Replay speed
- World time

**Discrete values** switch states:

- Clear → rain
- Visible → hidden
- Camera A → camera B

Use smooth curves for continuous values. Use <KeyframeIcon type="hold" label="Hold keyframe" /> **hold keyframes** for switches unless a real blend is supported.

## Layer order

For replay editor, track order should organize work rather than decide visual stacking. A hidden entity stays hidden regardless of track row position. Group related tracks for readability.
