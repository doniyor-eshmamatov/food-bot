import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import FilterSkeleton from './skeleton/filter-skeleton'
import Client from '../api/client'
import API_ENDPOINTS from '../api/api-endpoints'
import { setProducts } from '../store/reducers'

export default function FilterList() {
    const [categories, setCategories] = useState([])
    const [activeCategory, setActiveCategory] = useState(null)

    const filterData = useSelector(state => state.categories)
    const dispatch = useDispatch()

    async function getProducts(category_id) {
        const resp = await Client.get(API_ENDPOINTS.PRODUCT_LIST + `/?category=${category_id}`)
        if (resp.status === 200) {
            dispatch(setProducts(resp.data.results))
        }
    }

    function filter(active) {
        setActiveCategory(active)
        getProducts(active.id)
        const newArr = filterData.filter(cat => cat.id !== active.id)
        return setCategories([{ ...active, active: true }, ...newArr])
    }

    useEffect(() => {
        setCategories(filterData)
        filter(filterData[0])
    }, [filterData])

    return (
        <div className='header'>
            <ul className='filter-list'>
                {
                    categories.length > 0 ? categories.map((el, i) => {
                        return <li onClick={() => filter(el)} key={i} className={el.active == true ? "filter-item  filter-item-active" : "filter-item "}>{el.name}</li>
                    }) : <FilterSkeleton />
                }
            </ul>
            {
                activeCategory ? <h1 className="filter-title-h1">{activeCategory.name}</h1> : <div className="filter-title-h1 line-2" style={{ width: '60%', height: 32, margin: '20px 0' }}></div>
            }
        </div>
    )
}
