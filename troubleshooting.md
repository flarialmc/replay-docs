# Troubleshooting

## Replay is unavailable

Confirm all three requirements:

- Minecraft for Windows 1.26.30 or newer
- Flarial build includes Replay support
- ReplayCore initialized successfully

Restart Minecraft after updating Flarial or Minecraft.

## Recording did not start

**Record next world** only arms recording. Click it before joining the target world or server. If it says **Cancel recording**, recording is armed correctly.

## Replay does not appear

1. Leave the recorded session cleanly.
2. Open **Replays** from the title screen.
3. Click **Refresh**.
4. Use a replay's folder button, or check `%LOCALAPPDATA%\Flarial\Client\replays`.

Only finalized `.flrreplay` files directly inside the replay folder are listed. A `.flrreplay.partial` file means recording did not finalize; record again and leave the session cleanly.

## Backward seek looks stuck

Expected for larger recordings. Backward seek rebuilds the private replay world, then fast-forwards recorded packets to the requested time.

## Mouse is trapped or overlay cannot be clicked

Press the configured **Camera Control** key. Default: `F`. This switches mouse ownership between camera movement and replay controls.

## Replay file is large

Current Flarial recordings are uncompressed. Shorten recording sessions or delete unwanted files from the Replay Manager.

## Replay will not start or lacks world data

Record through the complete world load and move before leaving. Replay playback needs world bootstrap, chunk, and initial movement data.

## World, entities, or resource packs look wrong

Replay support remains experimental. Keep the original `.flrreplay`, note Minecraft/Flarial versions, and report the issue in [Flarial Discord](https://discord.gg/flarial).

## Need a video file

Replay creates `.flrreplay` session data, not MP4 footage. Play the replay and capture it with recording software.
