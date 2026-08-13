# Orbit, Follow, and Camera Shake

> **Blueprint:** Planned camera helpers built on normal keyframes.

## Orbit

Orbit moves camera around fixed point while looking toward it.

Controls:

- Center point or target entity
- Radius/distance
- Height
- Start/end angle
- Look-at offset

Keep radius steady for clean orbit. Animate radius only for intentional spiral.

## Follow

Follow keeps camera offset from moving target.

Common views:

- Behind player
- Side tracking
- Above/overhead
- Head/eye target
- Whole-body center

Add smoothing so tiny target movement does not shake camera. Too much smoothing causes camera to lag behind action.

## Target loss

Entity may despawn or not exist at current replay time. Safe choices:

1. Hold last camera pose.
2. Keep last known target position.
3. Disable follow and show warning.

Never silently switch to another entity with same name.

## Camera shake

Shake adds controlled small changes to position/rotation.

Useful settings:

- Strength
- Frequency
- Rotation vs position amount
- Random seed
- Fade in/out
- Active range

Use for impacts or explosions. Keep subtle; constant shake reduces readability and can cause motion sickness.

## Repeatability

Random shake must use saved seed. Same project should preview same motion every time and eventually output same result.

## Manual keys vs helpers

Orbit/follow/shake should produce final camera result without filling timeline with hundreds of keys. User can still keyframe helper settings. Bake to keys only when manual per-frame edits are needed.
