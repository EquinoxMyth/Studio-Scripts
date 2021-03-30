////color  changer/////

var startup = alert('Loaded SkyWasTaken"s Div Color Changer');
var warnup = alert('Inputing rainbow will loop a rainbow effect refresh to stop');
var mouse = prompt("Custom Mouse Url", "")
var colors = prompt("Div Color Changer || Leave Blank To Revert Color", "black");

if(colors == "rainbow") {
var incrementingNum = 0;
var colorsr = ["red", "orange", "yellow", "green", "blue", "purple", "pink"];
setInterval(function() {
  if (incrementingNum >= 6) {
    incrementingNum = 0;
  } else {
    incrementingNum++;
  }
  var div = document.querySelectorAll("div");
  for (let i = 0; i < div.length; i++) {
    div[i].style.backgroundColor = colorsr[incrementingNum];
    div[i].style.transition = "background-color 1s";
  }
}, 1000);

}
else {
 var div = document.querySelectorAll("div");
  for (let i = 0; i < div.length; i++) {
    div[i].style.backgroundColor = colors;
    div[i].style.transition = "background-color 1s";
}



var css = `
html, body {
	cursor: url(mouse), auto;
}`
var style = document.createElement("style");
style.innerHTML = css;
document.head.appendChild(style);


var css = `
@keyframes roll {
  100%{
    transform:rotate(360deg)
  }
}
body {
  animation-name: roll;
  animation-duration: 7s;
  animation-iteration-count: 1;
}
`
var style = document.createElement("style");
style.innerHTML = css;
document.head.appendChild(style);
}

////////////////////////////
