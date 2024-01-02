
import { Logo_section } from "./Logo"
import { Navbar_header } from "./Navbar-Header"
import { CarouselComponent } from "./Slider-section"
const Header_section = ()=>{
    return(
        <>
        <header className="header-section ">
        <Logo_section/>
        <Navbar_header />
        <CarouselComponent/>
        </header>   
        </>
    )
}

export {Header_section}