const task3Element = document.getElementById("task-3");

function greet() {
  alert("Hi there!!");
}

function greetUser(name) {
  alert("Hi " + name + "!!");
}

function combine(str1, str2, str3) {
  alert(str1 + " " + str2 + " " + str3);
}

greetUser("Max");

combine("Hi", "there,", "Max!!");

task3Element.addEventListener("click", greet);
