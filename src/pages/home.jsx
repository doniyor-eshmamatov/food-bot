import React from 'react'
import FilterList from '../components/filter-list'
import ProductCard from '../components/product-card'
import Navigation from '../components/navigation'

export default function HomePage({ tele }) {

    const products = [
        {
            id: 1,
            name: 'Hot Dog',
            price: 15000,
            img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRso-wqNNseGbky7b5syss8oA7AQTbmyhpm2HUt0EpfIpY9kHGsw8T9yxlWb9LMEVuOu4M&usqp=CAU'
        },
        {
            id: 2,
            name: 'Hot Dog',
            price: 18000,
            img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRso-wqNNseGbky7b5syss8oA7AQTbmyhpm2HUt0EpfIpY9kHGsw8T9yxlWb9LMEVuOu4M&usqp=CAU'
        },
        {
            id: 3,
            name: 'Hot Dog',
            price: 18000,
            img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRso-wqNNseGbky7b5syss8oA7AQTbmyhpm2HUt0EpfIpY9kHGsw8T9yxlWb9LMEVuOu4M&usqp=CAU'
        },
        {
            id: 4,
            name: 'Hot Dog',
            price: 18000,
            img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRso-wqNNseGbky7b5syss8oA7AQTbmyhpm2HUt0EpfIpY9kHGsw8T9yxlWb9LMEVuOu4M&usqp=CAU'
        },
        {
            id: 5,
            name: 'Hot Dog',
            price: 18000,
            img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRso-wqNNseGbky7b5syss8oA7AQTbmyhpm2HUt0EpfIpY9kHGsw8T9yxlWb9LMEVuOu4M&usqp=CAU'
        }
    ]

    return (
        <div className="main">
            <FilterList />
            <div className='products'>
                {
                    products.map(el => {
                        return <ProductCard el={el} key={el.id} />
                    })
                }
            </div >
            <div className="navigate-cart">
                <Navigation tele={tele} route={'/cart'} />
            </div>
        </div >
    )
}
