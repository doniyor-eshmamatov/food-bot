import React from 'react'
import { Link } from 'react-router-dom'

export default function NavigationDetail() {
    return (
        <>
            <Link className="navigate-cart-button" to={'/'}>Mahsulotlar</Link >
            <Link className="navigate-cart-button" to={'/cart'}>Savat</Link >
        </>
    )
}
