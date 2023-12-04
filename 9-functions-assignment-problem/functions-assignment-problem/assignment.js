//Task 1
const sayHello1 = (name) => console.log("Hi " + name);

//Task 2 & 3
const sayHello2 = (name, phrase = "Hello") => console.log(phrase + " " + name);
const sayHello3 = () => console.log("Hello Max");
const sayHello4 = (name) => "Hi " + name;

sayHello1("Max");
sayHello2("Max", "Hi There");
sayHello3();
console.log(sayHello4("Max"));

//Task 3
sayHello2("Max");

function checkInput(cb, ...strings) {
  let hasEmptyText = false;
  for (const text of strings) {
    if (!text) {
      hasEmptyText = true;
      break;
    }
  }
  if (!hasEmptyText) {
    cb();
  }
}

checkInput(
  () => {
    console.log("All not empty!");
  },
  "Hello",
  "12",
  "augvw",
  "Not empty"
);
