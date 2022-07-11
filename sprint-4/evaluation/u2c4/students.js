// All the Code for All Students Page Goes Here
let studentsArrayFromLS = JSON.parse(localStorage.getItem("admission")) || [];
let acceptStudentsArrayFromLS =
  JSON.parse(localStorage.getItem("admission-accepted")) || [];
let rejectStudentsArrayFromLS =
  JSON.parse(localStorage.getItem("admission-rejected")) || [];
let tbody = document.querySelector("tbody");

displayStudentData(studentsArrayFromLS);
function displayStudentData(studentsArrayFromLS) {
  tbody.innerHTML = "";
  studentsArrayFromLS.forEach(function (ele, index) {
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

    let tdForAccept = document.createElement("td");
    tdForAccept.innerText = "Accept";
    tdForAccept.addEventListener("click", function () {
      acceptFunction(ele, index);
    });

    let tdForReject = document.createElement("td");
    tdForReject.innerText = "Reject";
    tdForReject.addEventListener("click", function () {
      rejectFunction(ele, index);
    });

    tr.append(
      tdForName,
      tdForEmail,
      tdForCourse,
      tdForGender,
      tdForPhone,
      tdForAccept,
      tdForReject
    );
    tbody.append(tr);
  });
}

function acceptFunction(ele, index) {
  studentsArrayFromLS.splice(index, 1);
  localStorage.setItem("admission", JSON.stringify(studentsArrayFromLS));
  acceptStudentsArrayFromLS.push(ele);
  localStorage.setItem(
    "admission-accepted",
    JSON.stringify(acceptStudentsArrayFromLS)
  );
  displayStudentData(studentsArrayFromLS);
}

function rejectFunction(ele, index) {
  studentsArrayFromLS.splice(index, 1);
  localStorage.setItem("admission", JSON.stringify(studentsArrayFromLS));
  rejectStudentsArrayFromLS.push(ele);
  localStorage.setItem(
    "admission-rejected",
    JSON.stringify(rejectStudentsArrayFromLS)
  );
  displayStudentData(studentsArrayFromLS);
}

let filterByCourse = document.querySelector("#filter");
filterByCourse.addEventListener("change", courseFilterFunction);
function courseFilterFunction() {
  let filterArray = [...studentsArrayFromLS];
  let newArr = filterArray.filter(function (ele) {
    if (filterByCourse.value == "all" || filterByCourse.value == "") {
      return ele.course;
    } else {
      return ele.course == filterByCourse.value;
    }
  });
  displayStudentData(newArr);
}
