var i = 0;
var txt = 'Hello.  I am Taib Moghadasi, a web developer. Im ...yo And I love the web world very much. I am from Leeds. You can see my portfolio and mastery below :)';
var speed = 100;

function typeWriter() {
  if (i < txt.length) {
    document.getElementById("about-text").innerHTML += txt.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  }

  document.getElementById("html-push").style.width = "90%";
  document.getElementById("html-push").style.transition = "all 1.5s";

  document.getElementById("css-push").style.width = "80%";
  document.getElementById("css-push").style.transition = "all 1.5s";

  document.getElementById("js-push").style.width = "10%";
  document.getElementById("js-push").style.transition = "all 1.5s";

  document.getElementById("node-push").style.width = "5%";
  document.getElementById("node-push").style.transition = "all 1.5s";

  document.getElementById("express-push").style.width = "3%";
  document.getElementById("express-push").style.transition = "all 1.5s";
}