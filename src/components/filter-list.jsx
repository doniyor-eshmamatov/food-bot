import React, { useEffect, useState } from 'react'

export default function FilterList() {
    const [categories, setCategories] = useState([])
    const [activeCategory, setActiveCategory] = useState({name: 'Mahsulotlar'})

    const filterData = [
        // {
        //     id: 0,
        //     name: 'Barchasi',
        //     active: true
        // },
        {
            id: 1,
            name: 'Hot Dog',
            active: false
        },
        {
            id: 2,
            name: 'Combo',
            active: false
        },
        {
            id: 3,
            name: 'Palov',
            active: false
        },
        {
            id: 4,
            name: 'Lavash',
            active: false
        },
        {
            id: 5,
            name: 'Burger',
            active: false
        }
    ]

    function filter(active) {
        setActiveCategory(active)
        const newArr = filterData.filter(cat => cat.id !== active.id)
        return setCategories([{ ...active, active: true }, ...newArr])
    }

    useEffect(() => {
        setCategories(filterData)
    }, [])

    return (
        <div className='header'>
            <ul className='filter-list'>
                {
                    categories.map((el, i) => {
                        return <li onClick={() => filter(el)} key={i} className={el.active == true ? "filter-item  filter-item-active" : "filter-item "}>{el.name}</li>
                    })
                }
            </ul>
            <h1 className="filter-title-h1">{activeCategory.name}</h1>
        </div>
    )
}
