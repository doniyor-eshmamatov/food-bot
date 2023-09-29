import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import FilterSkeleton from './skeleton/filter-skeleton'

export default function FilterList() {
    const [categories, setCategories] = useState([])
    const [activeCategory, setActiveCategory] = useState({ name: 'Mahsulotlar' })

    const filterData = useSelector(state => state.categories)

    function filter(active) {
        setActiveCategory(active)
        const newArr = filterData.filter(cat => cat.id !== active.id)
        return setCategories([{ ...active, active: true }, ...newArr])
    }

    useEffect(() => {
        setCategories(filterData)
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
                categories.length > 0 ? <h1 className="filter-title-h1">{activeCategory.name}</h1> : <div className="filter-title-h1 line-2" style={{ width: '60%', height: 32, margin: '20px 0' }}></div>
            }
        </div>
    )
}
