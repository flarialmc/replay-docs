# Camera Paths

> **Blueprint:** Planned camera-track behavior.

Camera shot combines **position**, **orientation**, **field of view**, and **time**.

## Build basic path

1. Pick clear start framing.
2. Add position + rotation keyframes.
3. Move playhead to shot end.
4. Place camera at final framing.
5. Add second keys.
6. Use Ease in + out.
7. Preview for collisions and sudden turns.

## Position

X, Y, Z define location. Straight interpolation gives direct line. Curved interpolation lets camera arc around subject.

## Orientation

Two useful modes:

- **Free rotation:** keyframe yaw/pitch directly.
- **Look at target:** choose entity or world point; editor aims camera while moving.

Target mode needs fallback if entity disappears. Hold last valid direction or warn user—never snap to world origin.

## Camera cuts

Cut instantly changes camera pose. Use <KeyframeIcon type="hold" label="Hold keyframe" /> hold transition or dedicated cut marker.

Cut when:

- Action changes location
- Long move would be boring
- You need new angle immediately
- Replay data between moments is not useful

Avoid hiding accidental teleport with smooth interpolation; camera may fly through whole world.

## Follow camera

Follow keeps relative offset from entity. Useful for player chase or orbit.

Suggested controls:

- Target entity
- Offset: side, height, distance
- Look-at point
- Damping/smoothing
- Start/end follow range

Keyframing target switch should default to cut, not blend through unrelated entities.

## Path safety

Future editor should offer optional collision preview, but not silently alter authored path. Show warnings where camera enters solid block or unloaded area.
