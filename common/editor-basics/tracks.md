# Tracks and Properties

> **Blueprint:** Proposed track model for future editor.

Track = row for one editable subject. Expanding track reveals properties.

## Planned track types

| Track | Example properties |
| --- | --- |
| Camera | Position, rotation, roll, FOV, target |
| Replay timing | Source time, speed, freeze |
| World time | Clock time, follow recording |
| Weather | State, rain amount, thunder amount |
| Visibility | Category or individual object visible/hidden |
| Audio | Clip start, trim, volume, fade |

## Track controls

- **Enable:** include/exclude track result.
- **Lock:** prevent accidental edits.
- **Solo:** preview only selected track where meaningful.
- **Mute:** silence audio track.
- **Expand:** show properties/keyframes.
- **Color:** visually group related work.

Disabling track should not delete data. Locked track should still preview.

## Property keyframes

One track can hold different timing per property. Camera may reach position before FOV finishes changing. Link properties only when synchronized edit is wanted.

A filled keyframe indicator beside property means value exists at playhead. Empty indicator can mean property is animated but no key exists at current time.

## Active range

Some tracks only apply between start/end. Follow-camera track might cover one shot; audio clip has finite range. Outside range, editor should return to clear fallback, not preserve stale value accidentally.

## Track order

Rows organize editor. Unlike image layers, higher camera track is not automatically “in front.” If several tracks control same property, editor needs explicit priority or conflict warning.

Simplest rule: one active owner per property at a time.

## Groups

Group related tracks without changing behavior:

```text
Opening shot
├─ Camera
├─ World time
└─ Entity visibility
```

Collapsing group hides rows in editor only; preview stays unchanged.
