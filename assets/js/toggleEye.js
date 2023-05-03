const iconEye = document.querySelector(".form_password .bi");
const pswInput = document.querySelector(".form_password input");
const iconEyeConfirm = document.querySelector(".form_confirm-password .bi");
const formConfirmPasswordInput = document.querySelector(
  ".form_confirm-password input"
);

function togglePasswordVisibility(icon, input) {
  if (icon.classList[1] === "bi-eye-fill") {
    icon.classList.remove("bi-eye-fill");
    icon.classList.add("bi-eye-slash-fill");
    input.setAttribute("type", "password");
  } else {
    icon.classList.add("bi-eye-fill");
    icon.classList.remove("bi-eye-slash-fill");
    input.setAttribute("type", "text");
  }
}

iconEye.addEventListener("click", function () {
  togglePasswordVisibility(iconEye, pswInput);
});

if (iconEyeConfirm !== null) {
  iconEyeConfirm.addEventListener("click", function () {
    togglePasswordVisibility(iconEyeConfirm, formConfirmPasswordInput);
  });
}

// const iconEye = document.querySelector('.form_password .bi');
// const pswInput = document.querySelector('.form_password input');

// const iconEyeConfirm = document.querySelector('.form_confirm-password .form_password .bi');
// const formConfirmPasswordInput = document.querySelector('.form_confirm-password .form_password input');

// iconEye.addEventListener('click', function() {
//     if(iconEye.classList[1] === 'bi-eye-fill') {
//         iconEye.classList.remove('bi-eye-fill');
//         iconEye.classList.add('bi-eye-slash-fill');
//         pswInput.setAttribute('type', 'password');
//     } else {
//         iconEye.classList.add('bi-eye-fill');
//         iconEye.classList.remove('bi-eye-slash-fill');
//         pswInput.setAttribute('type', 'text');
//     }
// })

// if(iconEyeConfirm !== null) {
//     iconEyeConfirm.addEventListener('click', function() {
//         if(iconEyeConfirm.classList[1] === 'bi-eye-fill') {
//             iconEyeConfirm.classList.remove('bi-eye-fill');
//             iconEyeConfirm.classList.add('bi-eye-slash-fill');
//             formConfirmPasswordInput.setAttribute('type', 'password');
//         } else {
//             iconEyeConfirm.classList.add('bi-eye-fill');
//             iconEyeConfirm.classList.remove('bi-eye-slash-fill');
//             formConfirmPasswordInput.setAttribute('type', 'text');
//         }
//     })
// }
