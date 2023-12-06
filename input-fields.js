const inputs = [
  { name: "api-key", label: "Public API key", },
  { name: "pan", label: "PAN", value: "4111111111111111" },
  { name: "csc", label: "csc", value: "987" },
  { name: "expires", label: "CSC", placeholder: "MM/YY", value: "1/32" },
  { name: "auto-capture", label: "Auto Capture", type: "checkbox", value: true },
  { name: "category", label: "Category", type: "select", options: ["purchase", "withdrawal", "payout", "account-to-account", "person-to-person", "topup", "tip"] },
  { name: "currency", label: "Currency", value: "EUR" },
  { name: "amount", label: "Amount", value: "250" },
]

const accountDetailsInput = [
  { name: "first-name", label: "First Name", value: "Jane" },
  { name: "last-name", label: "Last Name", value: "Doe" },
  { name: "city", label: "City", value: "Stockholm" },
  { name: "county-code", label: "Country Code", value: "SE" },
  { name: "street", label: "Street", value: "Street" },
  { name: "zip-code", label: "Zip Code", value: "75324" },
  { name: "account-type", label: "Category", type: "select", options: ["card", "bic", "iban", "cash", "wallet",] },
  { name: "account-number", label: "Account Number", value: "4111111111111111" }
]

const sameReceiver = { name: "same-receiver", label: "Same Receiver", type: "checkbox", value: true }

const form = document.querySelector("form")
console.log(form)


function createAndAppendInput(inputData, parent) {
  const inputType = inputData.type ?? "text"
  let inputElement
  switch (inputType) {
    case "text":
      inputElement = document.createElement("input")
      inputElement.type = "text"
      break;
    case "checkbox":
      inputElement = document.createElement("input")
      inputElement.type = "checkbox"
      break;
    case "select":
      inputElement = document.createElement("select")
      inputData.options.forEach(op => {
        const optionElement = document.createElement("option")
        optionElement.value = op
        optionElement.innerText = op
        inputElement.appendChild(optionElement)
      })
      break;
    default:
      inputElement = document.createElement("span")
      inputElement.innerText = "Not valid input element"
      break;
  }
  inputElement.id = inputData.name
  inputElement.name = inputData.name
  const labelElement = document.createElement("label")
  labelElement.for = inputData.name
  labelElement.innerText = inputData.label

  if (inputType == "checkbox") {
    parent.appendChild(inputElement)
    parent.appendChild(labelElement)
  } else {
    parent.appendChild(labelElement)
    parent.appendChild(inputElement)
  }
}