# Common Editing Concepts

::: warning Editor blueprint
These pages describe the editor Flarial Replay is working toward. They teach shared editing ideas and guide future design; buttons and tools shown here may not exist in current builds.
:::

Replay editing turns a recorded session into a planned camera sequence. You choose **what viewers see**, **when they see it**, and **how smoothly one moment changes into another**.

No text, shape, image, or video layers are assumed here. Focus stays on:

- Camera position, rotation, field of view, and cuts
- Replay speed and timing
- World time and weather
- Entity and object visibility
- Imported audio

## Mental model

A replay contains recorded world activity. An edit adds instructions without changing that original recording.

1. **Replay** — source session.
2. **Sequence** — edited time range.
3. **Timeline** — map of sequence over time.
4. **Track** — one editable subject, such as camera or weather.
5. **Property** — one value on that track, such as camera X or rain amount.
6. **Keyframe** — saved property value at a chosen time.
7. **Interpolation** — rule used between two keyframes.

## Suggested learning path

1. [Workspace and projects](/common/editor-basics/workspace)
2. [Timeline anatomy](/common/editor-basics/timeline)
3. [Keyframes](/common/keyframes/)
4. [Easing](/common/keyframes/easing)
5. [Camera paths](/common/camera/paths)
6. [World changes](/common/world/time-weather)
7. [Audio and sync](/common/audio)
8. [Editing workflow](/common/workflow)

## Current replay vs editor blueprint

| Area | Current Replay | Editor blueprint |
| --- | --- | --- |
| Recording | Record next world, save `.flrreplay` | Keep source replay unchanged |
| Playback | Play, pause, seek, speed, camera movement | Editable sequence with tracks |
| Camera | Free replay camera and player teleport | Keyframed paths, rotation, FOV, cuts |
| World | Recorded state | Keyframed time, weather, and visibility |
| Audio | Not part of current controls | Import and align audio tracks |
| Output | Replay playback only | Preview first; rendering/export comes later |

## Three rules that prevent most mistakes

- Keep source replay untouched.
- Make timing readable before polishing motion.
- Use fewer keyframes until more are clearly needed.
