import React from 'react'
import { Link } from 'react-router-dom'

export default function Navigation({ tele, route, maintext = "Savat" }) {

    function closeMenu() {
        tele.close()
    }

    return (
        <>
            <Link className="navigate-cart-button" to={route}>{maintext}</Link >
            <button className="navigate-cart-button" onClick={closeMenu}> Menyu yopish</button >
        </>
    )
}
