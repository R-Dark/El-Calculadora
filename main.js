//  -----   number buttons value assignments
// let zerobutton = document.getElementById("zero").value
// let onebutton = document.getElementById("one").value
// let twobutton = document.getElementById("two").value
// let threebutton = document.getElementById("three").value
// let fourbutton = document.getElementById("four").value
// let fivebutton = document.getElementById("five").value
// let sixbutton = document.getElementById("six").value
// let sevenbutton = document.getElementById("seven").value
// let eightbutton = document.getElementById("eight").value
// let ninebutton = document.getElementById("nine").value
//  -----   operator buttons value assigments
// let minusbutton = document.getElementById("minus").value
// let plusbutton = document.getElementById("plus").value
// let multiplybutton = document.getElementById("multiply").value
// let dividebutton = document.getElementById("divide").value
// let decimalbutton = document.getElementById("decimal").value
// let clearbutton = document.getElementById("clear").value
// let equalbutton = document.getElementById("equal").value
// ----- display button values into textarea
// document.getElementById("six").addEventListener("click", function(){
//     textarea.innerHTML = sixbutton
// });
//  -----  clear button code
// document.getElementById("clear").addEventListener("click", function(){
//     textarea.innerHTML = ""
// });
//variable that uses querySelectorAll to grab all buttons and puts them into an array
let buttons = document.querySelectorAll(".button")
let textarea = document.getElementById("textarea")
// let equal = document.getElementById("=")
var answer = ""

for (var i = 0; i < buttons.length; i++) {
  let value = buttons[i].value
  buttons[i].addEventListener('click', function() {
    answer += value
    textarea.innerHTML = answer

  })
}



document.getElementById("equal").addEventListener("click", function() {
  final = eval(answer)
  textarea.innerHTML = final
  console.log(this);

});

document.querySelector(".clearbutton").addEventListener("click", function() {
  answer = ""
  textarea.innerHTML = answer
});
