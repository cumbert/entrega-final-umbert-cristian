import './NavBar.css';
import CartWidget from '../CartWidget/CartWidget';
import logo from './assets/ravennaJeans.png';
import { NavLink, Link } from 'react-router-dom';


const NavBar = () => {

  return (   
    <nav className='navbar'>
      <div >
        <Link to='/'>
          <img className='logo' src={logo} alt="ravenna_jeans_logo" />
        </Link>
      </div>
      <div className='Categories'>        
        <NavLink to={`/`} className={({ isActive }) => isActive ? 'ActiveOption' : 'Option'}>HOME</NavLink>        
        <NavLink to={`/categoria/pantalones`} className={({ isActive }) => isActive ? 'ActiveOption' : 'Option'} >PANTALONES</NavLink> 
        <NavLink to={`/categoria/remeras`} className={({ isActive }) => isActive ? 'ActiveOption' : 'Option'} >REMERAS</NavLink>        
        <NavLink to={`/categoria/camisas`} className={({ isActive }) => isActive ? 'ActiveOption' : 'Option'} >CAMISAS</NavLink>
      </div>
      <CartWidget />
    </nav>
  )
}

export default NavBar;