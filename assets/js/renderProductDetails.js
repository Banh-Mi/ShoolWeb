const id = JSON.parse(sessionStorage.getItem("productId"))[0];

const productDetails = document.querySelector(".product_details");

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
  const products = JSON.parse(text);
  product = products.find((product) => {
    return product.id === id;
  });
  console.log(product);
  productDetails.innerHTML += ` 
        <div
        class="image_details col d-flex justify-content-center p-4 align-items-center bg-dark-subtle"
      >
        <img src="${product.productImage}" alt="" width="350px" />
      </div>
      <div class="main_detail col mb-auto">
        <h2 class="title fw-bolder fs-1 text-uppercase">${product.productName}</h2>
        <label class="author fw-light text-uppercase">${product.productAuthor}</label>
        <div class="w-50 my-3">
          <span class="text-decoration-line-through fw-light me-3">${product.productPriceOrigin}</span
          ><span class="text-danger fw-bold fs-2">${product.productPriceCurrent}</span>
        </div>
        <div class="description">
          <div class="fw-bold my-2 ">Description</div>
          ${product.description}
        </div>
        <div class="add" onclick="addCartIdList(${product.id})" }>
          <button class="w-75">
            <i class="bi bi-cart me-2"></i>Add to Cart
          </button>
        </div>
      </div>
    `;
});
