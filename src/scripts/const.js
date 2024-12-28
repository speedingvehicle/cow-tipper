// @ts-check

/** @typedef {UPGRADES[number]} Upgrade */
/** @typedef {"xmas" | "nye" | "cny" | "halloween"} Theme */

/** @type {Theme[]} */
export const THEMES = [
	"xmas",
	"nye",
	"cny",
	"halloween",
]

export const UPGRADES = Object.freeze([
	{
		name: "Cow Scarer",
		description: "Scare the cow into producing 10 gallons per second",
		cost: 50,
		effect: { type: "INCREMENT", value: 10 },
	},
	{
		name: "Farmer Fred",
		description: "Multiply the milking speed by a small amount.",
		cost: 720,
		effect: { type: "SPEED", value: 1.05 },
	},
	{
		name: "Herd of Cows",
		description: "Introduce 10 additional cows",
		cost: 9000,
		effect: { type: "INCREMENT", value: 100 },
	},
	{
		name: "Locked",
		description: "???",
		cost: 100000,
		effect: { type: "INCREMENT", value: 10000 },
	},
])

export const THRESHOLD = 17500
export const SPECIAL_TITLE = "MOOooOOOoO00oOO0ooo00oOOO0Oooo0OO0OO"
export const SOUND_EFFECT_AMMOUNT = 6

export const queryThreshold = /** @type {number} */ Number(new URLSearchParams(window.location.search).get(
	"p"
) || undefined)
export const themeParam = new URLSearchParams(window.location.search).get(
	"t"
)
