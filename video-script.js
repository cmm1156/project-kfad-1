
document.addEventListener('DOMContentLoaded', function(event) {
  var rellax = new Rellax('.rellax');
});

// let redLink = document.getElementById("redLink");
// let blueLink = document.getElementById("blueLink");
// let greenLink = document.getElementById("greenLink");
//
// redLink.addEventListener("click", backToHome);
//
// function backToHome() {
//   let newLink = document.createElement("A");
//   newLink.src = "index.html";
//
//   redLink.appendChild(newLink);
//   blueLink.appendChild(newLink);
//   greenLink.appendChild(newLink);
//
//   alert("You tried")
// }



//PASSWORD

let passwordDiv = document.getElementById("passwordDiv");

let newDiv = document.createElement("DIV");
newDiv.classList.add("newDiv")

let newInput = document.createElement("INPUT");
newInput.classList.add("newInput");
newInput.type = "password";
let newButton = document.createElement("BUTTON");
newButton.classList.add("newButton");
newButton.innerHTML = "Enter";

newDiv.appendChild(newInput);
newDiv.appendChild(newButton);

newDiv.style.textAlign = "center";
newDiv.style.marginBottom = "30vh";

passwordDiv.appendChild(newDiv);

newButton.addEventListener("click", passwordFunction);

let password = "password";

function passwordFunction() {
  if (newInput.value == "password") {
    let newPage = document.createElement("A");
    newPage.classList.add("newPage");
    newPage.href = "https://youtu.be/sAn7baRbhx4";
    newPage.innerHTML = "Backdoor";

    alert("User: King of the Internet // Password: Correct // Welcome")

    newDiv.appendChild(newPage);
  }

}
