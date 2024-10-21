import { queryThreshold, SPECIAL_TITLE, THRESHOLD, UPGRADES } from "./const"
import * as elements from "./elements"
import { game } from "./game"
import {
	calculateCost,
	thresholdBarrier,
	thresholdOpen,
	thresholdSound,
} from "./util"

function hideInstructionsSubscriber(
	/** @type {import("./game.js").GameState} */ state
) {
	if (state.instructions && state.count > 25) {
		game.setInstructionsHidden = elements.instructions
	}
}

function thresholdSubscriber(/** @type {typeof game.state} */ state) {
	const threshold = queryThreshold ? parseInt(queryThreshold) : THRESHOLD

	if (state.count > threshold && !state.created) {
		game.setCreated()
		game.setMultiplier = 10

		window.onclick = thresholdOpen
		window.onkeydown = thresholdBarrier

		document.addEventListener("click", thresholdSound)
		document.addEventListener("keydown", thresholdBarrier)
		document.addEventListener("pointerdown", () => {
			document.title = SPECIAL_TITLE
			document.body.style.cursor = "none"
			document.body.style.filter = "invert()"

			window.onbeforeunload = () => confirm("MMmmoooooo oooOOo oOOOoOOo")
		})
	}
}

function updateCountDisplaySubscriber() {
	game.animateCount(elements.countDisplay)
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
	UPGRADES.forEach((upgrade, index) => {
		const button = document.querySelector(`#upgrade-${index}`)

		if (button) {
			const ownedDisplay = button.querySelector(".upgrade-owned")
			const costElement = button.querySelector(".upgrade-cost")

			const cost = calculateCost(upgrade.cost, state.ownedUpgrades[index])

			const canAfford = game.count >= cost
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

			costElement.textContent = String(cost)
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
