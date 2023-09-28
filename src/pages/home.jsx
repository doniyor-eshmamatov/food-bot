import React, { useEffect, useState } from 'react'
import FilterList from '../components/filter-list'
import ProductCard from '../components/product-card'
import Navigation from '../components/navigation'
import { useDispatch, useSelector } from 'react-redux'
import { CSSTransition } from 'react-transition-group'
import Client from '../api/client'
import API_ENDPOINTS from '../api/api-endpoints'
import { setCategories } from '../store/reducers'
import { useLocation } from 'react-router-dom'

export default function HomePage({ tele }) {

    const dispatch = useDispatch()
    const products = useSelector(state => state.products)
    const [showPage, setShowPage] = useState(false);

    const query = useLocation()
    console.log(query);

    async function getCategories() {
        const resp = await Client.get(API_ENDPOINTS.CATEGORIES)
        if (resp.status === 200) {
            dispatch(setCategories(resp.data.results))
        }
    }


    useEffect(() => {
        getCategories()
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
                <h1>{JSON.stringify(query.search)}</h1>

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
