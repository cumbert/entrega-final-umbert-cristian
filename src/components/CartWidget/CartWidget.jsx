import './CartWidget.css';
import cart from './assets/cart_widget.png';
import { useContext } from 'react';
import { CartContext } from '../../context/CartContext';
import { Link } from 'react-router-dom';

const CartWidget = () => {
    const { totalQuantity } = useContext(CartContext)

    const cantidad = totalQuantity ? totalQuantity : 0

    return (

        <Link to='/cart' className='CartWidget' /* style={{display: totalQuantity > 0 ? 'block' : 'none'}} */>
            <div className='contenedor'>
                <img id="carrito-icon" src={cart} alt="cart_widget" />
                <span id="numerito" className="numerito" > {cantidad}  </span>                 
            </div>
        </Link>

    )
}

export default CartWidget;