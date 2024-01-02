import discount_img from '../assets/discount-banner.webp'

const Main_discount_section  =()=>{
    return(
        <>
        
        <div className="container pt-4">
            <div className="row">
                <div className="col-md-6 pt-4 ">
                    <div className="cart-background">
                           
                    </div>
     <img style={{marginLeft:"40px",marginTop:"-410px",width:"500px"}} src={discount_img} alt="" />

                </div>

                <div className="col-md-6 pt-4 ">
                    <div className='container pt-4 discount-txt' >
                        <p>Lorem Ipsum is simply dummy text of the <br /> printing and typesetting industry.</p>

                            <h1 style={{fontWeight:"bold"}}>Winter Discount <br /> Up to 30%</h1>

                            <p>It is a long established fact that a reader will be
                                 distracted <br /> by the readable content of a page when looking at its <br /> layout.</p>

                                 <button className='carousel-img1-button'>SHOP NOW</button>
                    </div>

                </div>

            </div>

        </div>
        
        
        
        </>
    )
}

export {Main_discount_section}