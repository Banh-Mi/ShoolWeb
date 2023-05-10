const keyWordSearch = sessionStorage.getItem("searchValue");
const minMaxArr = sessionStorage.getItem("rangePrice")
  ? JSON.parse(sessionStorage.getItem("rangePrice"))
  : null;
const product = document.querySelector(".product");

console.log(minMaxArr);

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

readTextFile("../assets/data/data.json", function (text) {
  let products = JSON.parse(text);
  let productsFilter = null;

  if (minMaxArr) {
    productsFilter = products.filter((item) => {
      return (
        parseInt(item.productPriceCurrent) >= parseInt(minMaxArr[0]) &&
        parseInt(item.productPriceCurrent) <= parseInt(minMaxArr[1])
      );
    });
  }

  products = minMaxArr ? productsFilter : products;
  let n = 0;
  products.forEach((productItem) => {
    if (
      productItem.productName
        .toLowerCase()
        .includes(keyWordSearch.toLowerCase())
    ) {
      n++;
      product.innerHTML += `
        <div class="product-item">
            <div class="product-item-image-wrapper">
                <a 
                href="./product_details.html"
                style="display: block; height: 100%"
                onclick="setProduct(${productItem.id})"
                >
                <img class="product-item-image" src=${productItem.productImage} alt="">
                </a>
            </div>
            <h3 class="product-item-name">${productItem.productName}</h3>
            <h4 class="product-item-author">${productItem.productAuthor}</h4>
            <div class="price">
                <span class="product-item-price-current">${productItem.productPriceCurrent}</span>
                <span class="product-item-price-origin">${productItem.productPriceOrigin}</span>
            </div>
            <div class="add" onclick="addCartIdList(${productItem.id})"}>
                <button>Add</button>
            </div>
        </div>
    `;
    }
  });
  if (n == 0) {
    product.innerHTML = `<div class="mt-5 fw-bold fs-4">Không có sản phẩm nào</div>`;
  }
});

function setProduct(productId) {
  sessionStorage.setItem("productId", `[${productId}]`);
}
