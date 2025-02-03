"use client"
import React from 'react';
import { useState, useEffect } from 'react';

export default function ProductDetails({ params }) {
    const [product, setProduct] = useState(null);
    useEffect(() => {
        const getProductId = async () => {
            let productParams = await params
            setProduct(productParams.productId)
        }
        getProductId()
    }, [params])


    if (product > 100) return <div>Product {product} not found</div>


    return (
        <div>Product {product}</div>
    )
}
