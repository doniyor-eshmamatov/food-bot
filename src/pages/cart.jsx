import React from 'react'
import Navigation from '../components/navigation'

export default function CartPage({ tele }) {
    return (
        <div>CartPage
            <div className="navigate-cart">
                <Navigation roite="/" tele={tele} />
            </div>
        </div>
    )
}
