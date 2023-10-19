import cart from './assets/cart_widget.png';
import './CartWidget.css';

const CartWidget = () => {

    return (
        <div className='contenedor'>
            <img id="carrito-icon" src={cart} alt="cart_widget" />
            <span id="numerito" className="numerito" >0</span>
        </div>
    )
}

export default CartWidget;