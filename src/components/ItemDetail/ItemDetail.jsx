import './ItemDetail.css';
import { useState } from 'react';
import ItemCount from '../ItemCount/ItemCount';
import { Link } from 'react-router-dom';

import { CartContext } from '../../context/CartContext';
import { useContext } from 'react';

const ItemDetail = ({ id, titulo, imagen, precio, stock }) => {
    const [quantityAdded, setQuantityAdded] = useState(0)

    const cartContext = useContext(CartContext);

    const handleOnAdd = (quantity) => {
        setQuantityAdded(quantity)

        const item = {
            id,titulo,precio
        }

        cartContext.addItem(item, quantity);

    }       

    return (
        <div className="CardItem">
            <picture>
                <img src={imagen} alt={titulo} className='ItemImg' />
            </picture>
            <header className='Header'>
                <h2 className='ItemHeader'>{titulo}</h2>
            </header>
            <section>
                <p className='Info'>Precio:{precio}</p>
                <p className='Info'>Stock disponible: {stock}</p>
            </section>
            <footer className='ItemFooter'>
                {
                    quantityAdded > 0 ? (
                        <Link to='/cart' className='Option'>Terminar compra</Link>
                    ) : (
                        <ItemCount initial={1} stock={stock} onAdd={handleOnAdd} />
                    )                    
                }
            </footer>
        </div>
    )
}

export default ItemDetail;