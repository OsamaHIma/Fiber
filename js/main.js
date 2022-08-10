const togglePassword = document.querySelector("#togglePass");
const password = document.querySelector("#password");
const nums = document.querySelectorAll('.num');
const toTop = document.querySelector('.toTop');
const section = document.querySelector('.comments');
let started = false;

window.onscroll = () => {
  //counter
  if(window.scrollY >= section.offsetTop - 600) {
    if(!started) {
      nums.forEach(num => {
        startCount(num)
      });
    }
    started = true;
  };
  //scroll to top
  if (document.body.scrollTop > 620 || document.documentElement.scrollTop > 620) {
    toTop.style.opacity = "1";
    toTop.style.right = "1.3rem";
  } else {
    toTop.style.right = "-100px";
  }
}
//counter
function startCount (el){
  let goal = el.dataset.goal;
  let count = setInterval (() => {
    el.textContent++;
    if (el.textContent === goal) {
      clearInterval(count);
    }
  }, 2500 / goal)
}

// scroll to top on click

function topFunction() {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  })
}

// toggle show password
togglePassword.addEventListener("click",  () => {
  // toggle the type attribute
  const type = password.getAttribute("type") === "password" ? "text" : "password";

  password.setAttribute("type", type);
  // toggle the eye slash icon
  togglePassword.classList.toggle("fa-eye-slash");
});
