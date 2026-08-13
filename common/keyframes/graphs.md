# Graphs and Bézier Curves

Graphs show hidden part of motion: how value or speed changes over time.

## Read axes

- Horizontal axis: time
- Vertical axis: value or speed
- Keyframe: point on graph
- Handle: control for curve entering/leaving point

## Value graph

Shows actual property value. Camera X graph rising means camera moves toward larger X. Flat means X stays still.

Value graph helps find:

- Overshoot
- Direction changes
- Sudden jumps
- Rotation wrapping wrong way

## Speed graph

Shows how fast value changes. High graph = fast, near zero = slow/stopped.

Common shapes:

- Flat line above zero: constant speed
- Ramp up: acceleration
- Ramp down: deceleration
- Hill: ease in + out
- Zero line: no movement

## Bézier handles

<KeyframeIcon type="bezier" label="Bézier keyframe" /> Handle length affects influence; handle direction affects curve direction.

Simple workflow:

1. Select segment.
2. Apply Ease in + out.
3. Open speed graph.
4. Lengthen handles for longer gentle start/end.
5. Preview whole move, not only graph.

## Overshoot

Curve may pass beyond destination then return. This can add bounce, but camera position overshoot often clips walls or reveals unwanted areas. World time overshoot can briefly move backward. Keep values inside range unless effect is intentional.

## One property at a time

Displaying X, Y, Z, yaw, pitch, and FOV together becomes cluttered. Show selected curves; dim others. Provide combined **Camera speed** graph for beginner view.

## Spatial path view

Graph controls timing; viewer path controls shape in world. Future editor should show path line, position keys, and handles directly in 3D viewer. Editing either view updates same keyframes.
