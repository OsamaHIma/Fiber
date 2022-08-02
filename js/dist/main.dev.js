"use strict";

var togglePassword = document.querySelector("#togglePass");
var password = document.querySelector("#password");
var nums = document.querySelectorAll('.num');
var section = document.querySelector('.comments');
var started = false;

window.onscroll = function () {
  if (window.scrollY >= section.offsetTop - 150) {
    if (!started) {
      nums.forEach(function (num) {
        startCount(num);
      });
    }

    started = true;
  }
};

function startCount(el) {
  var goal = el.dataset.goal;
  var count = setInterval(function () {
    el.textContent++;

    if (el.textContent === goal) {
      clearInterval(count);
    }
  }, 2500 / goal);
}

togglePassword.addEventListener("click", function () {
  // toggle the type attribute
  var type = password.getAttribute("type") === "password" ? "text" : "password";
  password.setAttribute("type", type); // toggle the eye slash icon

  togglePassword.classList.toggle("fa-eye-slash");
});