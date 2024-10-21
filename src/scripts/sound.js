const sfx = Array.from(
	{ length: 11 },
	(_, i) => new Audio(`assets/sound/sfx-${i}.mp3`)
)

const music = new Audio("assets/sound/bgm.mp3")
music.loop = true

const moo = new Audio("assets/sound/moo.mp3")

export { moo, music, sfx }
