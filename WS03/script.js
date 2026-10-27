// Exercise 1
function showTable() {
  let animal1 = "Tiger";
  let habitat1 = "Forest";
  let diet1 = "Carnivore";

  let animal2 = "Elephant";
  let habitat2 = "Savanna";
  let diet2 = "Herbivore";

  let table = `
    <table>
      <tr>
        <th>Animal</th>
        <th>Habitat</th>
        <th>Diet</th>
      </tr>
      <tr>
        <td>${animal1}</td>
        <td>${habitat1}</td>
        <td>${diet1}</td>
      </tr>
      <tr>
        <td>${animal2}</td>
        <td>${habitat2}</td>
        <td>${diet2}</td>
      </tr>
    </table>
  `;

  document.querySelector("#tableContainer").innerHTML = table;
}

// Exercise 2
let exercise2 = document.querySelector("#exercise2");
exercise2.addEventListener("mouseover", function() {
  console.log("Stepped over me with a mouse!");
});

let exercise1 = document.querySelector("#exercise1");
exercise1.addEventListener("click", function() {
  exercise1.style.color = "red";
  exercise1.innerHTML = "Bye bye mouse!";
});

// Exercise 3
let feedback = document.querySelector("#feedback");
let statusText = document.querySelector("#status");
let charcount = document.querySelector("#charcount");
let preview = document.querySelector("#preview");

feedback.addEventListener("focus", function() {
  statusText.innerHTML = "You can write your feedback now.";
  feedback.style.backgroundColor = "lightyellow";
});

feedback.addEventListener("blur", function() {
  statusText.innerHTML = "";
  feedback.style.backgroundColor = "white";
});

feedback.addEventListener("input", function() {
  charcount.innerHTML = feedback.value.length + "/200";
  preview.innerHTML = feedback.value || "(The preview will appear here)";
});

// Exercise 4
let form = document.querySelector("#feedbackForm");
form.addEventListener("submit", function(event) {
  event.preventDefault();

  let length = feedback.value.length;

  if (length < 10 || length > 200) {
    statusText.innerHTML = "Feedback must be between 10 and 200 characters.";
    statusText.className = "error";
  } else {
    feedback.value = "";
    charcount.innerHTML = "0/200";
    preview.innerHTML = "(The preview will appear here)";
    statusText.innerHTML = "Thank you for your feedback!";
    statusText.className = "success";
  }
});

// Exercise 5
let keybox = document.querySelector("#keybox");
let keyinfo = document.querySelector("#keyinfo");
let keycount = document.querySelector("#keycount");
let modifiers = document.querySelector("#modifiers");
let count = 0;

document.addEventListener("keydown", function(event) {
  console.log(event);

  count++;
  keybox.innerHTML = event.key;
  keyinfo.innerHTML = "Key: " + event.key + " | Code: " + event.code;
  keycount.innerHTML = count;

  let keys = [];
  if (event.shiftKey) keys.push("Shift");
  if (event.ctrlKey) keys.push("Ctrl");
  if (event.altKey) keys.push("Alt");

  if (keys.length > 0) {
    modifiers.innerHTML = keys.join(", ");
  } else {
    modifiers.innerHTML = "None";
  }

  let colors = ["lightblue", "lightgreen", "lightpink", "lightyellow"];
  document.body.style.backgroundColor = colors[count % colors.length];
});
