# Easing

Easing changes speed between two values. It makes motion start or stop naturally without adding extra path points.

::: tip Naming shortcut
In these docs, **ease in** means easing into motion: slow start. **Ease out** means easing out of motion: slow finish.
:::

<EasingPlayground />

## Linear

<KeyframeIcon type="linear" label="Linear keyframe" /> Equal speed entire segment. Useful for conveyor-like moves, time-lapses, and debugging timing.

## Ease in

<KeyframeIcon type="ease-in" label="Ease-in keyframe" /> Slow at start, fast at end. Use when camera leaves rest or accelerates toward action.

## Ease out

<KeyframeIcon type="ease-out" label="Ease-out keyframe" /> Fast at start, slow at end. Use when camera settles on subject.

## Ease in + out

<KeyframeIcon type="ease-in-out" label="Ease-in-out keyframe" /> Slow at both ends. Safe starting point for camera move between still poses.

## Hold

<KeyframeIcon type="hold" label="Hold keyframe" /> No blend. Useful for visible/hidden, clear/rain state, or direct camera cuts.

## Duration still matters

Same easing over one second feels much faster than over five seconds. Set shot duration first, then tune curve.

## Avoid accidental stop at every keyframe

Ease in + out on every middle camera keyframe can make camera slow repeatedly. For one continuous fly-through, use smooth path and keep speed flowing through middle points.

## Match nearby properties

Camera position and rotation usually need related timing. If position stops before rotation, shot can feel like camera pivots on tripod. Sometimes intentional; otherwise align keyframes/easing.
