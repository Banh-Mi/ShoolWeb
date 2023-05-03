let cart = document.querySelector(".cart");
let cartEl = document.querySelector(".cart-num");
if (!localStorage.getItem("cartIdList"))
  localStorage.setItem("cartIdList", "[]");
document.querySelector(".cart-num").innerText = JSON.parse(
  localStorage.getItem("cartIdList")
).length;

cart.addEventListener("click", (e) => {
  const check = sessionStorage.getItem("userInfo");
  if (check) {
    window.location.href = "./payment.html";
  } else {
    alert("Đăng nhập để mua hàng");
    window.location.href = "./login.html";
  }
});
