import { SPECIAL_TITLE, THRESHOLD, UPGRADES } from "./const.js"
import { countDisplay, instructions } from "./elements.js"
import { game } from "./game.js"
import { thresholdBarrier, thresholdOpen, thresholdSound } from "./util.js"

export function hideInstructionsSubscriber(
	/** @type {import("./game.js").GameState} */ state
) {
	if (state.instructions && state.count > 25) {
		game.setInstructionsHidden(instructions)
	}
}

export function updateCountDisplaySubscriber() {
	game.animateDisplay(countDisplay)
}

export function updateTitleSubscriber(
	/** @type {import("./game.js").GameState} */ state
) {
	if (state.count > 0) {
		document.title = `Cow Tipper - ${state.count} gallons`
	}
}

export function updateUpgradeButtonsSubscriber(
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

export function thresholdSubscriber(/** @type {typeof game.state} */ state) {
	if (state.count > THRESHOLD && !state.created) {
		window.onclick = thresholdOpen
		document.body.onclick = thresholdSound
		document.addEventListener("keydown", thresholdBarrier)

		document.title = SPECIAL_TITLE
		document.body.style.cursor = "none"
		game.setCreated()
	}
}
