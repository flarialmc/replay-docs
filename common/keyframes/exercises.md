# Keyframe Practice

Short exercises build intuition faster than reading graphs alone.

## Exercise 1: Two-point camera move

1. Make 4-second shot.
2. Add camera pose at `0s`.
3. Add second pose at `4s`, 20 blocks away.
4. Compare Linear and Ease in + out.
5. Keep version that communicates shot better.

Notice path stays same while pace changes.

## Exercise 2: Camera cut

1. Add camera pose at `2s`.
2. Add different pose at same/next frame.
3. Use <KeyframeIcon type="hold" label="Hold keyframe" /> Hold.
4. Check no flight between poses.

## Exercise 3: Weather switch

1. Set Clear at start.
2. Set Rain at `5s` using Hold.
3. If intensity exists, animate rain amount over 2 seconds.
4. Compare state switch and intensity blend.

## Exercise 4: Hide distraction

1. Select unwanted entity.
2. Add Visible key before shot.
3. Add Hidden hold key at shot start.
4. Add Visible key after shot.

Confirm entity remains in replay data and only rendering changes.

## Exercise 5: Slow-motion impact

1. Mark impact time.
2. Add speed key before it at `1x`.
3. Ease toward `0.25x`.
4. Hold briefly.
5. Ease back to `1x`.
6. Recheck imported audio sync.

## Exercise 6: Orbit freeze

1. Freeze source replay at action peak.
2. Keep sequence running for 3 seconds.
3. Orbit camera around subject.
4. Resume replay time after orbit or cut away.

## Review questions

- Did you add only necessary keys?
- Is each state switch Hold?
- Does camera stop unintentionally at middle keys?
- Do position and rotation finish together?
- Is source time doing what sequence time suggests?
