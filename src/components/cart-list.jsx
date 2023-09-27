import React from 'react'
import CartItem from './cart-item'

export default function CartList({ data }) {
    return (
        <div className='cart-list'>
            {
                data.map(el => <CartItem el={el} key={el.id}/>)
            }
        </div>
    )
}
