const pass1 = document.getElementById("pwd");
const pass2 = document.getElementById("pwd2");
const submitBtn = document.querySelector(".submit");
const errorMsg = document.querySelector(".error");
const inputs = document.querySelectorAll(".inp");
const firstName = document.querySelector("#name");
const country = document.querySelector("#country");
const email = document.querySelector("#email");
const zip = document.querySelector("#zip");
const oneUppercase = document.querySelector(".one-uppercase");
const oneLowercase = document.querySelector(".one-lowercase");
const oneSpecialChar = document.querySelector(".one-special-char");
const oneNumber = document.querySelector(".one-number");
const AtLeast8 = document.querySelector(".at-least-8");
const pwd2Label = document.querySelector(".pwd2");

// const pwd = document.querySelector("#pwd");
// const pwd2 = document.querySelector("#pwd2");

submitBtn.addEventListener("click", onSubmit);

inputs.forEach((inp) => {
  inp.addEventListener("input", validateInput);
});
function onSubmit() {
  var form = document.getElementById("form");
  form.reset();
  alert("Thank you for your submission!");
  setTimeout(function () {
    location.reload();
  }, 300); // wait for 1 second before reloading the page
}
function AtLeastEight() {
  return pass1.value.length >= 8;
}
function hasCapitalLetter() {
  return /[A-Z]/.test(pass1.value);
}
function hasLowercaseLetter() {
  return /[a-z]/.test(pass1.value);
}
function hasSpecialCharacter() {
  return /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+/.test(pass1.value);
}
function hasNumber() {
  return /[0-9]/.test(pass1.value);
}
function validateInput() {
  let firstNameValid = firstName.checkValidity();
  let countryValid = country.checkValidity();
  let emailValid = email.checkValidity();
  let zipValid = zip.checkValidity();
  let pwdValid = pwd.checkValidity();
  let pwd2Valid = pwd2.checkValidity();
  if (AtLeastEight()) {
    AtLeast8.style.color = "rgb(0, 175, 0)";
  }
  if (hasCapitalLetter()) {
    oneUppercase.style.color = "rgb(0, 175, 0)";
  }
  if (hasLowercaseLetter()) {
    oneLowercase.style.color = "rgb(0, 175, 0)";
  }
  if (hasNumber()) {
    oneNumber.style.color = "rgb(0, 175, 0)";
  }
  if (hasSpecialCharacter()) {
    oneSpecialChar.style.color = "rgb(0, 175, 0)";
  }
  if (firstNameValid) {
    firstName.style.outline = "2px solid rgb(0, 175, 0)";
  } else {
    firstName.style.outline = "2px solid rgb(255, 73, 73)";
  }
  if (countryValid) {
    country.style.outline = "2px solid rgb(0, 175, 0)";
  } else {
    country.style.outline = "2px solid rgb(255, 73, 73)";
  }
  if (emailValid) {
    email.style.outline = "2px solid rgb(0, 175, 0)";
  } else {
    email.style.outline = "2px solid rgb(255, 73, 73)";
  }
  if (zipValid) {
    zip.style.outline = "2px solid rgb(0, 175, 0)";
  } else {
    zip.style.outline = "2px solid rgb(255, 73, 73)";
  }
  if (pwdValid) {
    pwd2Label.style.opacity = "1.0";
    pass2.style.opacity = "1.0";
    pass2.style.pointerEvents = "auto";
  }
  if (pwdValid && pwd2Valid && pwdsMatch) {
    pass1.style.outline = "2px solid rgb(0, 175, 0)";
    pass2.style.outline = "2px solid rgb(0, 175, 0)";
  } else {
    pass1.style.outline = "2px solid rgb(255, 73, 73)";
    pass1.style.outline = "2px solid rgb(255, 73, 73)";
  }
  if (
    firstNameValid &&
    countryValid &&
    emailValid &&
    zipValid &&
    pwdsMatch &&
    pwdValid &&
    pwd2Valid
  ) {
    submitBtn.style.pointerEvents = "auto";
    submitBtn.style.opacity = "1.0";
  } else {
    submitBtn.style.opacity = "0.3";
    submitBtn.style.pointerEvents = "none";
  }
}

let password1, password2;
let pwdsMatch = false;

pass1.addEventListener("input", () => {
  password1 = pass1.value;
  password1 === password2
    ? ((pwdsMatch = true), (errorMsg.textContent = "Passwords match"))
    : ((pwdsMatch = false), (errorMsg.textContent = "Passwords do not match"));
  validateInput();
});

pass2.addEventListener("input", () => {
  password2 = pass2.value;
  password1 === password2
    ? ((pwdsMatch = true), (errorMsg.textContent = "Passwords match"))
    : ((pwdsMatch = false), (errorMsg.textContent = "Passwords do not match"));
  validateInput();
});
