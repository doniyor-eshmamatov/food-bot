import React, { useEffect, useState } from 'react'
import FilterList from '../components/filter-list'
import ProductCard from '../components/product-card'
import Navigation from '../components/navigation'
import { useSelector } from 'react-redux'
import { CSSTransition } from 'react-transition-group'

export default function HomePage({ tele }) {

    const products = useSelector(state => state.products)
    const [showPage, setShowPage] = useState(false);


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
        </CSSTransition>

    )
}
