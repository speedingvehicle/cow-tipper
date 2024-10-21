import { UPGRADES } from "./const"

/** @type {HTMLDivElement} */
export const countDisplay = document.querySelector(".count-value")

/**
 * @typedef {Game["state"]} GameState
 */

class Game {
	/** @type {ReturnType<typeof setInterval>} */
	#animationInterval
	/** @type {((value: typeof this.state) => void)[]} */
	#subscribers

	#intervalDuration = 1000
	#intervalMultiplier = 1
	#totalIncrement = 0

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
		this.#startInterval()
	}

	#notifySubscribers() {
		this.#subscribers.forEach((callback) => callback(this.state))
	}

	#startInterval() {
		if (this.#intervalId) {
			clearInterval(this.#intervalId)
		}

		this.#intervalId = setInterval(() => {
			this.increment(this.#totalIncrement)

			if (this.#upgradeQueue.length > 0) {
				this.#batchApplyUpgrades()
			}
		}, Math.max(this.#intervalDuration / this.#intervalMultiplier, 33))
	}

	#batchApplyUpgrades() {
		let totalIncrementChange = 0
		let totalMultiplierChange = 1

		this.#upgradeQueue.forEach((upgrade) => {
			if (upgrade.effect.type === "INCREMENT") {
				totalIncrementChange += upgrade.effect.value
			}
			if (upgrade.effect.type === "SPEED") {
				totalMultiplierChange *= upgrade.effect.value
			}
		})

		this.#totalIncrement += totalIncrementChange
		this.#intervalMultiplier *= totalMultiplierChange

		this.#startInterval()

		this.#upgradeQueue = []
	}

	subscribe(/** @type {(value: typeof this.state) => void} */ callback) {
		this.#subscribers.push(callback)
	}

	increment(amount = 1) {
		this.state.count += amount
		this.#notifySubscribers()
	}

	purchaseUpgrade(/** @type {number} */ index) {
		const upgrade = UPGRADES[index]
		if (this.state.count >= upgrade.cost) {
			// Deduct the cost from the current count
			this.state.count -= upgrade.cost

			// Track the number of upgrades owned
			this.state.ownedUpgrades[index] =
				(this.state.ownedUpgrades[index] ?? 0) + 1

			// Queue the upgrade effect for batching
			this.#upgradeQueue.push(upgrade)

			// Notify subscribers about the state change
			this.#notifySubscribers()
		}
	}

	animateDisplay(/** @type {Element} */ element) {
		const currentCount = parseInt(countDisplay.textContent, 10)

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

	setInstructionsHidden(/** @type {Element} */ element) {
		element.setAttribute("hidden", "")
		this.state.instructions = false
	}

	setCreated() {
		this.state.created = true
	}

	init() {
		this.#notifySubscribers()
	}

	get count() {
		return this.state.count
	}

	get ownedUpgrades() {
		return this.state.ownedUpgrades
	}
}

export const game = new Game()
