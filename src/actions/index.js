const selectedProduct = product => {
    console.log('producted selected');
    return {
        type: "PRODUCT_SELECTED",
        payload: product
    }
}

export {selectedProduct};