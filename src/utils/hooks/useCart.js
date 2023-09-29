import { useDispatch } from "react-redux"
import { addToCart, downCart, removeOnCart, upCart } from "../../store/reducers"


const useCart = () => {
    const dispatch = useDispatch()


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



    return { addCart, upCartCount, downCartCount, removeInCart }
}


export default useCart