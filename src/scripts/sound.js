// @ts-check

import { theme } from "./const"
import { audioSrc } from "./util"

const sfx = Array.from(
	{ length: 11 },
	(_, i) => new Audio(audioSrc(`sfx-${i}`))
)

const music = new Audio(audioSrc(`bgm${theme ? `-${theme}` : ""}`))
music.loop = true

const moo = new Audio(audioSrc(`moo`))

export { moo, music, sfx }
