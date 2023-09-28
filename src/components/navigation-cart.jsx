import React from 'react'
import { Link } from 'react-router-dom'

export default function NavigationCart({ tele }) {
    function closeMenu() {
        tele.close()
    }

    return (
        <>
            <Link className="navigate-cart-button" to={'/'}>Mahsulotlar</Link >
            <button className="navigate-cart-button" onClick={closeMenu}>To'lov</button >
        </>
    )
}
