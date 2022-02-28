let form = document.getElementById("form");

let identite = document.getElementById("identite");
let identiteError = document.getElementById("identiteError");

let mail = document.getElementById("mail");
let mailError = document.getElementById("mailError");

let msg = document.getElementById("msgMail");
let msgError = document.getElementById("msgMailError");

const mailRegexp = new RegExp(
  "^([w-]+(?:.[w-]+)*)@((?:[w-]+.)*w[w-]{0,66}).([a-z]{2,6}(?:.[a-z]{2})?)$",
  "i"
);
const identiteRegexp = new RegExp("^[a-z ,.'-]+$", "i");

form.addEventListener("submit", function (e) {
  if (identiteRegexp.test(identite.value)) {
    identite.Error.innerHTML = "ok";
    e.preventDefault();
  } else {
    identiteError.innerHTML = "Les chiffres ne sont pas acceptés";
    e.preventDefault();
  }
});
