// @ts-check

import { audioSrc, themedSrc } from "./util"

const sfx = Array.from(
	{ length: 6 },
	(_, i) => new Audio(audioSrc(themedSrc(`sfx-${i}`)))
)

const music = new Audio(audioSrc(themedSrc("bgm")))
music.loop = true

const moo = new Audio(audioSrc(`moo`))

export { moo, music, sfx }
