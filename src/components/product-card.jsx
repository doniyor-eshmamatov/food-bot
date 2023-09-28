import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addToCart, downCart, removeOnCart, upCart } from '../store/reducers'
import { CSSTransition } from 'react-transition-group';
import ConfirmModal from './confirm-modal';

export default function ProductCard({ el }) {
    const [count, setCount] = useState(1)
    const dispatch = useDispatch()
    const cart = useSelector(state => state.cartList)

    function addCart(el) {
        dispatch(addToCart({ ...el, count: 1 }))
    }

    function upCartCount(id, countId) {
        setCount(countId)
        dispatch(upCart({ id: id, count: countId }))
    }


    function downCartCount(id, countId) {
        if (countId > 0) {
            setCount(countId)
            dispatch(downCart({ id: id, count: countId }))
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
            <div className="product-img">
                <img src={el.img} alt="product picture" />
            </div>
            <div className="product-info">
                <p className="product-name">{el.name}</p>
                <p className="product-price">{el.price} so'm</p>
            </div>

            {
                !cart.every(item => item.id !== el.id) ? (
                    <div className="added-cart"><button className="added-to-cart add-down" onClick={() => downCartCount(el.id, count - 1)}>-</button><button className="added-to-cart">{count}</button><button className="added-to-cart add-up" onClick={() => upCartCount(el.id, count + 1)}>+</button ></div >
                ) :
                    <button className="add-to-cart" onClick={() => addCart(el)}>+ Savatga</button>
            }
        </div >
    )
}
