import React, { Component } from 'react'
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
const options = {
    items: 4,
};
class Carrousel extends Component{
    render(){
        return(
            <OwlCarousel
                className="owl-theme"
                loop
                margin={10}
                nav
            >
                <div className="item"><img src="https://imgcy.trivago.com/c_fill,d_dummy.jpeg,f_auto,h_258,q_auto,w_258/categoryimages/73/26/73261_v38.jpeg" /><h4>Hoteles en Cordoba Capital</h4></div>
                <div className="item"><img src="https://imgcy.trivago.com/c_fill,d_dummy.jpeg,f_auto,h_258,q_auto,w_258/categoryimages/13/70/137091_v38.jpeg" /><h4>Hoteles en Mar del plata</h4></div>
                <div className="item"><img src="https://imgcy.trivago.com/c_fill,d_dummy.jpeg,f_auto,h_258,q_auto,w_258/categoryimages/73/24/73245_v75.jpeg" /><h4>Hoteles en Mendoza</h4></div>
                <div className="item"><img src="https://imgcy.trivago.com/c_fill,d_dummy.jpeg,f_auto,h_258,q_auto,w_258/categoryimages/14/33/14338_v75.jpeg" /><h4>Hoteles en Miami</h4></div>
                <div className="item"><img src="https://imgcy.trivago.com/c_fill,d_dummy.jpeg,f_auto,h_258,q_auto,w_258/categoryimages/81/97/81970_v74.jpeg" /><h4>Hoteles en Viña del mar</h4></div>
                <div className="item"><img src="https://imgcy.trivago.com/c_fill,d_dummy.jpeg,f_auto,h_258,q_auto,w_258/categoryimages/73/25/73257_v70.jpeg" /><h4>Hoteles en la plata</h4></div>
                
            </OwlCarousel>
        )
    }
}

export default Carrousel;
