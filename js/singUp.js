const togglePassword = document.querySelector("#togglePass");
const password = document.querySelector("#password");

togglePassword.addEventListener("click",  () => {
  // toggle the type attribute
  const type = password.getAttribute("type") === "password" ? "text" : "password";

  password.setAttribute("type", type);
  // toggle the eye slash icon
  togglePassword.classList.toggle("fa-eye-slash");
});
