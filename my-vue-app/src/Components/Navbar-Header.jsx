import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

const Navbar_header=()=>{
    return (
        <>
        <div className=" d-flex">
            <ul className="navbar-section d-flex ">
                <li><a href="">Home</a></li>
                <li><a href="">Shops</a></li>
                <li><a href="">Mens</a></li>
                <li><a href="">Pages</a></li>
                <li><a href="">Blog</a></li>
                <li><a href="">Contact</a></li>
            </ul>

          
            <a href="/cart" className="cart-link d-flex">
          <FontAwesomeIcon icon={faShoppingCart}  />
          <p style={{fontSize:"20px",marginLeft:"10px",marginTop:"-6px"}}>2 items</p>
          <FontAwesomeIcon icon={faSearch} className="search-icon" />
          </a>
         
           
        </div>
        
        
        </>
    )
}

export {Navbar_header}