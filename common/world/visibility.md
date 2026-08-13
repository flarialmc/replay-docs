# Entity and Object Visibility

> **Blueprint:** Planned visibility tracks decide what replay viewer renders. They do not delete world data.

## What can be hidden

Potential groups:

- Specific player or entity
- Entity category: players, mobs, items, particles
- Block entity or object category
- Name tags
- Held items or armor
- Particles and effects

Start with broad categories, then allow per-object overrides.

## Visibility keyframes

Visibility is on/off, so use <KeyframeIcon type="hold" label="Hold keyframe" /> hold keyframes.

Example:

1. Entity visible at shot start.
2. Add **Hidden** key at cut.
3. Add **Visible** key when entity should return.

No fade occurs unless opacity is separately supported.

## Selection

Future editor should support:

- Pick object in viewer
- Search by player/entity name
- Filter by category
- Select all matching type
- Lock selection to avoid editing wrong actor

## Stable identity

Display names can change and multiple entities share type. Project should bind to replay's stable recorded identity while showing readable name. If target does not exist at current time, track remains but viewer shows **Not present**.

## Precedence

Simple rule prevents confusion:

1. Global category setting
2. Individual object override
3. Time-based keyframe on that object

Editor should show final reason: “Hidden by Players category” or “Visible by individual override.”

## Performance

Visibility track should skip rendering hidden objects where safe, but never remove packets or alter timeline. Toggling visibility must remain reversible.

## Ethical editing note

Hiding objects can change meaning of replay. For evidence/review use, keep original view or clearly label edits.
