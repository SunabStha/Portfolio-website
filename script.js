
//to change the Style of html tag with ID form-title 1
//to change opacity from 0 to 1
function text1() {
  document.getElementById("form-title1").style.opacity = "1";
 
}
//to change the Style of html tag with ID form-title 2
function text2() {
  document.getElementById("form-title2").style.opacity = "1";
}
//to change the Style of html tag with ID form-title 3
function text3() {
  document.getElementById("form-title3").style.opacity = "1";
}

function text4() {
  document.getElementById("form-title4").style.opacity = "1";
}
//to change the style of html tag with ID from-title 1
// to change opacity from 1 to 0
function blur1() {
  document.getElementById("form-title1").style.opacity = "0";
}

function blur2() {
  document.getElementById("form-title2").style.opacity = "0";

}

function blur3() {
  document.getElementById("form-title3").style.opacity = "0";
}

function blur4() {
  document.getElementById("form-title4").style.opacity = "0";
}


// this function is called if the user clicks register button

function abcdef() {
  //value from the field text with class name is stored in this variable
  const name = document.querySelector(".name");
  const number = document.querySelector(".number");
  const email = document.querySelector(".email");

  if (name.value == "") {
    const parent1 = name.parentElement;
    parent1.classList.add("error");
    const child1 = parent1.children[3];
    child1.classList.add("unhidden");
    child1.textContent = "Name cannot be blank";
    // return false;
  }
// if the name value is not number the carry out the process
  if (isNaN(name.value)) {
  } else {
    const parent1 = name.parentElement;
    parent1.classList.add("error");
    const child1 = parent1.children[3];
    // child1.classList.remove("hidden");
    child1.classList.add("unhidden");
    child1.textContent = "Name cannot be numeric value";
    // return false;
  }

  if (name.value == "") {
    const parent1 = name.parentElement;
    parent1.classList.add("error");
    const child1 = parent1.children[3];
    child1.classList.add("unhidden");
    child1.textContent = "Name cannot be blank";
    // return false;
  }

  if (name.value != "" && isNaN(name.value)) {
    const parent1 = name.parentElement;
    parent1.classList.remove("error");
    parent1.classList.add("success");
    const child1 = parent1.children[3];
    child1.classList.remove("unhidden");
    child1.classList.add("hidden");
  }

  if (email.value == "") {
    const parent3 = email.parentElement;
    parent3.classList.add("error");
    const child3 = parent3.children[3];
    child3.classList.add("unhidden");
    child3.textContent = "Email cannot be blank";
    // return false;
  }

  if (email.value != "") {
    const parent3 = email.parentElement;
    parent3.classList.remove("error");
    parent3.classList.add("success");
    const child3 = parent3.children[3];
    child3.classList.remove("unhidden");
    child3.classList.add("hidden");
  }

  if (email.value == "") {

    const parent3 = email.parentElement;
    parent3.classList.add("error");
    const child3 = parent3.children[3];
    child3.classList.add("unhidden");
    child3.textContent = "Email cannot be blank";
    // return false;
  }

  if (number.value == "") {
    const parent3 = number.parentElement;
    parent3.classList.add("error");
    const child3 = parent3.children[3];
    child3.classList.remove("hidden");
    child3.classList.add("unhidden");
    child3.textContent = "Number cannot be blank";
    return false;
  }

  if (isNaN(number.value)) {
    const parent3 = number.parentElement;
    parent3.classList.add("error");
    const child3 = parent3.children[3];
    child3.classList.add("unhidden");
    child3.textContent = "Phone Number cannot be alphabets";
    return false;
  }

  if (number.value.length != 10) {

    const parent3 = number.parentElement;
    parent3.classList.add("error");
    const child3 = parent3.children[3];
    child3.classList.add("unhidden");
    child3.textContent = "Phone Number must be 10 digits";
    return false;
  }

  if (number.value == "") {
    const parent3 = number.parentElement;
    parent3.classList.add("error");
    const child3 = parent3.children[3];
    child3.classList.remove("hidden");
    child3.classList.add("unhidden");
    child3.textContent = "Number cannot be blank";
    return false;
  }

  if (number.value != "" && number.value.length == 10) {
    const parent3 = number.parentElement;
    parent3.classList.remove("error");
    parent3.classList.add("success");
    const child3 = parent3.children[3];
    child3.classList.remove("unhidden");
    child3.classList.add("hidden");
  }

}
