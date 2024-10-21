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
	loadingScreenButton.addEventListener("click", () => {
		loadingScreen.remove()
		music.play()
	})
}, 250)

setTimeout(() => {
	loadingScreen.append(loadingScreenButton)
}, 1000 * 1.9)

UPGRADES.map((upgrade, index) => {
	const button = createButton(upgrade, index)

	upgradesContainer.appendChild(button)
})

game.subscribe(updateCountDisplaySubscriber)
game.subscribe(updateUpgradeButtonsSubscriber)
game.subscribe(hideInstructionsSubscriber)
game.subscribe(updateTitleSubscriber)
game.subscribe(thresholdSubscriber)

game.init()
