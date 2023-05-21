// Leave the next line, the form must be assigned to a variable named 'form' in order for the exercise test to pass
const form = document.querySelector("form");
const productsContainer = document.querySelector("#list");
form.addEventListener("submit", function (e) {
    e.preventDefault();
    const productInput = form.elements.product;
    const qtyInput = form.elements.qty;
    addProduct(productInput.value, qtyInput.value);
    productInput.value = "";
    qtyInput.value = "";
});

const addProduct = (product, qty) => {
    const newProduct = document.createElement("li");
    const bTag = document.createElement("b");
    productsContainer.appendChild(newProduct);
    newProduct.appendChild(bTag);
    bTag.innerText = `${qty} ${product}`;
};
