# Playback Controls

Playback controls appear at the bottom of the screen after a replay world loads.

## Overlay

| Control | Action |
| --- | --- |
| Timeline | Drag to seek to a point in the replay |
| Play / Pause | Pause or resume playback |
| Back 10 | Seek backward 10 seconds |
| Back 5 | Seek backward 5 seconds |
| Forward 5 | Seek forward 5 seconds |
| Forward 15 | Seek forward 15 seconds |
| Speed | Cycle through `0.25x`, `0.5x`, `1x`, `2x`, and `4x` |
| Player camera | Give mouse control to or release the replay camera |
| Camera | Reserved for capture; not connected yet |
| Chevron | Collapse or expand the overlay |

Backward seeking recreates the temporary replay world and fast-forwards to the target. Large seeks may take time.

## Default keys

| Key | Action |
| --- | --- |
| `F` | Grab or release replay camera input |
| `J` | Open recorded player menu |
| `Esc` | Close player menu |

Change **Camera Control** and **Player Menu** keybinds in the **Replay Controller** module settings.

`F5` perspective switching is blocked during active replay playback to keep the replay camera stable.

When playback reaches the end, it pauses. Leave the replay world to exit, or enable **Replay Controller** and use **Stop Replay**.

## Player menu

Press `J` during playback to open the player menu. Search currently visible recorded players, then choose **Teleport** to move the replay camera to that player's current recorded position.

Normal movement bindings continue controlling the replay viewer when camera input is grabbed.

## Advanced Replay Controller

Enable the **Replay Controller** module for a diagnostic window with:

- Start, end, `±5s`, and `±10s` seeking
- Pause, resume, and stop actions
- Speed slider from `0.1x` to `8x`
- Replay status and packet diagnostics
- Incoming/outgoing packet log with name, ID, direction, timing, filter, and copy action

Packet log keeps up to 4,096 entries. It does not expose packet payload bytes. Pausing this log does not pause replay recording or playback.
