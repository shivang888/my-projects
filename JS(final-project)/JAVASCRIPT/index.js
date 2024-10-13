const addTOCart = document.querySelectorAll(".add-to-cart");
const count = document.querySelector("#count")

// Data Parse form localStorage
function filter(catagory, name, price, img) {
    let basket = JSON.parse(localStorage.getItem("data")) || [];

    let data = {
        catagory: catagory,
        name: name,
        price: price,
        img: img
    }
    basket.push(data);
    localStorage.setItem("data", JSON.stringify(basket));


}
function updatDataCount () {
    let basket = JSON.parse(localStorage.getItem("data")) || [];
    count.innerText = basket.length;
}

updatDataCount();