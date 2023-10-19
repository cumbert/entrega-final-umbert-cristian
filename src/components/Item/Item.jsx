import './Item.css';
import { Link } from 'react-router-dom';

const Item = ({ id, titulo, imagen, precio, stock }) => {

    return (
        <div className="CardItem">
            <picture>
                <img src={imagen} alt={titulo} className='ItemImg' />
            </picture>
            <section>
                <h2 className='ItemHeader'>{titulo}</h2>
                <p className='Info'>Precio: ${precio}</p>
                <p className='Info'>Stock disponible:{stock}</p>
            </section>
            <footer className='ItemFooter'>
                <Link to={`/item/${id}`} className='Option'>Ver detalle</Link>
            </footer>
        </div>

    )
}

export default Item;