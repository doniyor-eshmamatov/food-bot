import React from 'react'

export default function ProductCardKkeleton() {

    const CartItem = () => {
        return <div className="product-card">
            <div className="line"></div>
            <div className="line-2"></div>
            <div className="line-2"></div>
        </div>
    }

    return (
        <>
            <CartItem/>
            <CartItem/>
            <CartItem/>
            <CartItem/>
            <CartItem/>
        </>
    )
}
