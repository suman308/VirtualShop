export const getAllRatings = (Id) => {
    return $.ajax({
        url: '/api/ratings',
        method: 'GET',
        data: { productId: Id }

    })
}
export const getRating = (ratingId) => {
    return $.ajax({
        url: `/api/ratings/${ratingId}`,
        method: 'GET'


    })
}
export const createRating = (rating) => {
    return $.ajax({
        url: '/api/ratings',
        method: 'POST',
        data: { rating }
    })
}



