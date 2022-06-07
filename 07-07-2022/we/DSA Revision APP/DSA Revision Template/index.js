document.querySelector("form").addEventListener("submit", formSubmit);
function formSubmit(event) {
  let arr = [];
  event.preventDefault();
  let obj = {
    qTitle: document.querySelector("#title").value,
    ojLink: document.querySelector("#link").value,
    difiCulty: document.querySelector("#difficulty").value,
  };
  arr.push(obj);
  localStorage.setItem("arrOfObjects", JSON.stringify(arr));
  let data = JSON.parse(localStorage.getItem("arrOfObjects"));
  displayData(data);
}

function displayData(arr) {
  arr.forEach(function (ele) {
    let tr = document.createElement("tr");
    let td1 = document.createElement("td");
    td1.innerText = ele.qTitle;

    let td2 = document.createElement("td");
    td2.innerText = ele.ojLink;

    let td3 = document.createElement("td");
    td3.innerText = ele.difiCulty;
    if (ele.difiCulty == "Easy") {
      td3.style.color = "green";
    } else if (ele.difiCulty == "Medium") {
      td3.style.color = "orange";
    } else if (ele.difiCulty == "Hard") {
      td3.style.color = "Red";
    }

    let td4 = document.createElement("td");
    if (ele.difiCulty == "Easy") {
      td4.innerText = "No";
    } else {
      td4.innerText = "Yes";
    }

    let td5 = document.createElement("td");
    td5.innerText = "Delete";
    td5.style.backgroundColor = "red";
    td5.style.color = "white";
    td5.addEventListener("mouseover", hoverFunction);
    function hoverFunction(event) {
      event.target.style.cursor = "pointer";
    }
    td5.addEventListener("click", deleteFunction);
    function deleteFunction(event) {
      event.target.parentNode.remove();
    }

    tr.append(td1, td2, td3, td4, td5);
    document.querySelector("tbody").append(tr);
  });
}
