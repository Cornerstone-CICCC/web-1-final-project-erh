const eventTypes = document.getElementsByName("eventType");
const form = document.querySelector("form");
const nextBtn = document.querySelector('.js-next-btn');
const backBtn = document.querySelector('.js-next-btn');

// Event type
eventTypes.forEach(type => {
  type.addEventListener('change', () => {
    changeEventType(type.value)
  })
})

function changeEventType(type) {
  let checkedType = type;

  if (checkedType == "wedding") {

    // Show wedding form
    document.querySelector(".js-wedding-form").style.display = "block";
    // Hide other forms
    document.querySelector(".js-party-form").style.display = "none";

  } else if (checkedType == "party") {

    // Show party form
    document.querySelector(".js-party-form").style.display = "block";
    // Hide other forms
    document.querySelector(".js-wedding-form").style.display = "none";

  } else if (checkedType == "photoshoot") {

    // Hide other forms
    document.querySelector(".js-party-form").style.display = "none";
    document.querySelector(".js-wedding-form").style.display = "none";

  }
}


// change form
function moveNextForm() {
  // Hide Current form
  document.querySelector(".js-first-form").style.display = "none";
  // Show Next form
  document.querySelector(".js-second-form").style.display = "block";
}

function moveBackForm() {
  // Hide Current form
  document.querySelector(".js-first-form").style.display = "block";
  // Show Next form
  document.querySelector(".js-second-form").style.display = "none";
}



nextBtn.addEventListener('click', (e) => {
  e.preventDefault();
  moveNextForm()
})

backBtn.addEventListener('click', () => {
  moveBackForm()
})

// form.addEventListener("submit", (e) => {
//   e.preventDefault();
//   const formData = new FormData(form);

//   //Show Premium Service Data in the Page
//   const premiumServiceList = document.getElementById("premium-service-list");
//   const premiumServiceData = formData.getAll("premium-service");

//   for (let i = 0; i < premiumServiceData.length; i++) {
//     let li = document.createElement("li");
//     li.innerHTML = premiumServiceData[i];
//     premiumServiceList.appendChild(li);
//   }

//   //Show Additional Attendee Data in the Page
//   const additionalAttendeeList = document.getElementById(
//     "additional-attendee-list"
//   );

//   // Show Groom Data
//   const countGroom = formData.get("contact-countinput-groom");

//   if (countGroom != 0) {
//     let li = document.createElement("li");

//     let countText = "";
//     // Show Groom Amounts
//     if (countGroom > 1) {
//       countText = ` * ${countGroom}`;
//     }

//     // Show Groom Options
//     const groomOptions = formData.getAll("groom-option");
//     let optionText = "";
//     if (groomOptions != []) {
//       for (let i = 0; i < groomOptions.length; i++) {
//         if (optionText == "") {
//           optionText = groomOptions[i];
//         } else {
//           optionText += ` + ${groomOptions[i]}`;
//         }
//       }
//       optionText = ` (${optionText})`;
//     }

//     li.innerText = `Groom${countText}${optionText}`;
//     additionalAttendeeList.appendChild(li);
//   }
// });
