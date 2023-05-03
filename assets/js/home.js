if (sessionStorage.getItem("userInfo") === null) {
  document.querySelector(
    ".function"
  ).innerHTML = `<div class="sign"><a href="./login.html">Sign in</a></div>
  <div class="regis active"><a href="./register.html">Register</a></div>`;
} else {
  document.querySelector(".function").innerHTML = `<a href="#" class="avatar"
  ><img src="../assets/icons/avatar.png" alt=""
/></a>
<ul class="dropdown_func">
  <li>
    <a class="profile" href="#"
      >Profile<i class="bi bi-person"></i
    ></a>
  </li>
  <li>
    <a class="edit_profile" href="#"
      >Edit profile<i class="bi bi-pencil-square"></i
    ></a>
  </li>
  <li class ="sign_out">
    <a href="#"
      >Sign out<i class="bi bi-box-arrow-right"></i
    ></a>
  </li>
</ul>`;
  document.querySelector(".sign_out").addEventListener("click", (e) => {
    sessionStorage.removeItem("userInfo");
    location.reload();
  });
}
