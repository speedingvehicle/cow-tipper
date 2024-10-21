import { SPECIAL_TITLE, THRESHOLD, UPGRADES } from "./const"
import * as elements from "./elements"
import { game } from "./game"
import { thresholdBarrier, thresholdOpen, thresholdSound } from "./util"

function hideInstructionsSubscriber(
	/** @type {import("./game.js").GameState} */ state
) {
	if (state.instructions && state.count > 25) {
		game.setInstructionsHidden(elements.instructions)
	}
}

function thresholdSubscriber(/** @type {typeof game.state} */ state) {
	if (state.count > THRESHOLD && !state.created) {
		game.setCreated()

		window.onclick = thresholdOpen
		window.onkeydown = thresholdBarrier

		document.addEventListener("click", thresholdSound)
		document.addEventListener("keydown", thresholdBarrier)

		document.title = SPECIAL_TITLE
		document.body.style.cursor = "none"
		document.body.style.filter = "invert()"
	}
}

function updateCountDisplaySubscriber() {
	game.animateDisplay(elements.countDisplay)
}

function updateTitleSubscriber(
	/** @type {import("./game.js").GameState} */ state
) {
	if (state.count > 0) {
		document.title = `Cow Tipper - ${state.count} gallons`
	}
}

function updateUpgradeButtonsSubscriber(
	/** @type {import("./game.js").GameState} */ state
) {
	UPGRADES.forEach(({ cost }, index) => {
		const button = document.querySelector(`#upgrade-${index}`)

		if (button) {
			const canAfford = game.count > cost
			const ownedDisplay = button.querySelector(".upgrade-owned")
			const owned = state.ownedUpgrades[index] ?? 0

			if (canAfford && button.hasAttribute("aria-disabled")) {
				button.removeAttribute("aria-disabled")
				button.setAttribute("tabIndex", "0")
			} else if (!canAfford && !button.hasAttribute("aria-disabled")) {
				button.setAttribute("aria-disabled", "")
				button.setAttribute("tabIndex", "-1")
			}

			if (owned) {
				if (!button.hasAttribute("data-owned")) {
					button.setAttribute("data-owned", "")
				}

				if (parseInt(ownedDisplay.textContent) !== owned) {
					ownedDisplay.textContent = String(owned)
				}
			}
		}
	})
}

export {
	hideInstructionsSubscriber,
	thresholdSubscriber,
	updateCountDisplaySubscriber,
	updateTitleSubscriber,
	updateUpgradeButtonsSubscriber,
}
