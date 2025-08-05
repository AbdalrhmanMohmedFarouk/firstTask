var name = prompt("what is your name?");
var birth = prompt("birth year?");
var student = confirm("are you student?");

var year = new Date().getFullYear();
var age = year - birth;

var peronType;
if (age < 13) {
  peronType = "Kid";
} else if (age >= 13 && age <= 17) {
  peronType = "Teen";
} else if (age >= 18 && age <= 59) {
  peronType = "Adult";
} else {
  peronType = "Senior";
}

var msg =
  "Hello " +
  name +
  ", you are " +
  age +
  " years old.\nperonTypeegory: " +
  peronType;
if (student) {
  msg += "\nDon't forget to study hard!";
}

console.log(msg);
alert(msg);
document.getElementById("out").innerText = msg;
