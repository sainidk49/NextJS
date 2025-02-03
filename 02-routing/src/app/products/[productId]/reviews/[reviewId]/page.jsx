"use client"

import React from 'react'
import { useState, useEffect } from 'react'

export default function ReviewDetails({ params }) {
    const [review, setReview] = useState(null)
    const [product, setProduct] = useState(null)

    useEffect(() => {
        const getReview = async () =>{
            const pramaData = await params;
            setProduct(pramaData.productId)
            setReview(pramaData.reviewId)
        }
        getReview()
     }, [params])

    return (
        <div>
            <h1>ReviewDetails</h1>
            <h3>
                Review {review} of product {product}.
            </h3>
        </div>
    )
}