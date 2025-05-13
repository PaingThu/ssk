import React from 'react'

const ProductDetails = async ({params}: {
    params: Promise<{productId: string}>
}) => {
    const productId = (await params).productId
    return (
        <div>Product {productId} Details</div>
    )
}

export default ProductDetails