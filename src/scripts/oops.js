import { move } from "./move"
import { openCow } from "./util"

const audio = document.querySelector("audio")

const play = () => {
	audio.play()
}

const clickHandler = () => {
	play()
	openCow()
}

function keyHandler(/** @type {KeyboardEvent} */ event) {
	switch (event.key) {
		case "F4":
		case "Escape":
		case "W":
		case "w":
			openCow()
			alert("cow")
			break

		case "Alt":
		case "Control":
		case "Shift":
		case "Tab":
		case " ":
			openCow()
			break
	}
}

function beforeUnload(/** @type {BeforeUnloadEvent} */ event) {
	event.preventDefault()
	event.stopPropagation()
	confirm("MmmmooooOo ooOOO??!!!???")
}

document.addEventListener("click", clickHandler)
document.addEventListener("keydown", keyHandler)

window.onload = move
window.onbeforeunload = beforeUnload
