import React , {Component} from 'react';

class Gallery extends Component{
    render(){
        return (
            <div>
                <h4>¿Necesitás ideas para tu próximo viaje?</h4>
                <p>Descubrí las mejores experiencias en hoteles en los más de 140 artículos de trivago Magazine, desde hoteles boutique en Mendoza hasta casas de campo encantadoras en Córdoba.</p>
                <div className="galeria">
                    <article>
                        <img src="https://imgcy.trivago.com/c_lfill,d_dummy.jpeg,f_auto,h_300,q_auto,w_300/mag/2019/06/19090617/rsz-1fotolia-165115946-subscription-monthly-xxl.jpg" alt=""/>   
                        <h6>Aventurate a viajar al exterior</h6>
                        <p>Te traemos diferentes ideas de destinos <br/> internacionales para que tengas el mundo en tus manos.</p>
                    </article>
                    
                    <article>
                        <img src="https://imgcy.trivago.com/c_lfill,d_dummy.jpeg,f_auto,h_300,q_auto,w_300/mag/2018/04/25121433/hoteles-romanticos-buenos-aires-nikole-mock.jpg" alt=""/>   
                        <h6>Aventurate a viajar al exterior</h6>
                        <p>Te traemos diferentes ideas de destinos <br/> internacionales para que tengas el mundo en tus manos.</p>
                    </article>

                    <article>
                        <img src="https://imgcy.trivago.com/c_lfill,d_dummy.jpeg,f_auto,h_300,q_auto,w_300/mag/2018/09/19105728/rsz-victor-freitas-656091-unsplash.jpg" alt=""/>   
                        <h6>Aventurate a viajar al exterior</h6>
                        <p>Te traemos diferentes ideas de destinos <br/> internacionales para que tengas el mundo en tus manos.</p>
                    </article>

                    <article>
                        <img src="https://imgcy.trivago.com/c_lfill,d_dummy.jpeg,f_auto,h_300,q_auto,w_300/mag/2019/05/28100455/eyeem-100000323-126180008-1.jpg" alt=""/>
                        <h6>Aventurate a viajar al exterior</h6>
                        <p>Te traemos diferentes ideas de destinos <br/> internacionales para que tengas el mundo en tus manos.</p>
                    </article>
                </div>
            </div>
           
        )
    }
}

export default Gallery;