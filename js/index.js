const eventTypes = document.getElementsByName("eventType");
const wedding = document.querySelectorAll(".js-wedding-form");
const party = document.querySelectorAll(".js-party-form");
const nextBtn = document.querySelector(".js-next-btn");
const backBtn = document.querySelector(".js-back-btn");
const submitBtn = document.querySelector(".js-submit-btn");
const firstForm = document.querySelector(".js-first-form");
const secondForm = document.querySelector(".js-second-form");
const form = document.querySelector("form");
const countWrappers = document.querySelectorAll(".contact-countwrapper");
const thanks = document.querySelector(".js-thanks");
const additionalTitle = document.querySelector(".js-thanks-additional");
const thanksName = document.querySelector('.js-thanks-name');
const thanksCountry = document.querySelector('.js-thanks-country')
const thanksTel = document.querySelector('.js-thanks-tel')

fetch("partials/header.html")
  .then((response) => response.text())
  .then((data) => document.querySelector("#header").innerHTML = data);
  
fetch("partials/footer.html")
  .then((response) => response.text())
  .then((data) => document.querySelector("#footer").innerHTML = data);

function toggleMenu() {
  const header = document.querySelector('.header');
  header.classList.toggle('menu-active');
}


// Event type
eventTypes.forEach((type) => {
  type.addEventListener("change", () => {
    changeEventType(type.value);
  });
});

const changeEventType = function(type) {
  let checkedType = type;

  if (checkedType === "wedding") {
    wedding.forEach((section) => {
      section.style.display = "flex";
    });

    party.forEach((section) => {
      section.style.display = "none";
    });

    submitBtn.style.display = "none";
    nextBtn.style.display = "inline-block";

  } else if (checkedType === "party") {
    party.forEach((section) => {
      section.style.display = "flex";
    });

    wedding.forEach((section) => {
      section.style.display = "none";
    });

    submitBtn.style.display = "none";
    nextBtn.style.display = "inline-block";
    additionalTitle.innerText = 'Additional headcount';

  } else if (checkedType === "photoshoot") {
    wedding.forEach((section) => {
      section.style.display = "none";
    });

    party.forEach((section) => {
      section.style.display = "none";
    });

    nextBtn.style.display = "none";
    submitBtn.style.display = "inline-block";
  }
}

// change form
function moveNextForm() {
  firstForm.style.display = "none";
  secondForm.style.display = "block";
}

function moveBackForm() {
  firstForm.style.display = "block";
  secondForm.style.display = "none";
}

nextBtn.addEventListener("click", (e) => {
  e.preventDefault();
  moveNextForm();
  nextBtn.style.display = "none";
  submitBtn.style.display = "inline-block";
});

backBtn.addEventListener("click", (e) => {
  e.preventDefault();
  moveBackForm();
  submitBtn.style.display = "none";
  nextBtn.style.display = "inline-block";
});


// change button
document.addEventListener("DOMContentLoaded", () => {
  if (firstForm.style.display === "inline-block") {
    nextBtn.style.display = "inline-block";
  } else if (firstForm.style.display === "none") {
    nextBtn.style.display = "none";
  }
});

// count number 
countWrappers.forEach((count) => {
  const downBtn = count.querySelector(".js-count-down");
  const upBtn = count.querySelector(".js-count-up");
  const countText = count.querySelector(".js-count-text");

  downBtn.addEventListener("click", (e) => {
    e.preventDefault();
    if (countText.value >= 1) {
      countText.value--;
    }
  });

  upBtn.addEventListener("click", (e) => {
    e.preventDefault();
    countText.value++;
  });
});

// Show Additional Attendee
const additionalInfo = function (attendeeType, count, options) {
  const additionalAttendeeList = document.querySelector(".js-attendees-result");

  if (count != 0) {
    let attendeeLi = document.createElement("li");

    let countText = "";
    if (count >= 1) {
      countText = ` * ${count}`;
    }

    let optionText = "";
    if (options.length > 0) {
      for (let i = 0; i < options.length; i++) {
        if (optionText === "") {
          optionText = options[i];
        } else {
          optionText += ` + ${options[i]}`;
        }
      }
      optionText = ` (${optionText})`;
    }

    attendeeLi.innerText = `${attendeeType}${countText}${optionText}`;
    additionalAttendeeList.appendChild(attendeeLi);
  }
};

// format tel
const formatTel = function(input) {
  let cleaned = ('' + input).replace(/\D/g, '');

  if (cleaned.length >= 10) {
    let part1 = cleaned.substring(0, 3);
    let part2 = cleaned.substring(3, 6);
    let part3 = cleaned.substring(6, 10);

    return `${part1}-${part2}-${part3}`;
  } else {
    return console.error('Invalid input');;
  }
}

// submit btn
form.addEventListener("submit", (e) => {
  e.preventDefault();

  // show thanks section
  form.style.display = "none";
  thanks.style.display = "block";

  // add result
  const formData = new FormData(form);

  // show name
  const nameData = formData.get('name')
  thanksName.innerText = `${nameData}`

  // show country + tel
  const countryData = formData.get('country')
  thanksCountry.innerHTML = `${countryData}`

  const telData = formData.get('tel')
  thanksTel.innerHTML = `${formatTel(telData)}`
  

  //Show Premium Service Data in the Page
  const premiumServiceList = document.querySelector(".js-premium-result");
  const premiumServiceData = formData.getAll("premium");

  for (let i = 0; i < premiumServiceData.length; i++) {
    let premiumLi = document.createElement("li");
    premiumLi.innerHTML = premiumServiceData[i];
    premiumServiceList.appendChild(premiumLi);
  }

  // Show Additional Attendee
  const additionalAttendeeList = document.querySelector(".js-attendees-result");
  const countGroom = formData.get("groomCount");
  const groomOptions = formData.getAll("groom");

  const countBridesmaid = formData.get("bridesmaidCount");
  const bridesmaidOptions = formData.getAll("bridesmaid");

  const countFlower = formData.get("flowerCount");
  const flowerOptions = formData.getAll("flower");

  const countWoman = formData.get("womanCount");
  const womanOptions = formData.getAll("woman");

  const countMan = formData.get("manCount");
  const manOptions = formData.getAll("man");

  // Create and append attendees
  additionalInfo("Groom", countGroom, groomOptions);
  additionalInfo("Bridesmaid", countBridesmaid, bridesmaidOptions);
  additionalInfo("Flower girl", countFlower, flowerOptions);
  additionalInfo("Woman", countWoman, womanOptions);
  additionalInfo("Man", countMan, manOptions);
});