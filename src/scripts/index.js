import { UPGRADES } from "./const"
import {
	loadingScreen,
	loadingScreenButton,
	music,
	upgradesContainer,
} from "./elements"
import { game } from "./game"
import {
	hideInstructionsSubscriber,
	thresholdSubscriber,
	updateCountDisplaySubscriber,
	updateTitleSubscriber,
	updateUpgradeButtonsSubscriber,
} from "./subscribers"
import { createButton } from "./util"

setTimeout(() => {
	document.body.insertAdjacentElement("afterbegin", loadingScreen)

	loadingScreenButton.addEventListener("click", () => {
		loadingScreen.remove()
		music.play()
		game.init()
	})
}, 100)

setTimeout(() => {
	loadingScreen.append(loadingScreenButton)
}, 1000 * 1.9)

setTimeout(() => {
	UPGRADES.map((upgrade, index) => {
		const button = createButton(upgrade, index)

		upgradesContainer.appendChild(button)
	})
}, 125)

game.subscribe(updateCountDisplaySubscriber)
game.subscribe(updateUpgradeButtonsSubscriber)
game.subscribe(hideInstructionsSubscriber)
game.subscribe(updateTitleSubscriber)
game.subscribe(thresholdSubscriber)
