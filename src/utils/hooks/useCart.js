import { useDispatch, useSelector } from "react-redux"
import { addToCart, downCart, removeOnCart, upCart } from "../../store/reducers"


const useCart = () => {
    const dispatch = useDispatch()
    const cart = useSelector(state => state.cartList)

    function addCart(data) {
        dispatch(addToCart({ ...data, count: 1 }))
    }

    function upCartCount(id, countId) {
        dispatch(upCart({ id: id, count: countId }))
    }


    function downCartCount(id, countId) {
        dispatch(downCart({ id: id, count: countId }))
    }

    function removeInCart(id) {
        dispatch(removeOnCart({ id }))
    }



    return { cart, addCart, upCartCount, downCartCount, removeInCart }
}


export default useCart