import React from 'react'

const ProductReview = async ({params}: {
    params: Promise<{productId: string, reviewId: string}>
}) => {
    const{ productId, reviewId } = await params
    return (
        <div>Review {reviewId} for product {productId}.</div>
    )
}

export default ProductReview