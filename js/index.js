const eventTypes = document.getElementsByName("eventType");
const wedding = document.querySelectorAll(".js-wedding-form");
const party = document.querySelectorAll(".js-party-form");
const nextBtn = document.querySelector(".js-next-btn");
const backBtn = document.querySelector(".js-back-btn");
const submitBtn = document.querySelector(".js-submit-btn");
const firstForm = document.querySelector(".js-first-form");
const secondForm = document.querySelector(".js-second-form");
const form = document.querySelector("form");
const countWrappers = document.querySelectorAll('.contact-countwrapper')



// Event type
eventTypes.forEach((type) => {
  type.addEventListener("change", () => {
    changeEventType(type.value);
  });
});

function changeEventType(type) {
  let checkedType = type;

  if (checkedType === "wedding") {
    
    wedding.forEach(section => {
      section.style.display = "flex";
    })

    party.forEach(section => {
      section.style.display = "none";
    })

    submitBtn.style.display = 'none';
    nextBtn.style.display = 'inline-block';

  } else if (checkedType === "party") {

    party.forEach(section => {
      section.style.display = "flex";
    })

    wedding.forEach(section => {
      section.style.display = "none";
    })

    submitBtn.style.display = 'none';
    nextBtn.style.display = 'inline-block';

  } else if (checkedType === "photoshoot") {
    wedding.forEach(section => {
      section.style.display = "none";
    })

    party.forEach(section => {
      section.style.display = "none";
    })

    nextBtn.style.display = 'none';
    submitBtn.style.display = 'inline-block';
  }
}

// change form
function moveNextForm() {
  // Hide Current form
  firstForm.style.display = "none";
  // Show Next form
  secondForm.style.display = "block";
}

function moveBackForm() {
  // Hide Current form
  firstForm.style.display = "block";
  // Show Next form
  secondForm.style.display = "none";
}

nextBtn.addEventListener("click", (e) => {
  e.preventDefault();
  moveNextForm();
  nextBtn.style.display = 'none';
  submitBtn.style.display = 'inline-block';
});

backBtn.addEventListener("click", (e) => {
  e.preventDefault();
  moveBackForm();
  submitBtn.style.display = 'none';
  nextBtn.style.display = 'inline-block';
});

// change button
document.addEventListener("DOMContentLoaded", () => {
  if (firstForm.style.display === "inline-block") {
    nextBtn.style.display = "inline-block";
  } else if (firstForm.style.display === "none") {
    nextBtn.style.display = "none";
  }
});

countWrappers.forEach(count => {

  const downBtn = count.querySelector('.js-count-down');
  const upBtn = count.querySelector('.js-count-up');
  const countText = count.querySelector('.js-count-text');

  downBtn.addEventListener('click', (e) => {
    e.preventDefault()
    if(countText.value >= 1) {
      countText.value--;
    }
  });

  upBtn.addEventListener('click', (e) => {
    e.preventDefault()
    countText.value++;
  })
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
