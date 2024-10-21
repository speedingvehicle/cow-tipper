let xOff = 5
let yOff = 5
let xPos = 600
let yPos = -100

/** @typedef {"down" | "left" | "right" | "up"} Direction */

function newOff(/** @type {Direction} */ direction) {
	switch (direction) {
		case "left":
			xOff = Math.ceil(-4 * Math.random()) * 5 - 10
			break
		case "down":
			yOff = Math.ceil(7 * Math.random()) * 5 - 10
			break
		case "right":
			xOff = Math.ceil(7 * Math.random()) * 5 - 10
			break
		case "up":
			yOff = Math.ceil(-4 * Math.random()) * 5 - 10
			break
	}
}

export function move() {
	xPos += xOff
	yPos += yOff

	if (xPos > screen.width - 100) {
		newOff("left")
	}

	if (xPos < 0) {
		newOff("right")
	}

	if (yPos > screen.height - 300) {
		newOff("up")
	}

	if (yPos < 0) {
		newOff("down")
	}

	window.moveTo(xPos, yPos)
	window.focus()

	setTimeout(move, 125)
	setInterval(move, 250)
}
