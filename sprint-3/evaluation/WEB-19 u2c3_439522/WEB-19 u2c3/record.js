// fill in javascript code here
document.querySelector("form").addEventListener("submit", forSubmit);
function forSubmit(event) {
  event.preventDefault();
  let emp_name = document.querySelector("#name").value;
  let emp_id = document.querySelector("#employeeID").value;
  let emp_dept = document.querySelector("#department").value;
  let emp_exp = document.querySelector("#exp").value;
  let emp_email = document.querySelector("#email").value;
  let emp_mobile = document.querySelector("#mbl").value;

  let tr = document.createElement("tr");
  let dis_name = document.createElement("td");
  dis_name.innerText = emp_name;
  let dis_id = document.createElement("td");
  dis_id.innerText = emp_id;
  let dis_dept = document.createElement("td");
  dis_dept.innerText = emp_dept;
  let dis_exp = document.createElement("td");
  dis_exp.innerText = emp_exp;
  let dis_email = document.createElement("td");
  dis_email.innerText = emp_email;
  let dis_mobile = document.createElement("td");
  dis_mobile.innerText = emp_mobile;

  let dis_role = document.createElement("td");
  if (emp_exp > 5) {
    dis_role.innerText = "Senior";
  } else if (emp_exp >= 2 && emp_exp <= 5) {
    dis_role.innerText = "Junior";
  } else if (emp_exp <= 1) {
    dis_role.innerText = "Fresher";
  }

  let dis_delete = document.createElement("td");
  dis_delete.innerText = "Delete";
  dis_delete.addEventListener("click", deleteFunc);
  function deleteFunc(event) {
    event.target.parentNode.remove();
  }

  tr.append(
    dis_name,
    dis_id,
    dis_dept,
    dis_exp,
    dis_email,
    dis_mobile,
    dis_role,
    dis_delete
  );
  document.querySelector("tbody").append(tr);
}
