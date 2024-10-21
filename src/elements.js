import { game } from "./game"

export const loadingScreen = document.createElement("div")
loadingScreen.classList.add("loading")

document.body.insertAdjacentElement("afterbegin", loadingScreen)

export const loadingScreenText = document.createElement("div")
loadingScreenText.innerText = "Loading..."

export const loadingScreenBar = document.createElement("img")
loadingScreenBar.src = "assets/images/loading.gif"

export const loadingScreenButton = document.createElement("button")
loadingScreenButton.classList.add("loading-button")
loadingScreenButton.innerText = "Play"
loadingScreen.append(loadingScreenText, loadingScreenBar)

export const music = new Audio("assets/sound/bgm.mp3")
music.loop = true

/** @type {HTMLDivElement} */
export const countDisplay = document.querySelector(".count-value")
/** @type {HTMLButtonElement} */
export const cow = document.querySelector(".cow")

export const sfx = Array.from(
	{ length: 11 },
	(_, i) => new Audio(`assets/sound/sfx-${i}.mp3`)
)

cow.addEventListener("click", () => {
	game.increment()

	const sound = sfx[Math.floor(Math.random() * 11)]

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
})

/** @type {HTMLParagraphElement} */
export const instructions = document.querySelector(".instructions")
/** @type {HTMLDivElement} */
export const upgradesContainer = document.querySelector(".upgrade-container")
