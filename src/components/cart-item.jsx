import React from 'react'

export default function CartItem({ el }) {
  return (
    <div className='cart-item'>
      <img className='cart-item-img' src={el.img} width={70}/>
      <div className='cart-item-info'>
        <p className='cart-item-title'>{el.name}</p>
        <p className='cart-item-count'>{el.count} dona</p>
      </div>
      <div className='cart-item-action'>
        <p className='cart-item-ptice'>{el.price * el.count} so'm</p>
        <button className="add-to-cart cart-item-remove" onClick={() => addCart(el)}>O'chirish</button>
      </div>
    </div>
  )
}
