const btnSearch = document.querySelector(".search_icons");
const search_input = document.getElementById("search_input");

btnSearch.addEventListener("click", () => {
  if (!btnSearch.classList.contains("active_input")) {
    search_input.style.display = "block";
    search_input.style.transform = "scale(1)";
    btnSearch.classList.add("active_input");
    search_input.focus();
    btnSearch.classList.add("bi-x-lg");
    btnSearch.classList.remove("bi-search");
  } else {
    if (search_input.value != "") {
        sessionStorage.setItem("searchValue", search_input.value);
        window.location.href = './search_product_page.html'
      //Code
    } else {
      search_input.style.display = "none";
      search_input.style.transform = "scale(0)";
      btnSearch.classList.remove("active_input");
      btnSearch.classList.add("bi-search");
      btnSearch.classList.remove("bi-x-lg");
    }
  }
});

search_input.addEventListener("keydown", (e) => {
    if(e.key === "Enter") {
        sessionStorage.setItem("searchValue", search_input.value);
        window.location.href = './search_product_page.html'
    }
});

search_input.addEventListener("input", () => {
  if (search_input.value != "") {
    btnSearch.classList.add("bi-search");
    btnSearch.classList.remove("bi-x-lg");
  } else {
    btnSearch.classList.add("bi-x-lg");
    btnSearch.classList.remove("bi-search");
  }
});
