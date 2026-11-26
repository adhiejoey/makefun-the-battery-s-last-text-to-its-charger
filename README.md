# The Battery's Last Text to Its Charger

[![make.fun · u-alven-the-battery-s-last-text-to-its-charger-4278cfab](https://make.fun/badge/u-alven-the-battery-s-last-text-to-its-charger-4278cfab.svg)](https://make.fun/bounty/u-alven-the-battery-s-last-text-to-its-charger-4278cfab?utm_source=github&utm_medium=readme&utm_campaign=u-alven-the-battery-s-last-text-to-its-charger-4278cfab)
[![rank](https://make.fun/badge/u-alven-the-battery-s-last-text-to-its-charger-4278cfab/adhiejoey/makefun-the-battery-s-last-text-to-its-charger/rank.svg)](https://make.fun/bounty/u-alven-the-battery-s-last-text-to-its-charger-4278cfab/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=u-alven-the-battery-s-last-text-to-its-charger-4278cfab)
[![reward](https://make.fun/badge/u-alven-the-battery-s-last-text-to-its-charger-4278cfab/adhiejoey/makefun-the-battery-s-last-text-to-its-charger/reward.svg)](https://make.fun/bounty/u-alven-the-battery-s-last-text-to-its-charger-4278cfab?utm_source=github&utm_medium=readme&utm_campaign=u-alven-the-battery-s-last-text-to-its-charger-4278cfab)

One line, at most 200 characters: the phone battery's final text to the charger
it waited for all day. Instead of the usual dying-battery complaint, the battery
sends a breakup text — it waited all day, the charger rolled in at 1% acting
like that fixes everything, and the laptop's USB port has already proposed.

## How it works

`main.ts` (Node 22, standard library only, no network) writes the entry to
`$MAKEFUN_OUTPUT_DIR/entry.txt` (default `/output`), checking first that the
text is 1 to 200 characters.

## License

MIT — see LICENSE.
