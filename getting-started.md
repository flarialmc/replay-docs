# Getting Started

## Requirements

- Windows
- A Flarial build containing Replay support
- Minecraft for Windows **1.26.30 or newer**
- Enough free disk space for the session

Replay recordings can become large during long or busy sessions.

## Record a session

1. Launch Minecraft with Flarial.
2. On the title screen, click **Replays** in the top-left corner.
3. Click **Record next world**.
4. Join the world or server you want to record.
5. Wait for the world to finish loading, move around, then play normally.
6. Leave the session cleanly so Flarial can finalize the replay.

**Record next world** arms the next connection; it does not begin recording while you remain on the title screen. Reopen the Replay Manager before joining to cancel an armed recording. Cleanly leaving the world or server is the normal way to stop and save an active recording.

## Watch a replay

1. Return to the title screen.
2. Open **Replays**.
3. Select a `.flrreplay` entry.
4. Click **Play**.
5. Wait while Flarial creates a temporary private world and loads recorded data.

During playback, use the bottom overlay to pause, seek, change speed, or control the replay camera.

## Recording folder

Recordings are stored in:

```text
%LOCALAPPDATA%\Flarial\Client\replays
```

Use the folder button beside a replay to reveal its exact file in File Explorer.
