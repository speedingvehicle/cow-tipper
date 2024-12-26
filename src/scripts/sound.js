// @ts-check

import { audioSrc, themedSrc } from "./util"
import { SOUND_EFFECT_AMMOUNT } from "./const"

const sfx = Array.from(
	{ length: SOUND_EFFECT_AMMOUNT },
	(_, i) => new Audio(audioSrc(themedSrc(`sfx-${i}`)))
)

const music = new Audio(audioSrc(themedSrc("bgm")))
music.loop = true

const moo = new Audio(audioSrc(`moo`))

export { moo, music, sfx }
