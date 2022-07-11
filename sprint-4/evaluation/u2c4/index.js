// All the JS Code for the Add Students Page Goes Here
document.querySelector("form").addEventListener("submit", formSubmit);
let allStudentArray = JSON.parse(localStorage.getItem("admission")) || [];

function formSubmit(event) {
  event.preventDefault();
  let myObj = {
    name: document.querySelector("#name").value,
    email: document.querySelector("#email").value,
    phone: document.querySelector("#phone").value,
    gender: document.querySelector("#gender").value,
    course: document.querySelector("#course").value,
  };
  allStudentArray.push(myObj);
  localStorage.setItem("admission", JSON.stringify(allStudentArray));

  //clearing form after submit
  document.querySelector("#name").value = "";
  document.querySelector("#email").value = "";
  document.querySelector("#phone").value = "";
}
