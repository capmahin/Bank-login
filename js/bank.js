// login form
document.getElementById("login-submit").addEventListener("click", function () {
  const emailField = document.getElementById("user-email");
  const userEmail = emailField.value;
  //get user Password Section
  const passwordField = document.getElementById("user-password");
  const userPassword = passwordField.value;
  //if condition add for new page
  if (userEmail == "dhoom@hellow" && userPassword == "who") {
    window.location.href = "banking.html";
  }
});
