import heroic_img from '../assets/heroic-img1.webp'

const Heroic_section=()=>{

    return(
        <>
        <div style={{marginTop:"100px"}} className="container">
            <div className='heroic-text'>
            <img style={{width:"100%",height:"100%"}} src={heroic_img} alt="" />
            <h1 style={{marginLeft:"630px",marginTop:"-250px"}}> Premium Home <br />  Decorator</h1>
            <a style={{marginLeft:"830px",color:"#7c5e48"}} href="">Learn More</a>

            </div>

        </div>
        
        </>
    )
}

export {Heroic_section}