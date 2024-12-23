// @ts-check

import { imageSrc } from "./util"

const loadingScreen = document.createElement("div")
loadingScreen.classList.add("loading")

const loadingScreenText = document.createElement("div")
loadingScreenText.innerText = "Loading..."

const loadingScreenBar = document.createElement("img")
loadingScreenBar.src = "content/images/loading.gif"

const loadingScreenButton = document.createElement("button")
loadingScreenButton.classList.add("loading-button")
loadingScreenButton.innerText = "Play"
loadingScreen.append(loadingScreenText, loadingScreenBar)

/** @type {HTMLDivElement} */
const countDisplay = document.querySelector(".count-value")
/** @type {HTMLSpanElement} */
const countUnit = document.querySelector("#count-unit")
/** @type {HTMLButtonElement} */
const cow = document.querySelector(".cow")
/** @type {HTMLImageElement} */
const cowImage = document.querySelector("#cow-image")
/** @type {HTMLParagraphElement} */
const instructions = document.querySelector(".instructions")
/** @type {HTMLDivElement} */
const upgradesContainer = document.querySelector(".upgrade-container")


export {
	countDisplay,
	countUnit,
	cow,
	cowImage,
	instructions,
	loadingScreen,
	loadingScreenBar,
	loadingScreenButton,
	loadingScreenText,
	upgradesContainer,
}
