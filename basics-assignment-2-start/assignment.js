const task3Element = document.getElementById('task-3');

function noParam(){
    alert("Hello There!");
}

function getName(name) {
    alert(`Hi, ${name}!`);
}

getName("Max");

task3Element.addEventListener('click', noParam);

function threeStrings(str1, str2, str3) {
    return str1 + str2 + str3;
}

alert(threeStrings("a", "b", "c"));