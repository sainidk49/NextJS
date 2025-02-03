"use client"

import React, { useEffect, useState } from 'react'
import { notFound } from 'next/navigation'

export default function ProductDetailsPage({ params }: {
    params: {
        productId: string
    }
}) {

    const [product, setProduct] = useState<string | null>(null)
    useEffect(() => {
        const getProduct = async () => {
            const paramsData = await params;
            setProduct(paramsData.productId)
        }
        getProduct()
    }, [params])

    if (product && parseInt(product) > 100)  {
        notFound()
        return null
    }

    return (
        <>
            <div>Product Details Page</div>
            <h3>
                product {product}
            </h3>
        </>
    )
}
