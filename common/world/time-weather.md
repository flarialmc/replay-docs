# World Time and Weather

> **Blueprint:** Planned world tracks override recorded presentation; original replay remains unchanged.

## World time

Represent time as readable clock plus normalized value. Users should be able to enter `18:30` instead of raw game ticks.

### Continuous time

Keyframe morning at start and sunset later. World time moves smoothly between them.

### Hold time

Freeze lighting at chosen hour. Useful for consistent cinematic shot.

### Time jump

Use <KeyframeIcon type="hold" label="Hold keyframe" /> hold when scene should switch instantly from day to night.

### Wrap through midnight

From `23:00` to `01:00`, default should move forward two hours through midnight, not backward 22 hours. Offer direction control for unusual case.

## Replay speed vs world time

They are separate:

- Replay speed changes recorded action timing.
- World-time track changes sun/lighting presentation.

Linking them may be optional, never hidden.

## Weather

Simple state track:

- Clear
- Rain
- Thunder
- Follow recording

Use hold keyframes for direct states. If engine supports intensity, add continuous tracks:

- Rain amount
- Thunder amount
- Transition duration

## Transition example

1. Hold **Clear** through calm opening.
2. Add rain amount `0%` key.
3. Five seconds later set rain amount `100%`.
4. Set weather state **Rain** during range.
5. Preview lighting and sound together.

## Consistency

Changing weather visuals without matching ambient audio may feel wrong. Audio import should help add rain/thunder sound when replay's recorded audio does not match override.
