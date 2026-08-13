# Smooth Camera Motion

Smooth does not mean slow. It means direction and speed changes feel intentional.

## Reliable recipe

1. Use two position keys.
2. Set shot duration.
3. Add matching rotation keys.
4. Apply Ease in + out.
5. Preview at normal speed.
6. Add one middle key only if path needs bend.

## Causes of bumps

- Too many position keyframes
- Handles point in different directions
- Position and rotation keys do not align
- Ease added to every middle key
- Path crosses a block and collision changes view
- Rotation chooses long way around 360°

## Constant travel through middle points

For continuous fly-through, camera should not stop at each marker. Middle keyframes shape path while speed graph remains above zero.

## Arc around subject

Use look-at target plus curved position path. Keep distance reasonably steady; otherwise orbit becomes zoom.

## Handheld feel

Do not create random keyframes everywhere. Add controlled low-amplitude motion after main path works. Offer seed, strength, and frequency so motion is repeatable.

## Replay speed and camera speed

Replay speed changes world action rate. Camera timing can remain tied to edited sequence. A good design clearly separates:

- Source replay time
- Edited sequence time
- Camera animation time

When replay slows to `0.25x`, camera may also slow or continue at sequence speed. Editor should let user choose per shot.

## Cut instead of forcing move

If camera must cross huge distance, cut. Shorter diff, cleaner shot.
