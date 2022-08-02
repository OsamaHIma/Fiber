const togglePassword = document.querySelector("#togglePass");
const password = document.querySelector("#password");
let nums = document.querySelectorAll('.num');
const section = document.querySelector('.comments');
let started = false;

window.onscroll = () => {
  if(window.scrollY >= section.offsetTop - 10) {
    if(!started) {
      nums.forEach(num => {
        startCount(num)
      });
    }
    started = true;
  }
}

function startCount (el) {
  let goal = el.dataset.goal;
  let count = setInterval (() => {
    el.textContent++;
    if (el.textContent === goal) {
      clearInterval(count);
    }
  }, 2500 / goal)
}

togglePassword.addEventListener("click",  () => {
  // toggle the type attribute
  const type = password.getAttribute("type") === "password" ? "text" : "password";

  password.setAttribute("type", type);
  // toggle the eye slash icon
  togglePassword.classList.toggle("fa-eye-slash");
});
