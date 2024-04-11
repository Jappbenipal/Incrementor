// INCREMENTING VARIABLES & RANDOM VALUES
let counter = 0;

// 1. Saving elements as variables cleans up your code.
var displayEl = document.getElementById("display");
var plus1Btn = document.getElementById("plus1");
var minus10Btn = document.getElementById("minus10");
var stringInEl = document.getElementById("strIn");
var stringOutEl = document.getElementById("strOut");
var minus1Btn = document.getElementById("minus1");
var minus50Btn = document.getElementById("minus50");
var plus10Btn = document.getElementById("plus10");
var plus50Btn = document.getElementById("plus50");
// 2. Incrementing. The ++, --, +=, and -= operators are used to update variables without losing what was there before
document.getElementById("plus1").addEventListener("click", add1);
minus10Btn.addEventListener("click", sub10);
minus1Btn.addEventListener("click", sub1);
minus50Btn.addEventListener("click", sub50);
plus10Btn.addEventListener("click", plus10);
plus50Btn.addEventListener("click", plus50);

function add1() {
  counter++;
  displayEl.innerHTML = counter;
}

function sub1() {
  counter = counter - 1;
  displayEl.innerHTML = counter;
}

function sub10() {
  counter = counter - 10;
  displayEl.innerHTML = counter;
}

function sub50() {
  counter = counter - 50;
  displayEl.innerHTML = counter;
}

function plus10() {
  counter = counter + 10;
  displayEl.innerHTML = counter;
}

function plus50() {
  counter = counter + 50;
  displayEl.innerHTML = counter;
}
// 3. The += operator also works to update strings. Also, the "change" event can remove the need for buttons!
stringInEl.addEventListener("change", updateStory);
var story = "Once upon a time, ";
function updateStory() {
  var newWord = stringInEl.value;

  stringInEl.value = ""; // clears the input

  story += newWord + " ";

  stringOutEl.innerHTML = story;
}

// 4. Math.random() is used to bring RNG (random number generator) to your applications.
var rand1Btn = document.getElementById("rand1");
var rand2Btn = document.getElementById("rand2");
var rand3Btn = document.getElementById("rand3");
var rand1OutEl = document.getElementById("rand1-out");
var rand2OutEl = document.getElementById("rand2-out");
var rand3OutEl = document.getElementById("rand3-out");
var randomsize = document.getElementById("random-size");
var randomcolor = document.getElementById("random-rgb");
var reset = document.getElementById("reset");

rand1Btn.addEventListener("click", showRand1);
rand2Btn.addEventListener("click", showRand2);
rand3Btn.addEventListener("click", showRand3);
randomsize.addEventListener("click", showRandomsize);
randomcolor.addEventListener("click", showRandomcolor);
reset.addEventListener("click", showReset);

function showRand1() {
  var rand = Math.random();
  rand = rand.toFixed(3);
  rand1OutEl.innerHTML = rand;
}

function showRand2() {
  var rand = Math.random() * 100;
  rand = rand.toFixed();
  rand2OutEl.innerHTML = rand;
}

function showRand3() {
  var rand = Math.random() * 10 - 5;
  rand = rand.toFixed();
  rand3OutEl.innerHTML = rand;
}

function showRandomsize() {
  var rand = Math.random() * 30 - 5;
  rand = rand.toFixed();
  console.log(rand);
  document.getElementById("paragraph").style.fontSize = `${rand}px`;
}

function showRandomcolor() {
  var rand = Math.random() * 3;
  rand = rand.toFixed;
  console.log(rand);
  var rgbString = `rgb(34,245,128)`;
  document.getElementById("HTML").style.background = rgbString;
}

function reset() {
  var rand = Math.random();
  rand = rand.toFixed;
  console.log(rand);
}
