import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import ConfirmModal from './confirm-modal'
import { CSSTransition } from 'react-transition-group'
import useCart from '../utils/hooks/useCart'

export default function CartItem({ el }) {

  const [count, setCount] = useState(1)
  const [deleteId, setDeleteId] = useState(null)
  const [showModal, setShowModal] = useState(true);

  const cart = useSelector(state => state.cartList)


  const { upCartCount, downCartCount, removeInCart } = useCart()

  const handleUp = (id, countId) => {
    setCount(countId)
    upCartCount(id, countId)
  }


  function handleDown(id, countId) {
    if (countId > 0) {
      setCount(countId)
      downCartCount(id, countId)
    } else {
      setDeleteId(id)
      setShowModal(false)
    }
  }


  function onSuccess() {
    removeInCart(deleteId)
    setShowModal(true)
  }

  function onCancel() {
    setShowModal(true)
  }

  useEffect(() => {
    if (cart) {
      const item = cart.find(ff => ff.id === el.id)
      if (item) {
        setCount(item.count)
      }
    }
  }, [])

  return (
    <div className='cart-item'>
      <div className='cart-item-img'>
        <img className='' src={el.image} />
      </div>
      <div className='cart-item-info'>
        <p className='cart-item-title'>{el.name}</p>
        <p className='cart-item-count'>Umumiy {el.price * el.count} so'm</p>
      </div>
      <div className='cart-item-action'>
        <button className="added-to-cart">{count}</button>
        <div className="added-cart"><button style={{ color: "#000" }} className="added-to-cart add-down" onClick={() => handleDown(el.id, count - 1)}>-</button><button style={{ color: "#000" }} className="added-to-cart add-up" onClick={() => handleUp(el.id, count + 1)}>+</button ></div >
      </div>

      <CSSTransition
        in={!showModal}
        timeout={300}
        classNames="page"
        unmountOnExit
      >
        <ConfirmModal onSuccess={onSuccess} onCancel={onCancel} isOpen={!showModal} />
      </CSSTransition>
    </div>
  )
}
