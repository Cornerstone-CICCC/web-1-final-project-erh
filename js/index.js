function changeEventType() {
  const eventTypes = document.getElementsByName("eventType")

  let checkedType = ""
  for (var i = 0; i < eventTypes.length; i++) {
    if (eventTypes[i].checked) {
      checkedType = eventTypes[i].value
    }
  }

  if (checkedType == "wedding") {
    // Show wedding form
    document.getElementById("wedding-form").style.display= "block"
    // Hide other forms
    document.getElementById("party-form").style.display= "none"
    document.getElementById("photoshoot-form").style.display= "none"
  } else if (checkedType == "party") {
    // Show party form
    document.getElementById("party-form").style.display= "block"
    // Hide other forms
    document.getElementById("wedding-form").style.display= "none"
    document.getElementById("photoshoot-form").style.display= "none"
  } else if (checkedType == "photoshoot") {
    // Show photoshoot form
    document.getElementById("photoshoot-form").style.display= "block"
    // Hide other forms
    document.getElementById("party-form").style.display= "none"
    document.getElementById("wedding-form").style.display= "none"
  }
}

function moveWeddingForm() {
  // Hide Current form
  document.getElementById("wedding-form").style.display = "none"
  // Show Next form
  document.getElementById("wedding-form-2").style.display = "block"
}

function movePartyForm() {
  // Hide Current form
  document.getElementById("party-form").style.display = "none"
  // Show Next form
  document.getElementById("party-form-2").style.display = "block"
}

const form = document.querySelector('form')

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const formData = new FormData(form)

  //Show Premium Service Data in the Page
  const premiumServiceList = document.getElementById("premium-service-list")
  const premiumServiceData = formData.getAll('premium-service')

  for (let i = 0; i < premiumServiceData.length; i++) {
    let li = document.createElement("li")
    li.innerHTML = premiumServiceData[i]
    premiumServiceList.appendChild(li)
  }

  //Show Additional Attendee Data in the Page
  const additionalAttendeeList = document.getElementById("additional-attendee-list")

  // Show Groom Data
  const countGroom = formData.get('contact-countinput-groom')

  if (countGroom != 0) {
    let li = document.createElement("li")

    let countText = ""
    // Show Groom Amounts
    if (countGroom > 1) {
      countText = ` * ${countGroom}`
    }

    // Show Groom Options
    const groomOptions = formData.getAll('groom-option')
    let optionText = ""
    if (groomOptions != []) {
      for (let i = 0; i < groomOptions.length; i++) {
        if (optionText == "") {
          optionText = groomOptions[i]
        } else {
          optionText += ` + ${groomOptions[i]}`
        }
      }
      optionText = ` (${optionText})`
    }

    li.innerText = `Groom${countText}${optionText}`
    additionalAttendeeList.appendChild(li)
  }
})
