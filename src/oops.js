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

document.addEventListener("click", clickHandler)

window.onload = () => {
	move()
}
