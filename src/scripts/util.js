// @ts-check

import { moo, sfx } from "./sound"
import { game } from "./game"
import { queryThreshold, SOUND_EFFECT_AMMOUNT, themeParam, THEMES, THRESHOLD } from "./const"

/**
 * @param {number} cost
 * @param {number} quantity
 */
export function calculateCost(cost, quantity = 0) {
	return Math.ceil(cost + (quantity * cost) / 10)
}

/**
 * @param {import("./const").Upgrade} upgrade
 * @param {number} index
 */
export function createButton({ cost, description, name }, index) {
	const button = document.createElement("button")
	button.classList.add("upgrade")
	button.id = `upgrade-${index}`

	button.innerHTML = `
		<div class="upgrade-image">
			<img height="64" width="64" src="${imageSrc(`upgrade-${index}`)}" />
			<div class="upgrade-owned">0</div>
		</div>
		<div class="upgrade-info">
			<div class="upgrade-title">${name}</div>
			<div class="upgrade-description">${description}</div>
		</div>
		<div class="upgrade-cost">${cost}</div>
	`

	button.addEventListener("pointerdown", () => {
		if (game.purchaseUpgrade(index)) {
			const playbackRate = Math.random() + 0.75

			moo.currentTime = 0
			moo.playbackRate = playbackRate
			moo.play()
		}
	})

	return button
}

export function clickCow(/** @type {PointerEvent} */ event) {
	game.increment()

	const cow = /** @type {HTMLButtonElement} */ (event.currentTarget)
	const sound = sfx[Math.floor(Math.random() * SOUND_EFFECT_AMMOUNT)]

	const playbackRate = Math.random() * 1.5 + 0.5
	const randomRotate = Math.random() * 540 - 270

	sound.currentTime = 0
	sound.playbackRate = playbackRate
	sound.play()

	requestAnimationFrame(() => {
		cow.style.transform = `rotate(${randomRotate}deg)`
	})

	setTimeout(() => {
		requestAnimationFrame(() => {
			cow.style.transform = `rotate(0deg)`
		})
	}, 50)
}

export function openCow() {
	window.open(
		"oops.html",
		"",
		"alwaysRaised=yes, height=300, menubar=no, resizable=no, status=no, titlebar=no, toolbar=no, width=300"
	)
}

export function createCow() {
	const newCow = document.createElement("img")
	newCow.src = "content/images/360.gif"
	newCow.style.position = "absolute"
	newCow.style.zIndex = "10000"
	newCow.style.inset = "0"

	newCow.style.height = `${Math.random() * 100}%`
	newCow.style.width = `${Math.random() * 100}%`

	newCow.style.left = `${Math.random() * 80}%`
	newCow.style.top = `${Math.random() * 80}%`

	document.body.append(newCow)
}

export function thresholdOpen() {
	openCow()
	createCow()

	setInterval(createCow, 250)
}

export function thresholdSound() {
	new Audio(audioSrc("special")).play()
}

export function thresholdBarrier(/** @type {KeyboardEvent} */ event) {
	openCow()
	thresholdSound()
	setInterval(createCow, 250)
	alert(
		"MMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMoo"
	)
}

export function imageSrc(/** @type {string} */ file) {
	return `content/images/${file}.png`
}

export function gifSrc(/** @type {string} */ file) {
	return `content/images/${file}.gif`
}

export function audioSrc(/** @type {string} */ file) {
	return `content/sound/${file}.mp3`
}

/**
 * @param {string} value 
 * @returns {value is import("./const").Theme}
 */
export function isTheme(value) {
	// @ts-ignore This is a silly typescriptism
	if (THEMES.includes(value)) {
		return true
	}
	return false
}

export function getThreshold() {
	if (isNaN(queryThreshold)) {
		return THRESHOLD
	}

	return queryThreshold
}

/**
 * @returns {import("./const").Theme | null}
 */
export function getTheme() {
	if (isTheme(themeParam)) {
		return themeParam
	}

	return null
}

/** 
 * @param {string} src 
 */
export function themedSrc(src) {
	const theme = getTheme()

	if (theme) {
		return `${src}-${themeParam}`
	}

	return src
}
