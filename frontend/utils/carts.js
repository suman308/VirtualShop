export const getAllCarts = () => {
    return $.ajax({
        url: '/api/carts',
        method: 'GET',

    })
}
export const getCart = (cartId) => {
    return $.ajax({
        url: `/api/carts/${cartId}`,
        method: 'GET'


    })
}
export const getCartProducts = (cartId, userId) => {
    return $.ajax({
        url:'/api/products',
        method: 'GET', 
        data: {cartId: cartId, userId: userId }
    })
}

export const createProduct = (product) => {
    return $.ajax({
        url: `/api/products`,
        method: 'POST',
        data: { product }
    })
}