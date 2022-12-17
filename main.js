var myForm = document.getElementById("my-form");
var nameInput = document.querySelector("#name");
var phoneInput = document.querySelector("#phone");
var userList = document.getElementById("users");
var msg = document.querySelector(".msg");

myForm.addEventListener("submit", addItem);
userList.addEventListener("click", removeItem);
userList.addEventListener("click", editItem);
function addItem(e) {
  e.preventDefault();
  if (nameInput.value === "" || phoneInput.value === "") {
    msg.classList.add("error");
    msg.innerHTML = "Please enter all fields";
    setTimeout(() => msg.remove(), 3000);
  } else {
    const obj = {
      name: nameInput.value,
      phone: phoneInput.value,
    };
    localStorage.setItem(obj.phone, JSON.stringify(obj));
    var object = JSON.parse(localStorage.getItem(obj.phone));
    var userDetails = `${object.name} : ${object.phone}`;
    var li = document.createElement("li");
    li.className = "list-group";
    li.appendChild(document.createTextNode(userDetails));
    var deleteBtn = document.createElement("button");
    var editBtn = document.createElement("button");
    editBtn.style.backgroundColor = "green";
    deleteBtn.style.background = "red";
    deleteBtn.className = "btn delete";
    editBtn.className = "btn edit";
    editBtn.appendChild(document.createTextNode("Edit"));
    deleteBtn.appendChild(document.createTextNode("Delete"));
    li.appendChild(editBtn);
    li.appendChild(deleteBtn);
    userList.appendChild(li);
    nameInput.value = "";
    phoneInput.value = "";
  }
}
function editItem(e) {

}
function removeItem(e) {
  if (e.target.classList.contains("delete")) {
    if (confirm("Do you want to delete user from list")) {
      var li = e.target.parentElement;
      userList.removeChild(li);
    }
  }
}