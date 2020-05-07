
let textArray = [
  "placeHoldZero",
  "Hello. What is you SSN?",
  "Credit card info?",
  "Thank you. How do you like the internet?",
  "Yes, this is true power",
  "Btw, have you tried out the Shoppe? It's a great place to spend money on the internet.",
  "There is a secret way to access backdoor to The Internet. <br> Here <a href=\"secret.html\">Link</a>", //7
  "*System compromised*",
]

let textBox = document.getElementById("textBox");

let typeBox = document.getElementById("typeBox");
let sendInput = document.getElementById("sendInputId");
let sendButton = document.getElementById("sendButtonId");

let userMessage = document.createElement("DIV");
userMessage.classList.add("userMessage");
let compMessage = document.createElement("DIV");
compMessage.classList.add("compMessage");

sendButton.addEventListener("click", sendMessage);
// sendButton.addEventListener("click", document.getElementById("sendInputId") = '');

let i = 0;


function receiveMessage() {
  let recMessage = document.createElement("DIV");
  recMessage.classList.add("compMessage");

  if (i <= 6) {
    let newDate = document.createElement("P");
    newDate.innerHTML = Date();
    newDate.classList.add("date");
    recMessage.innerHTML = textArray[i];
    recMessage.appendChild(newDate);

  }

  else if (i >= 7) {
    recMessage.innerHTML = textArray[7];
  }

  // recMessage.appendChild(newDate);
  textBox.appendChild(recMessage);



  console.log("message received");

}

function sendMessage() {
  let newMessage = document.createElement("DIV");
  newMessage.classList.add("userMessage");
  newMessage.innerHTML = sendInput.value;
  let newDate = document.createElement("P");
  newDate.innerHTML = Date();
  newDate.classList.add("date");
  newMessage.appendChild(newDate);

  textBox.appendChild(newMessage);

  sendInput.value = "";

  i+=1;



  // receiveMessage();

  console.log("button click");

}





let title = document.getElementById("titleId");

function easterEgg() {
  // let title = document.getElementById("titleId");

  let easterEggLink = document.createElement("P");
  easterEggLink.classList.add("title");
  easterEggLink.classList.add("eggFadeIn");
  easterEggLink.innerHTML = "<a href=\'secret.html\' id=\"secretLinkId\">Secret Egg Chat</a>";

  title.appendChild(easterEggLink);
  console.log("secret");
}
