import React from 'react'

export default function ProductCard({ el }) {
    return (
        <div className="product-card">
            <div className="product-img">
                <img src={el.img} alt="product picture" />
            </div>
            <div className="product-info">
                <p className="product-name">{el.name}</p>
                <p className="product-price">{el.price} so'm</p>
            </div>
            <button className="add-to-cart">+ Savatga</button>
            <div className="added-cart"><button className="added-to-cart add-down">-</button><button className="added-to-cart">{0}</button><button className="added-to-cart add-up" >+</button ></div >
        </div >
    )
}
