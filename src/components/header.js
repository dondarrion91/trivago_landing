import React , {Component} from 'react';
import moneys from '../samples/money.json';
import { components } from 'react-select';




class Header extends Component{

        

    render(){
        
        return (
            <nav className="navbar navbar-expand-lg navbar-light ">

                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse justify-content-end" id="navbarNavDropdown">
                    <ul className="navbar-nav">

                        <li className="nav-item active">
                            <a className="nav-link" href="https://access.trivago.com/oauth/es-AR/login">Iniciar Sesión</a>
                        </li>

                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                Menú</a>
                            <div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                                <a className="dropdown-item" href="#">Action</a>
                                <a className="dropdown-item" href="#">Another action</a>
                                <a className="dropdown-item" href="#">Something else here</a>
                            </div>
                        </li>

                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                               ARS</a>
                            <div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                                <Anchor/>
                                <a className="dropdown-item" href="#">Another </a>
                                <a className="dropdown-item" href="#">Something</a>
                            </div>
                        </li>
                    </ul>
                </div>
            </nav>
        )
    }

    

} 

var keys = Object.keys(moneys);

class Anchor extends Component{
    
    state = {
        currency: keys 
    }
    render(){
        
        console.log(keys)
        
         
        
        return(
           <div>
                {
                    this.state.currency.map((item) => {
                    return <a className="dropdown-item" href="#">{item}</a>
                            
                    })
                }
               
           </div> 
        )
    }
}

export default Header;