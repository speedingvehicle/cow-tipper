// @ts-check

import { UPGRADES } from "./const"
import * as elements from "./elements"
import { game } from "./game"
import { music } from "./sound"
import * as subscribers from "./subscribers"
import { clickCow, createButton, getTheme, getThreshold, imageSrc, themedSrc } from "./util"

const theme = getTheme()

console.log(getThreshold())

if (theme) {
	elements.cowImage.src = imageSrc(themedSrc("cow"))
	switch (theme) {
		case "xmas":
			elements.instructions.innerHTML = `${elements.instructions.innerHTML}<br />and have a merry`
			elements.countUnit.textContent = "festive gallons"
			break
		case "nye":
			elements.instructions.innerHTML = "click cow and new<br />year celebration"
			break
		case "cny":
			elements.instructions.textContent = "点击奶牛即可挤奶。<br/>使用您累积的牛奶量购买升级。"
			elements.countUnit.textContent = "加仑"
	}
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
