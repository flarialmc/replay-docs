# Audio Import and Sync

> **Blueprint:** Audio import is planned; current Replay controls do not provide an audio timeline.

Audio track adds music, narration, ambience, or timing reference. It should not alter source replay.

## Import flow

1. Choose **Import audio**.
2. Select supported file.
3. Audio appears as clip with waveform.
4. Drag clip to desired start.
5. Set volume and optional fade.
6. Lock track after sync.

Editor should report unsupported formats clearly and preserve original file.

## Waveform

Waveform shows loud/quiet moments. Use peaks to align:

- Hits
- Doors/explosions
- Beat drops
- Camera cuts
- Weather changes

Waveform is visual guide, not exact meaning. Listen after alignment.

## Sync methods

### Marker sync

Place marker on replay event and matching audio moment; align markers.

### Peak sync

Zoom in and align distinct waveform peak to visible action.

### Count-in

For music edits, mark regular beats first, then place cuts/moves around them.

## Scrubbing

Audio while dragging playhead helps precise sync but can sound harsh. Offer toggle and short snippets rather than full playback every pixel.

## Clip controls

Minimum useful controls:

- Start time
- Trim start/end
- Volume
- Mute/solo
- Fade in/out
- Lock
- Waveform zoom

No audio effects stack needed initially. Import, trim, sync, volume, fade cover core use.

## Replay speed changes

If replay speed changes, choose audio behavior explicitly:

- Audio stays normal speed
- Audio follows replay speed
- Audio clip remains sequence-locked while world action retimes

Music usually stays normal; captured ambience may need follow replay.

## Missing files

Project should store path and show **Offline audio** if moved. User can locate replacement without losing clip timing/settings.
