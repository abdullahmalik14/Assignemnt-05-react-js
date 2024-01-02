
import { Cart_section } from "./main-cart-section"
import card5 from '../assets/card5.webp'
import card6 from '../assets/card6.webp'
import card7 from '../assets/card7.webp'
import card8 from '../assets/card8.webp'

const All_cards =()=>{

    return(
        <>
        <div style={{textAlign:"center", marginTop:'80px'}} className="container">
            <h2>All Products</h2>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. <br />
             Lorem Ipsum has been the industry's standard dummy text</p>
        </div>
        <Cart_section/>

         <div className='container'>
                <div className='row'>
                    <div style={{marginTop:"15px"}}  className="col-md-3">
                        <img style={{maxWidth:"200px"}} src={card5} alt="" />
                        <h6 style={{marginTop:"10px",fontWeight:"normal"}}>Chair</h6>
                        <h6>Golden Easy Spot Chair.</h6>
                        
                        <h6 className="d-flex">$250.00 
                            <p style={{marginLeft:"10px"}}><del>$260.00</del></p></h6>
                    </div>

                    <div style={{marginTop:"15px"}}  className="col-md-3">
                        <img style={{maxWidth:"200px"}} src={card6 } alt="" />
                        <h6 style={{marginTop:"10px",fontWeight:"normal"}}>Chair</h6>
                        <h6>Golden Easy Spot Chair.</h6>
                        
                        <h6 >$260.00
                          </h6>
                    </div>

                    <div style={{marginTop:"15px"}}  className="col-md-3">
                        <img style={{maxWidth:"200px"}} src={card7} alt="" />
                        <h6 style={{marginTop:"10px",fontWeight:"normal"}}>Chair</h6>
                        <h6>Golden Easy Spot Chair.</h6>
                        
                        <h6 className="d-flex">$240.00 
                        <p style={{marginLeft:"10px"}}><del>$290.00</del></p>
                        </h6>
                    </div>

                    <div style={{marginTop:"15px"}}  className="col-md-3">
                        <img style={{maxWidth:"200px"}} src={card8 } alt="" />
                        <h6 style={{marginTop:"10px",fontWeight:"normal"}}>Chair</h6>
                        <h6>Golden Easy Spot Chair.</h6>
                        
                        
                        <h6 >$280.00 
                         </h6>
                        
                    </div>


                </div>
             </div>  
        </>
    )
}

export {All_cards}