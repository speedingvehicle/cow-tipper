// @ts-check

import { theme, UPGRADES } from "./const"
import * as elements from "./elements"
import { game } from "./game"
import { music } from "./sound"
import * as subscribers from "./subscribers"
import { clickCow, createButton, imageSrc } from "./util"

switch (theme) {
	case "xmas":
		elements.cowImage.src = imageSrc("cow-xmas")
		elements.instructions.textContent = `${elements.instructions.innerText} and have a merry`
		elements.countUnit.textContent = "festive gallons"
		break
}


setTimeout(() => {
	document.body.insertAdjacentElement("afterbegin", elements.loadingScreen)

	elements.loadingScreenButton.addEventListener("pointerdown", () => {
		elements.loadingScreen.remove()
		music.play()
		game.init()
	})
}, 100)

setTimeout(() => {
	elements.loadingScreen.append(elements.loadingScreenButton)
}, 1000 * 1.9)

setTimeout(() => {
	UPGRADES.map((upgrade, index) => {
		const button = createButton(upgrade, index)

		elements.upgradesContainer.appendChild(button)
	})
}, 125)

Object.values(subscribers).forEach((subscriber) => {
	game.subscribe(subscriber)
})

elements.cow.addEventListener("pointerdown", clickCow)