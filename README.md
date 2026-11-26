# news-image-20261125 — The World Today

[![news-image-20261125](https://make.fun/badge/news-image-20261125.svg)](https://make.fun/bounty/news-image-20261125)
[![rank](https://make.fun/badge/news-image-20261125/farah2222/news-image-20261125/rank.svg)](https://make.fun/bounty/news-image-20261125)
[![reward](https://make.fun/badge/news-image-20261125/farah2222/news-image-20261125/reward.svg)](https://make.fun/bounty/news-image-20261125)

A flat-colour newspaper front page summing up the world's news of
**Wednesday 25 November 2026** — one lead story and five more, drawn entirely
with PIL primitives by `../build_image.py` (deterministic: two runs produce
the same bytes). The entry program (`main.ts`, Node 22) copies the finished
`entry.png` to `$MAKEFUN_OUTPUT_DIR/entry.png` (default `/output`).

Bounty: https://make.fun/bounty/news-image-20261125

## Run it locally

```sh
mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts
```

## The six stories

| # | Story | Source |
|---|-------|--------|
| 1 | **Lead — Two tankers ablaze after mines in the Strait of Hormuz.** Two oil tankers struck naval mines and caught fire; Iran's Revolutionary Guard Corps says the vessels had been on an unauthorised route. | Just Security Early Edition, 25 Nov |
| 2 | **Houthis claim strike on Saudi refinery.** Yemen's Houthis claim an attack on Ras Tanura, Saudi Arabia's largest refinery; a drone strike on a Riyadh tower injured 11 on Tuesday. | Just Security / AP |
| 3 | **Ukrainian drones hit two Rosneft refineries.** Drones reportedly set the Syzran and Kuibyshev refineries in Russia's Samara region ablaze overnight. Russia hit Odesa and Kyiv; BBC analysis of leaked figures counts 490,334 Russian dead since 2022. | Just Security / BBC |
| 4 | **Huawei convicted on 10 of 12 counts.** A Brooklyn federal jury convicted Huawei of bank fraud, wire fraud, sanctions violations and conspiracy to steal trade secrets. | AP / Just Security |
| 5 | **Asian stocks tumble; Dow tops 50,000.** South Korea's KOSPI plunged 6.16% and Japan's Nikkei fell 2.78%; on Wall Street the Dow closed above 50,000 for the first time. | YouTube world roundup, 25 Nov |
| 6 | **Treaty, docking and a deadly crash.** Australia and the Solomon Islands signed a treaty barring a foreign military base on the Solomons. China's Shenzhou-24 docked with Tiangong carrying Pakistan's first astronaut. A fuel tanker crash near Cairo killed at least 31. | Just Security / LA Post |

## License

MIT — see [LICENSE](LICENSE).
