let xOff = 5
let yOff = 5
let xPos = 600
let yPos = -100

function newLeft() {
	xOff = Math.ceil(-4 * Math.random()) * 5 - 10
}

function newRight() {
	xOff = Math.ceil(7 * Math.random()) * 5 - 10
}

function newUp() {
	yOff = Math.ceil(-4 * Math.random()) * 5 - 10
}

function newDown() {
	yOff = Math.ceil(7 * Math.random()) * 5 - 10
}

export function move() {
	xPos += xOff
	yPos += yOff

	if (xPos > screen.width - 100) {
		newLeft()
	}

	if (xPos < 0) {
		newRight()
	}

	if (yPos > screen.height - 300) {
		newUp()
	}

	if (yPos < 0) {
		newDown()
	}

	window.moveTo(xPos, yPos)
	window.focus()

	setTimeout(move, 150)
	setInterval(move, 300)
}
