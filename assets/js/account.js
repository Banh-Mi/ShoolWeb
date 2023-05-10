const submit = document.querySelector("input[type='submit']");
const inputPassword = document.querySelector(".form_password input");
const confirmPassword = document.querySelector(".form_confirm-password input");
const error = document.querySelector(".error");
const inputEmail = document.querySelector(".form_email input");
const body = document.querySelector("body").className;
let text = "";
//Lấy danh sách account từ localstorage dạng Json
let accountList = JSON.parse(localStorage.getItem("accountList")) || [];

function checkAccount(password, email) {
  if (!isValidEmail(email)) {
    text = "Invalid email";
    inputEmail.focus();
    return false;
  }

  if (password.length < 8) {
    text = "Password must be more than 8 characters";
    inputPassword.focus();
    return false;
  }

  if (confirmPassword) {
    if (inputPassword.value !== confirmPassword.value) {
      text = "Password re-entered is incorrect";
      confirmPassword.focus();
      return false;
    }
  }
  return true;
}

function isValidEmail(email) {
  const regex =
    /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;
  return regex.test(email);
}

//Kiểm tra đăng nhập
function checkLogin(password, email) {
  const matchingAccount = accountList.find(
    (account) => account.email === email && account.password === password
  );
  if (matchingAccount) {
    //Lưu phiên làm việc hiện tại
    sessionStorage.setItem("userInfo", JSON.stringify({ email, password }));
    window.location.href = `./home.html`;
  } else {
    error.innerHTML = `<i class="bi bi-exclamation-circle"></i>Account is invalid`;
  }
}

//Check đăng ký
function checkRegister(password, email) {
  const matchingAccount = accountList.find(
    (account) => account.email === email
  );
  if (!matchingAccount) {
    const newLogin = { password, email };
    accountList.push(newLogin);
    localStorage.setItem("accountList", JSON.stringify(accountList));
    window.location.href = "./login.html";
  } else {
    error.innerHTML = `<i class="bi bi-exclamation-circle"></i>Account already exists`;
  }
}

submit.addEventListener("click", (e) => {
  e.preventDefault();
  if (!checkAccount(inputPassword.value, inputEmail.value)) {
    error.innerHTML = `<i class="bi bi-exclamation-circle"></i
    >${text}`;
  } else if (body === "register") {
    checkRegister(inputPassword.value, inputEmail.value);
  } else if (body === "login") {
    checkLogin(inputPassword.value, inputEmail.value);
  }
});
