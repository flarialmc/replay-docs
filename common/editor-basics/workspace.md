# Workspace and Projects

> **Blueprint:** Proposed organization for future replay editor.

## Project

A project should store edit decisions, not duplicate the whole replay. It can reference:

- Source `.flrreplay`
- Sequence start and end
- Tracks and keyframes
- Imported audio paths
- Editor layout and preview settings

Moving a source replay or audio file may break its link. A future editor should offer **Locate file** instead of silently deleting the track.

## Main workspace areas

### Viewer

Shows current frame. Use it to move camera, select visible actors, and judge framing.

### Timeline

Shows when events happen. Horizontal position means time; vertical rows separate tracks and properties.

### Properties

Shows editable values for selected track: position, rotation, field of view, weather, visibility, and similar controls.

### Replay browser

Chooses source replay and displays useful metadata such as world, date, duration, and size.

### Audio panel

Imports sound and shows waveform once audio support exists.

## Sequence settings

Before detailed work, decide:

- Start and end time
- Preview frame rate
- Playback speed baseline
- Camera field of view baseline
- Whether world time follows recording or an override

Frame rate changes how time is displayed, not replay events themselves. A 30-second sequence remains 30 seconds at 30 or 60 frames per second.

## Safe project behavior

A good editor is **non-destructive**: changing sequence does not rewrite source replay. Save edit instructions separately. This enables experimentation, undo, and multiple versions from one recording.

## Useful layout shortcuts

Future editor should support:

- Space: play or pause
- Left/Right: move one frame
- Shift + Left/Right: larger time jump
- Home/End: sequence start/end
- `+`/`-`: timeline zoom
- Delete: remove selected keyframes, never source replay

Exact bindings should remain configurable.
