import React, { useEffect, useState } from 'react'
import Navigation from '../components/navigation'
import CartList from '../components/cart-list'
import { useSelector } from 'react-redux'
import { CSSTransition } from 'react-transition-group'

export default function CartPage({ tele }) {
    const cartList = useSelector(state => state.cartList)
    const [showPage, setShowPage] = useState(false);


    useEffect(() => {
        setShowPage(true)
    }, [])
    console.log(cartList);
    return (
        <CSSTransition
            in={showPage}
            timeout={300}
            classNames="page"
            unmountOnExit
        >
            <div className='cart'>
                <h1 className='cart-title filter-title-h1' style={{ fontSize: 24 }}>Savatdagi mahsulotlar</h1>
                <CartList data={cartList} />
                <div className="navigate-cart">
                    <Navigation route="/" tele={tele} maintext="Mahsulotlar" />
                </div>
            </div>
        </CSSTransition>

    )
}
