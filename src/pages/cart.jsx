import React, { useEffect, useState } from 'react'
import Navigation from '../components/navigation'
import CartList from '../components/cart-list'
import { useDispatch, useSelector } from 'react-redux'
import { CSSTransition } from 'react-transition-group'
import { Link } from 'react-router-dom'
import { clearCart } from '../store/reducers'
import NavigationCart from '../components/navigation-cart'

export default function CartPage({ tele }) {
    const cartList = useSelector(state => state.cartList)
    const [showPage, setShowPage] = useState(false);
    const dispatch = useDispatch()


    useEffect(() => {
        setShowPage(true)
    }, [])

    return (
        <CSSTransition
            in={showPage}
            timeout={300}
            classNames="page"
            unmountOnExit
        >
            <div className='cart'>
                <h1 className='cart-title filter-title-h1' style={{ fontSize: 24 }}>
                    <Link style={{ padding: 0 }} className='filter-item filter-item-back' to={'/'}>
                        <svg width="22" height="22" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" fill="#000000"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <title></title> <g id="Complete"> <g id="arrow-left"> <g> <polyline data-name="Right" fill="none" id="Right-2" points="7.6 7 2.5 12 7.6 17" stroke="#000000" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></polyline> <line fill="none" stroke="#000000" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" x1="21.5" x2="4.8" y1="12" y2="12"></line> </g> </g> </g> </g></svg>
                    </Link>
                    <button className='filter-item' onClick={() => dispatch(clearCart())}>Savatni tozalash</button>
                </h1>
                <CartList data={cartList} />
                <div className="navigate-cart">
                    <NavigationCart tele={tele} />
                </div>
            </div>
        </CSSTransition>

    )
}
