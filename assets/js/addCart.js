document.querySelector(".cart").addEventListener("click", (e) => {
  try {
    localStorage.setItem("listCartId", JSON.stringify(cartIdList));
  } catch (error) {
    let cartIdList = [];
  }
});

const addCartIdList = (id) => {
  if (!localStorage.getItem("cartIdList"))
    localStorage.setItem("cartIdList", "[]");
  const arr = JSON.parse(localStorage.getItem("cartIdList"));
  arr.push(`${id}`);
  localStorage.setItem("cartIdList", JSON.stringify(arr));
  document.querySelector(".cart-num").innerText = localStorage
    .getItem("cartIdList")
    .split(",").length;
};
