const email = document.getElementById("email");
const password = document.getElementById("password");
const sumbitBtn = document.getElementById("button");
const emailPreview = document.getElementById("emailpreview");
const passwordPreview = document.getElementById("passwordpreview");
const emailregex =
  /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;
const passwordregex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/;

sumbitBtn.addEventListener("click", (e) => {
  e.preventDefault();
  const emailValue = email.value;
  const passwordValue = password.value;
  console.log(emailValue, passwordValue);

  if (emailValue === "") {
    emailPreview.textContent = "❌ Email is required";
  } else if (!emailregex.test(emailValue)) {
    emailPreview.textContent = "❌ Invalid email format";
  } else {
    emailPreview.textContent = "✅ Valid email";
  }

  if (passwordValue === "") {
    passwordPreview.textContent = "❌ Password is required";
  } else if (!passwordregex.test(passwordValue)) {
    passwordPreview.textContent =
      "❌ Password is invalid";
  } else {
    passwordPreview.textContent = "✅ Strong password";
  }
});
