/**
 * handles the local storage when the user adds a product to the cart
 * @param {object} product 
 */
function handleLocal(product) {
    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    let item = cart.find((item) => item._id === product._id);

    (item) ? item.quantity++ : cart.push({ ...product, quantity: 1 });
    localStorage.setItem("cart", JSON.stringify(cart));
}

/**
 * handles the local storage when the user wants to see the cart
 * @returns {array} cart
 */
function handleDataLocal() {
    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    return cart
}


/**
 * handles the local storage when the user wants to delete a product from the cart
 * @param {object} product 
 */
function handleDeleteLocal(product) {
    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    cart = cart.filter((item) => item._id !== product._id);
    localStorage.setItem("cart", JSON.stringify(cart));
}


export default handleLocal;
export { handleDataLocal, handleDeleteLocal };