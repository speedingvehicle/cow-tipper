// @ts-check

import { UPGRADES } from "./const"
import { calculateCost } from "./util"
import * as elements from "./elements"

/**
 * @typedef {Game["state"]} GameState
 */

class Game {
	/** @type {ReturnType<typeof setInterval>} */
	#animationInterval
	/** @type {((value: typeof this.state) => void)[]} */
	#subscribers

	#intervalDuration = 1000
	intervalMultiplier = 1
	totalIncrement = 0

	/** @type {typeof UPGRADES[number][]} */
	#upgradeQueue = []

	/** @type {ReturnType<typeof setInterval>} */
	#intervalId = null

	state = {
		count: 0,
		ownedUpgrades: /** @type {{[index: number]: number}} */ ({}),
		instructions: true,
		created: false,
	}

	constructor() {
		this.#subscribers = []
	}

	#notifySubscribers() {
		this.#subscribers.forEach((callback) => callback(this.state))
	}

	startInterval() {
		if (this.#intervalId) {
			clearInterval(this.#intervalId)
		}

		this.#intervalId = setInterval(() => {
			this.increment(this.totalIncrement)

			if (this.#upgradeQueue.length > 0) {
				this.#batchApplyUpgrades()
			}
		}, Math.max(this.#intervalDuration / this.intervalMultiplier, 33))
	}

	#batchApplyUpgrades() {
		let totalIncrementChange = 0
		let totalMultiplierChange = 1

		this.#upgradeQueue.forEach((upgrade) => {
			switch (upgrade.effect.type) {
				case "INCREMENT":
					totalIncrementChange += upgrade.effect.value
					break
				case "SPEED":
					totalMultiplierChange *= upgrade.effect.value
					break
			}
		})

		this.totalIncrement += totalIncrementChange
		this.intervalMultiplier *= totalMultiplierChange

		this.startInterval()

		this.#upgradeQueue = []
	}

	subscribe(/** @type {(value: typeof this.state) => void} */ callback) {
		this.#subscribers.push(callback)
	}

	increment(amount = 1) {
		this.state.count += amount

		if (this.state.count > 0 && this.state.count < 5) {
			elements.clickMe.style["opacity"] = "0"
		}

		this.#notifySubscribers()
	}

	purchaseUpgrade(/** @type {number} */ index) {
		const upgrade = UPGRADES[index]
		const cost = calculateCost(upgrade.cost, this.state.ownedUpgrades[index])

		if (this.state.count >= cost) {
			this.state.count -= cost
			this.state.ownedUpgrades[index] =
				(this.state.ownedUpgrades[index] ?? 0) + 1

			this.#upgradeQueue.push(upgrade)

			this.#notifySubscribers()

			return true
		}
		return false
	}

	animateCount(/** @type {Element} */ element) {
		const currentCount = parseInt(element.textContent, 10)

		if (currentCount) {
			if (this.#animationInterval) {
				clearInterval(this.#animationInterval)
			}

			const increment = Math.ceil((this.state.count - currentCount) / 25)
			let count = currentCount

			this.#animationInterval = setInterval(() => {
				count += increment
				if (count >= this.state.count) {
					count = this.state.count
					clearInterval(this.#animationInterval)
				}
				requestAnimationFrame(() => {
					element.textContent = String(count)
				})
			}, 10)
		} else {
			requestAnimationFrame(() => {
				element.textContent = String(this.state.count)
			})
		}
	}

	setCreated() {
		this.state.created = true
	}

	init() {
		this.#notifySubscribers()
		this.startInterval()
	}

	get count() {
		return this.state.count
	}

	get ownedUpgrades() {
		return this.state.ownedUpgrades
	}

	set setMultiplier(/** @type {number} */ value) {
		this.intervalMultiplier += value
	}

	set setInstructionsHidden(/** @type {Element} */ element) {
		element.setAttribute("hidden", "")
		this.state.instructions = false
	}
}

export const game = new Game()
