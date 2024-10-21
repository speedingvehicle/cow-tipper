const loadingScreen = document.createElement("div")
loadingScreen.classList.add("loading")

const loadingScreenText = document.createElement("div")
loadingScreenText.innerText = "Loading..."

const loadingScreenBar = document.createElement("img")
loadingScreenBar.src = "assets/images/loading.gif"

const loadingScreenButton = document.createElement("button")
loadingScreenButton.classList.add("loading-button")
loadingScreenButton.innerText = "Play"
loadingScreen.append(loadingScreenText, loadingScreenBar)

/** @type {HTMLDivElement} */
const countDisplay = document.querySelector(".count-value")
/** @type {HTMLButtonElement} */
const cow = document.querySelector(".cow")
/** @type {HTMLParagraphElement} */
const instructions = document.querySelector(".instructions")
/** @type {HTMLDivElement} */
const upgradesContainer = document.querySelector(".upgrade-container")

export {
	countDisplay,
	cow,
	instructions,
	loadingScreen,
	loadingScreenBar,
	loadingScreenButton,
	loadingScreenText,
	upgradesContainer,
}
