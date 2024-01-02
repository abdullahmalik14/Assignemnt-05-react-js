import card1 from '../assets/card1.webp'
import card2 from '../assets/card2.webp'
import card3 from '../assets/card3.webp'
import card4 from '../assets/card4.webp'


const Main_cart_section= ()=>{

    return(
        <>
        <div className="container" style={{marginTop:"230px"}}>
            <h1 style={{textAlign:"center",marginBottom:"20px",fontWeight:"bold"}}>Best Sell</h1>
            <p style={{textAlign:"center"}}>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
             <br /> Lorem Ipsum has been the industry's standard dummy text</p>             
        </div>
        
        </>
    )
}
const Cart_section= ()=>{

    return(

        <>
        <div className='container'>
                <div className='row'>
                    <div style={{marginTop:"15px"}}  className="col-md-3">
                        <img style={{maxWidth:"200px"}} src={card1 } alt="" />
                        <h6 style={{marginTop:"10px",fontWeight:"normal"}}>Chair</h6>
                        <h6>Golden Easy Spot Chair.</h6>
                        
                        <h6>$210.00</h6>
                    </div>

                    <div style={{marginTop:"15px"}}  className="col-md-3">
                        <img style={{maxWidth:"200px"}} src={card2 } alt="" />
                        <h6 style={{marginTop:"10px",fontWeight:"normal"}}>Chair</h6>
                        <h6>Golden Easy Spot Chair.</h6>
                        
                        <h6 className="d-flex">$210.00
                          <p style={{marginLeft:"10px"}}><del>$230.00</del></p></h6>
                    </div>

                    <div style={{marginTop:"15px"}}  className="col-md-3">
                        <img style={{maxWidth:"200px"}} src={card3} alt="" />
                        <h6 style={{marginTop:"10px",fontWeight:"normal"}}>Chair</h6>
                        <h6>Golden Easy Spot Chair.</h6>
                        
                        <h6>$250.00</h6>
                    </div>

                    <div style={{marginTop:"15px"}}  className="col-md-3">
                        <img style={{maxWidth:"200px"}} src={card4 } alt="" />
                        <h6 style={{marginTop:"10px",fontWeight:"normal"}}>Chair</h6>
                        <h6>Golden Easy Spot Chair.</h6>
                        
                        
                        <h6 className="d-flex">$320.00 
                         <p style={{marginLeft:"10px"}}><del>$120.00</del></p></h6>
                        
                    </div>


                </div>
             </div> 
        
        
        
        </>
    )
}
export {Main_cart_section,Cart_section}



