let button1 = document.querySelector("#password1");
let button2 = document.querySelector("#password2");
let button3 = document.querySelector("#password3");
let button4 = document.querySelector("#password4");
function generate_passwords() {
  // button1.textContent = " "
  button1.textContent = randompassword();
  button1.setAttribute("style", "color: #55F991;");
  button2.textContent = randompassword();
  button2.setAttribute("style", "color: #55F991;");
  button3.textContent = randompassword();
  button3.setAttribute("style", "color: #55F991;");
  button4.textContent = randompassword();
  button4.setAttribute("style", "color: #55F991;");
}

function randompassword() {
  // 33 ~ 126
  let mypassword = "";
  let digit = 0;

  for (let i = 0; i < 15; i++) {
    digit = Math.floor(Math.random() * 93 + 33);
    mypassword += String.fromCharCode(digit);
  }
  return mypassword;
}
function copyToClipboard(value) {
  navigator.clipboard.writeText(value);

  //   function exampleFunction(exampleElement) {
  //     var name = exampleElement.name;
  // }

  // <button name="somename1" onclick="exampleFunction(this)">Button1</button>
  // <button name="somename2" onclick="exampleFunction(this)">Button2</button>
}

function exampleFunction(exampleElement) {
  let regularpassword = exampleElement.textContent;
  exampleElement.textContent = "Copied Successfully!";
  ////
  // name.textContent = "copied";
  setTimeout(() => {
    exampleElement.textContent = regularpassword;
  }, 1000);
}
