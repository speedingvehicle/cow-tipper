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

export function createCow() {
	const newCow = document.createElement("img")
	newCow.src = "assets/images/360.gif"
	newCow.style.position = "absolute"
	newCow.style.zIndex = "10000"
	newCow.style.inset = "0"

	newCow.style.height = `${Math.random() * 100}%`
	newCow.style.width = `${Math.random() * 100}%`

	newCow.style.left = `${Math.random() * 100}%`
	newCow.style.top = `${Math.random() * 100}%`

	document.body.append(newCow)
}

export function thresholdOpen() {
	openCow()
	createCow()

	setInterval(createCow, 250)
}

export function thresholdSound() {
	new Audio("assets/sound/special.mp3").play()
}

export function thresholdBarrier(/** @type {KeyboardEvent} */ event) {
	switch (event.key) {
		case "Control":
		case "Alt":
		case "Delete":
		case "Shift":
		case "Tab":
		case " ":
		case "w":
		case "W":
			openCow()
			break

		case "F4":
		case "Escape":
			openCow()
			confirm("MMMmmmmm mmm000000oo oOOOO")
			break
	}
}
