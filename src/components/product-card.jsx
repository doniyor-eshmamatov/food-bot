import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom';
import useCart from '../utils/hooks/useCart';

export default function ProductCard({ el }) {
    const [count, setCount] = useState(1)
    const cart = useSelector(state => state.cartList)
    const navigate = useNavigate()

    const { addCart, upCartCount, downCartCount } = useCart()

    const handleAdd = (el) => addCart({ ...el, count: 1 })

    const handleUp = (id, countId) => {
        setCount(countId)
        upCartCount(id, countId)
    }


    function handleDown(id, countId) {
        if (countId > 0) {
            setCount(countId)
            downCartCount(id, countId)
        }
    }

    useEffect(() => {
        if (cart) {
            const item = cart.find(ff => ff.id === el.id)
            if (item) {
                setCount(item.count)
            }
        }
    }, [])

    return (
        <div className="product-card">
            <div className="product-img" onClick={() => navigate(`/detail/${el.id}`)}>
                <img src={el.image} alt="product picture" />
            </div>
            <div className="product-info" onClick={() => navigate(`/detail/${el.id}`)}>
                <p className="product-name">{el.name}</p>
                <p className="product-price">{el.price} so'm</p>
            </div>

            {
                !cart.every(item => item.id !== el.id) ? (
                    <div className="added-cart"><button className="added-to-cart add-down" onClick={() => handleDown(el.id, count - 1)}>-</button><button className="added-to-cart">{count}</button><button className="added-to-cart add-up" onClick={() => handleUp(el.id, count + 1)}>+</button ></div >
                ) :
                    <button className="add-to-cart" onClick={() => handleAdd(el)}>+ Savatga</button>
            }
        </div >
    )
}
