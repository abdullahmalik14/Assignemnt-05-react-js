
import Carousel from 'react-bootstrap/Carousel'
import Carousel_img1 from '../assets/Carousel-img1.webp'
import Carousel_img2 from '../assets/Carousel-img2.webp'

const CarouselComponent = () => {
  return (
    <>
    <div className='container-fluid'>

   
    <Carousel >
      <Carousel.Item>
        <img
          className="carousel-img1 d-block w-100"
          src={Carousel_img1}
          alt="First slide"
          
        />
        <Carousel.Caption>
        <div className='container carousel-1' style={{ marginLeft: "200px"}}>
              <h3 style={{  fontSize: "45px", color: "red", fontWeight: "400" }}>30% off</h3>
              <h1 style={{  fontWeight: "700", fontSize: "60px" }}>Comfort Chair</h1>
              <h3 style={{ marginTop: "15px", fontWeight: "400" }}>Collect from Dexone & get 30% Discount.</h3>
              <button className='carousel-img1-button'>SHOP NOW</button>
            </div>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="carousel-img2 d-block w-100"
          src={Carousel_img2}
          alt="Second slide"
        />
        <Carousel.Caption>
        <div className='container carousel-1' style={{ marginLeft: "200px"}}>
              <h3 style={{  fontSize: "45px", color: "red", fontWeight: "400" }}>30% off</h3>
              <h1 style={{  fontWeight: "700", fontSize: "60px" }}>Comfort Chair</h1>
              <h3 style={{ marginTop: "15px", fontWeight: "400" }}>Collect from Dexone & get 30% Discount.</h3>
              <button className='carousel-img1-button'>SHOP NOW</button>
            </div>
        </Carousel.Caption>
      </Carousel.Item>
      
    </Carousel>
  



    </div>
    
    
    
    </>
  )
};

export  {CarouselComponent};


