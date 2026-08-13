# Interpolation

Interpolation = how editor fills gap between keyframes.

## Time interpolation

Controls value speed over time.

- **Linear:** equal progress each second.
- **Hold:** no progress, instant switch.
- **Eased:** speed changes gradually.

Example: camera travels 20 blocks in 2 seconds. Linear moves 10 blocks each second. Ease in moves less during first second and more during second.

## Path interpolation

Controls route through world space.

- **Straight:** shortest line between positions.
- **Curved:** bends through control points.
- **Hold:** camera remains at first point, then jumps.

Time easing and path shape are separate. Camera can follow curved path at constant speed, or straight path with smooth acceleration.

## Rotation interpolation

Rotation wraps around. Turning from `350°` to `10°` should usually travel short way through `0°`, not spin backward `340°`.

Future editor needs rotation options:

- Shortest turn
- Clockwise
- Counter-clockwise
- Extra full turns when intentionally requested

Pitch should avoid unexpected flips near straight up/down.

## Discrete properties

Visibility and named weather state should default to <KeyframeIcon type="hold" label="Hold keyframe" /> hold. Blending only makes sense if property supports partial value, such as rain intensity from `0%` to `100%`.

## Auto, smooth, broken handles

For curved paths:

- **Auto:** editor keeps path smooth.
- **Smooth:** both handle sides stay aligned; changing one affects other direction.
- **Broken:** each side moves independently for sharp turn.

Start with Auto. Break handles only when path must enter and leave point differently.
