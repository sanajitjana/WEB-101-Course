// All the Code for the Admitted page goes here
let acceptStudentsArrayFromLS =
  JSON.parse(localStorage.getItem("admission-accepted")) || [];
let tbody = document.querySelector("tbody");

displayAcceptStudents(acceptStudentsArrayFromLS);
function displayAcceptStudents(array) {
  array.forEach(function (ele) {
    let tr = document.createElement("tr");

    let tdForName = document.createElement("td");
    tdForName.innerText = ele.name;

    let tdForEmail = document.createElement("td");
    tdForEmail.innerText = ele.email;

    let tdForCourse = document.createElement("td");
    tdForCourse.innerText = ele.course;

    let tdForGender = document.createElement("td");
    tdForGender.innerText = ele.gender;

    let tdForPhone = document.createElement("td");
    tdForPhone.innerText = ele.phone;

    tr.append(tdForName, tdForEmail, tdForCourse, tdForGender, tdForPhone);
    tbody.append(tr);
  });
}
