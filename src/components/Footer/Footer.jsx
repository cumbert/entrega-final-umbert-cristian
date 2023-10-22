import './Footer.css';
import location from './assets/location.png';
import phone from './assets/phone.png';
import wsp from './assets/wsp.png';


const Footer = () => {
  return (
  
    <section className="footer">
        <div>           
           <img className='direccion' src={location} alt="location_logo" />
            <h4>Concordia 510, Buenos Aires</h4>
        </div>
        <div>
        <img className='phone' src={phone} alt="phone_logo" />
            <h4>4674-554</h4>
        </div>
        <div>
        <img className='wsp' src={wsp} alt="wsp_logo" />
            <h4>114037-8312</h4>
        </div>

    </section>

  )
}

export default Footer