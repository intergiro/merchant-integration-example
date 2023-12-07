function generateUnique() {
	result = ""
	const ranges = [
		[48, 58],
		[65, 91],
		[97, 123]
	]
	for (let i = 0; i < 20; i++) {
		const categoryIndexer = Math.random() * 12
		const category = categoryIndexer < 2 ? 0 : categoryIndexer < 7 ? 1 : 2
		result += String.fromCharCode(Math.floor(Math.random() * (ranges[category][1] - ranges[category][0]) + ranges[category][0]))
	}
	return result
}

function appendToBody(elementType, text) {
	const element = document.createElement(elementType)
	element.innerText = text
	document.body.appendChild(element)
}

function initialize() {
	let search = (new URL(document.location)).searchParams;
	document.getElementById("pan").value = search.get('automatic') ? "9001100911111111" : "4111111111111111";
	const expiryYear = (new Date(Date.now()).getFullYear() - 2000 + 1)
	document.getElementById("expires").value = `1/${expiryYear}`
	if (search.get('key'))
		document.getElementById("api-key").value = search.get('key')

	document.getElementById("category").addEventListener("change", (event) => {
		const senderReceiverDiv = document.querySelector("div#sender-receiver")
		if (event.target.value == "account-to-account" || event.target.value == "person-to-person") {
			senderReceiverDiv.hidden = false
		} else {
			senderReceiverDiv.hidden = true
		}
	})

	document.getElementById("same-receiver").addEventListener("change", (event) => {
		const receiverFieldset = document.querySelector("fieldset#receiver")
		receiverFieldset.hidden = event.target.checked
	})

}
