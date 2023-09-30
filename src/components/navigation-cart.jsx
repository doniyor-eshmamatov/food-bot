import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import useCart from '../utils/hooks/useCart'
import Client from '../api/client'
import { useSelector } from 'react-redux'
import API_ENDPOINTS from '../api/api-endpoints'

export default function NavigationCart({ tele }) {
    const chat_id = useSelector(state => state.me)
    const [id, setId] = useState(null)
    const { cart } = useCart()

    const closeMenu = async () => {
        const data = {
            orders: cart.map(el => ({ product_id: el.id, product_count: el.count })),
            chat_id: id
        }
        console.log(data);
        await Client.post(API_ENDPOINTS.CREATE_CART, data)
            .then(resp => console.log(resp))
            .catch(err => console.log(err))
        tele.close()
    }

    useEffect(() => {
        if (chat_id) {
            setId(chat_id)
        }
    }, [chat_id])

    return (
        <>
            <Link className="navigate-cart-button" to={'/'}>Mahsulotlar</Link >
            <button className="navigate-cart-button" onClick={closeMenu}>To'lov</button >
        </>
    )
}
