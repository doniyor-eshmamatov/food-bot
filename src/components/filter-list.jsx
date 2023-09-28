import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'

export default function FilterList() {
    const [categories, setCategories] = useState(null)
    const [activeCategory, setActiveCategory] = useState({name: 'Mahsulotlar'})

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
                    categories ? categories.map((el, i) => {
                        return <li onClick={() => filter(el)} key={i} className={el.active == true ? "filter-item  filter-item-active" : "filter-item "}>{el.name}</li>
                    }) : <p>Loading...</p>
                }
            </ul>
            <h1 className="filter-title-h1">{activeCategory.name}</h1>
        </div>
    )
}
