const form = document.getElementById("form");
const username = document.getElementById("username");
const email = document.getElementById("email");
const password = document.getElementById("password");
const password2 = document.getElementById("password2");

//shows input error message
function showError(input, message) {
  const formControl = input.parentElement;
  formControl.className = "form-control error";
  const small = formControl.querySelector("small");
  small.innerText = message;
}

function showSuccess(input) {
  console.log(input);
  const formControl = input.parentElement;
  formControl.className = "form-control success";
  // formControl.classList.add("success");
}

//regex to check email validity
function checkEmail(input) {
  var re = /\S+@\S+\.\S+/;
  if (re.test(input.value)) {
    showSuccess(input);
  } else {
    showError(input, "Email is not valid");
  }
}

//check required fields
function checkRequired(inputArr) {
  console.log(inputArr);
  inputArr.forEach(function (input) {
    console.log(input);
    if (input.value === "") {
      showError(input, `${getFieldName(input)} is required`);
    } else {
      showSuccess(input);
    }
  });
}

//get field name
function getFieldName(input) {
  return input.id.charAt(0).toUpperCase() + input.id.slice(1);
}

//check length function
function checkLength(input, min, max) {
  console.log(input, min, max);
  if (input.value.length < min) {
    showError(input, `minimum characters should be ${min}`);
  } else if (input.value.length > max) {
    showError(input, `maximum characters cannot exceed ${max}`);
  } else {
    showSuccess(input);
  }
}

//checking password match
function checkPasswordMatch(input1, input2) {
  if (input1.value !== input2.value) {
    showError(input2, "add the same password as one entered above");
  }
}

//event listeners
form.addEventListener("submit", function (e) {
  e.preventDefault();

  checkRequired([username, email, password, password2]);
  checkLength(username, 3, 15);
  checkLength(password, 6, 20);
  checkEmail(email);
  checkPasswordMatch(password, password2);
});
