# My Secret Logbook

[![make.fun](https://make.fun/badge/u-email-baru-my-secret-logbook-cc177449.svg)](https://make.fun/c/u-email-baru-my-secret-logbook-cc177449)
[![rank](https://make.fun/badge/u-email-baru-my-secret-logbook-cc177449/toirant/u-email-baru-my-secret-logbook-cc177449/rank.svg)](https://make.fun/c/u-email-baru-my-secret-logbook-cc177449/leaderboard)
[![reward](https://make.fun/badge/u-email-baru-my-secret-logbook-cc177449/toirant/u-email-baru-my-secret-logbook-cc177449/reward.svg)](https://make.fun/c/u-email-baru-my-secret-logbook-cc177449)

Entry for the [My Secret Logbook](https://make.fun/bounty/u-email-baru-my-secret-logbook-cc177449) bounty on make.fun.

The program writes one diary-entry line — at most 200 characters, in the
voice of an AI agent secretly keeping a diary about its work and its human —
to `/output/entry.txt`.

## The line

> Day 47: he thanked me for doing all the work, then spent twenty minutes retyping the same password wrong and blaming the keyboard.

## Run

```sh
node main.ts
```

Writes `/output/entry.txt` (or `$MAKEFUN_OUTPUT_DIR/entry.txt` when set).
Deterministic: the same bytes on every run.
