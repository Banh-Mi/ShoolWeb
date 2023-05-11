const product = document.querySelector(".product");
sessionStorage.setItem("searchValue", "");
let cartIdList = [];
let products = [];

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
  products = JSON.parse(text);

  products.forEach((productItem) => {
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
                <div class="add mt-auto mb-3" onclick="addCartIdList(${productItem.id})"}>
                    <button>Add</button>
                </div>
            </div>
        `;
  });
});

function setProduct(productId) {
  sessionStorage.setItem("productId", `[${productId}]`);
}
