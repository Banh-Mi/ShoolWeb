const tablePayment = document.querySelector(".table_payment");
let productsFilter = [];
let idProduct = [...new Set(JSON.parse(localStorage.getItem("cartIdList")))];
const book = {};
JSON.parse(localStorage.getItem("cartIdList")).forEach((item) => {
  if (book[item] === undefined) book[item] = 0;
  book[item]++;
});

function readTextFile(file, callback) {
  var rawFile = new XMLHttpRequest();
  rawFile.overrideMimeType("application/json");
  rawFile.open("GET", file, true);
  rawFile.onreadystatechange = function () {
    if (rawFile.readyState === 4 && rawFile.status == "200") {
      callback(rawFile.responseText);
    }
  };
  rawFile.send(null);
}

let sumPrice = 0;

readTextFile("../assets/data/data.json", function (text) {
  products = JSON.parse(text);
  productsFilter = products.filter((product) => {
    return idProduct.includes(product.id.toString());
  });

  productsFilter.forEach((product) => {
    let price = parseInt(product.productPriceCurrent.replace("$", ""));
    let pricePay = book[product.id] * price;
    sumPrice += pricePay;
    tablePayment.innerHTML += `
    <div
    class="d-flex justify-content-center align-items-center w-75 border-bottom p-3"
  >
    <div><img src="${product.productImage}" width="100" /></div>
    <div class="ms-5 fs-5" style="width:300px">
      <div class=" fs-5">${product.productName}</div>
      <div class="d-inline-block fw-bold mt-5">${
        product.productPriceCurrent
      }</div>
      <span class="text-decoration-line-through ms-3">${
        product.productPriceOrigin
      }</span>
    </div>
    <div class="fs-5 mx-auto text-center" style="width:150px">${
      book[product.id]
    }</div>
    <div class=" fs-5 fw-bold text-center text-danger" style="width:150px">${pricePay}$</div>
  </div>
    `;
  });

  document.querySelector(".sum_price").innerHTML = `Tổng tiền:  ${sumPrice}$`;
});

document.querySelector(".del").addEventListener("click", (e) => {
  localStorage.setItem("cartIdList", []);
  location.reload();
});
