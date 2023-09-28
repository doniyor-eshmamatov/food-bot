import React from 'react'
import CartItem from './cart-item'

export default function CartList({ data }) {
    return (
        <div className='cart-list'>
            {
                data.length > 0 ?
                data.map(el => <CartItem el={el} key={el.id}/>) :
                <p className='cart-empty-text'>Savat bo'sh</p>
            }
        </div>
    )
}
