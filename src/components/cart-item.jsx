import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { downCart, removeOnCart, upCart } from '../store/reducers'
import ConfirmModal from './confirm-modal'
import { CSSTransition } from 'react-transition-group'

export default function CartItem({ el }) {

  const [count, setCount] = useState(1)
  const [deleteId, setDeleteId] = useState(null)
  const [showModal, setShowModal] = useState(true);

  const dispatch = useDispatch()
  const cart = useSelector(state => state.cartList)


  function upCartCount(id, countId) {
    setCount(countId)
    dispatch(upCart({ id: id, count: countId }))
  }


  function downCartCount(id, countId) {
    if (countId > 0) {
      setCount(countId)
      dispatch(downCart({ id: id, count: countId }))
    } else {
      setDeleteId(id)
      setShowModal(false)
    }
  }

  function onSuccess() {
    dispatch(removeOnCart({ id: deleteId }))
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
        <img className='' src={el.image} width={70} />
      </div>
      <div className='cart-item-info'>
        <p className='cart-item-title'>{el.name}</p>
        <p className='cart-item-count'>Umumiy {el.price * el.count} so'm</p>
      </div>
      <div className='cart-item-action'>
        <button className="added-to-cart">{count}</button>
        <div className="added-cart"><button style={{ color: "#000" }} className="added-to-cart add-down" onClick={() => downCartCount(el.id, count - 1)}>-</button><button style={{ color: "#000" }} className="added-to-cart add-up" onClick={() => upCartCount(el.id, count + 1)}>+</button ></div >
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
