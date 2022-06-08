document.querySelector("form").addEventListener("submit", formSubmit);

//fetched data from LocalStorage
let arr = JSON.parse(localStorage.getItem("dsaQuesArray")) || [];

function formSubmit() {
  //fetched and store data in array of objects
  let obj = {
    qTitle: document.querySelector("#title").value,
    ojLink: document.querySelector("#link").value,
    difiCulty: document.querySelector("#difficulty").value,
  };
  arr.push(obj);

  //store to LocalStorage
  localStorage.setItem("dsaQuesArray", JSON.stringify(arr));

  //submit and clear form
  document.querySelector("#title").value = "";
  document.querySelector("#link").value = "";
  document.querySelector("#difficulty").value = "";
}

//calling table display function
displayData(arr);

function displayData(arr) {
  arr.forEach(function (ele, index, array) {
    let tr = document.createElement("tr");

    //Questions title column
    let td1 = document.createElement("td");
    td1.innerText = ele.qTitle;

    //OJ Link url column
    let td2 = document.createElement("td");
    td2.innerText = ele.ojLink;

    //difiCulty column
    let td3 = document.createElement("td");
    td3.innerText = ele.difiCulty;
    if (ele.difiCulty == "Easy") {
      td3.style.color = "green";
    } else if (ele.difiCulty == "Medium") {
      td3.style.color = "orange";
    } else if (ele.difiCulty == "Hard") {
      td3.style.color = "Red";
    }

    //Revision column
    let td4 = document.createElement("td");
    if (ele.difiCulty == "Easy") {
      td4.innerText = "No";
    } else {
      td4.innerText = "Yes";
    }

    //delete button
    let td5 = document.createElement("td");
    td5.innerText = "Delete";
    td5.style.backgroundColor = "red";
    td5.style.color = "white";
    td5.addEventListener("mouseover", hoverFunction);
    td5.addEventListener("click", function (event) {
      deleteFromLS(event, index, array);
    });

    //append
    tr.append(td1, td2, td3, td4, td5);
    document.querySelector("tbody").append(tr);
  });
}

//delete button hover
function hoverFunction(event) {
  event.target.style.cursor = "pointer";
}

function deleteFromLS(event, index, array) {
  array.splice(index, 1);
  localStorage.setItem("dsaQuesArray", JSON.stringify(array));
  event.target.parentNode.remove();
}
