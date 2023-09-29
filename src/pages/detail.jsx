import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom';
import { CSSTransition } from 'react-transition-group';
import DetailSkeleton from '../components/skeleton/detail-skeleton';
import Client from '../api/client';
import API_ENDPOINTS from '../api/api-endpoints';
import NavigationDetail from '../components/navigation-detail';
import { useSelector } from 'react-redux';
import useCart from '../utils/hooks/useCart';

export default function DetailPage() {

  const route = useParams()
  const [showPage, setShowPage] = useState(false);
  const [data, setData] = useState(false);
  const [count, setCount] = useState(1);
  const { id } = route
  const cart = useSelector(state => state.cartList)

  const { addCart, upCartCount, downCartCount } = useCart()

  const getData = async (id) => {
    await Client.get(API_ENDPOINTS.PRODUCT_LIST + `${id}`)
      .then(resp => setData(resp.data))
      .catch(err => console.log(err))
  }

  const handleAdd = () => {
    addCart(data)
  }

  const handleUp = (id, countId) => {
    setCount(countId)
    upCartCount(id, countId)
  }


  function handleDown(id, countId) {
    if (countId > 0) {
      setCount(countId)
      downCartCount(id, countId)
    }
  }

  const cardStyles = { width: '100%', height: 250, margin: 0, marginRight: 10, borderRadius: 12, marginTop: 10 }


  useEffect(() => {
    setShowPage(true)
    if (id) {
      getData(id)
    }
  }, [])

  return (
    <CSSTransition
      in={showPage}
      timeout={300}
      classNames="page"
      unmountOnExit
    >
      <div className="main">
        <Link style={{ padding: '4px 0', width: 100 }} className='filter-item filter-item-back' to={'/'}>
          <svg width="22" height="22" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" fill="#000000"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <title></title> <g id="Complete"> <g id="arrow-left"> <g> <polyline data-name="Right" fill="none" id="Right-2" points="7.6 7 2.5 12 7.6 17" stroke="#000000" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></polyline> <line fill="none" stroke="#000000" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" x1="21.5" x2="4.8" y1="12" y2="12"></line> </g> </g> </g> </g></svg>
        </Link>
        {
          data ? <div className="product-card">
            <div className="product-img-img" style={cardStyles}>
              <img src={data.image} alt="product picture" />
            </div>
            <div className="detail-info">
              <p className="detail-name">{data.name}</p>
              <p className="detail-price">{data.price} so'm</p>
            </div>

            {
              !cart.every(item => item.id !== data.id) ? (
                <div className="added-cart"><button className="added-to-cart add-down" onClick={() => handleDown(data.id, count - 1)}>-</button><button className="added-to-cart">{count}</button><button className="added-to-cart add-up" onClick={() => handleUp(data.id, count + 1)}>+</button ></div >
              ) :
                <button className="add-to-cart" onClick={() => handleAdd(data)}>+ Savatga</button>
            }
          </div > : <DetailSkeleton />
        }

        <div className="navigate-cart">
          <NavigationDetail />
        </div>
      </div >
    </CSSTransition>
  )
}
