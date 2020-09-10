export const getCartItems = ()=> {
    return $.ajax({
        url: '/api/carts', 
        method: 'GET', 
        
    })
}
export const getCartItems = (cartID)=> {
    return $.ajax({
        url: `/api/carts/${cartID}`,
        method: 'GET'
        

    })
}
export const getCartItems = (cartID)=> {
    return $.ajax({
        url: `/api/carts/${cartID}`,
        method: 'GET'


    })
}