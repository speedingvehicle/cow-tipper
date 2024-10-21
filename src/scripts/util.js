import { SPECIAL_TITLE } from "./const"
import { moo } from "./elements"
import { game } from "./game"

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
				<img height="64" width="64" src="assets/images/upgrade-${index}.png" />
				<div class="upgrade-owned">0</div>
			</div>
			<div class="upgrade-info">
				<div class="upgrade-title">${name}</div>
				<div class="upgrade-description">${description}</div>
			</div>
			<div class="upgrade-cost">${cost}</div>
		`

	button.addEventListener("click", () => {
		if (game.purchaseUpgrade(index)) {
			const playbackRate = Math.random() + 0.75

			moo.currentTime = 0
			moo.playbackRate = playbackRate
			moo.play()
		}
	})

	return button
}

export function openCow() {
	window.open(
		"oops.html",
		"",
		"alwaysRaised=yes, height=300, menubar=no, resizable=no, status=no, titlebar=no, toolbar=no, width=300"
	)
}

export function threshold() {
	openCow()

	document.title = SPECIAL_TITLE

	document.body.style.cursor = "none"

	const height = `${Math.random() * 100}%`
	const width = `${Math.random() * 100}%`
	const left = `${Math.random() * 100}%`
	const top = `${Math.random() * 100}%`

	const newCow = document.createElement("img")
	newCow.src = "assets/images/360.gif"
	newCow.style.position = "absolute"
	newCow.style.zIndex = "10000"
	newCow.style.inset = "0"

	newCow.style.height = height
	newCow.style.width = width

	newCow.style.left = left
	newCow.style.top = top

	document.body.append(newCow)
}

export function thresholdTwo() {
	const sound = new Audio("assets/sound/special.mp3")
	sound.play()

	document.body.append(sound)
}
