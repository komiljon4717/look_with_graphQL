function createElements(...array) {
    return array.map(el => {
		return document.createElement(el)
	})
}