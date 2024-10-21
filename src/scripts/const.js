/** @typedef {UPGRADES[number]} Upgrade */

export const UPGRADES = Object.freeze([
	{
		name: "Cow Scarer",
		description: "Scare the cow into producing 10 gallons per second",
		cost: 50,
		effect: { type: "INCREMENT", value: 10 },
	},
	{
		name: "Farmer Fred",
		description: "Multiply the milking speed by 1/10.",
		cost: 1000,
		effect: { type: "SPEED", value: 1.1 },
	},
	{
		name: "Herd of Cows",
		description: "Introduce 10 additional cows",
		cost: 15000,
		effect: { type: "INCREMENT", value: 100 },
	},
	{
		name: "Locked",
		description: "???",
		cost: 100000,
		effect: { type: "UNKNOWN", value: 0 },
	},
])

export const THRESHOLD = 22000

export const SPECIAL_TITLE = "MOOooOOOoO00oOO0ooo00oOOO0Oooo0OO0OO"
