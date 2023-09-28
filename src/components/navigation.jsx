import React from 'react'
import { Link } from 'react-router-dom'

export default function Navigation({ route, maintext = "Savat" }) {

    const tele = window.Telegram.WebApp
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
