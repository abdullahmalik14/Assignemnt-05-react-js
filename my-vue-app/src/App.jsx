import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Header_section } from './Components/Header'
import { Heroic_section } from './Components/Heroic-section';
import { Main_cart_section,Cart_section } from './Components/main-cart-section';
import { Main_discount_section } from './Components/Main-discount-section';
import { All_cards } from './Components/All-product-cards';
import { Footer } from './Components/Footer';
const App =()=>{
  return(
    <>
    <Header_section/> 
   <Heroic_section/>
   
   <Main_cart_section/>
   <Cart_section/>
   <Main_discount_section/>
   < All_cards/>
   <Footer/>
    
    </>
  )
}

export default App
