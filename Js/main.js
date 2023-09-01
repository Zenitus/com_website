// Get the button:
let mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}

document.getElementById("homesec").onclick = function () {
  location.href = "#home";
};
document.getElementById("aboutussec").onclick = function () {
  location.href = "#about";
};
document.getElementById("servicesec").onclick = function () {
  location.href = "#service";
};
document.getElementById("technologysec").onclick = function () {
  location.href = "#technology";
};

document.getElementById("careersec").onclick = function () {
  location.href = "#career";
};
document.getElementById("contactsec").onclick = function () {
  location.href = "#contact";
};
