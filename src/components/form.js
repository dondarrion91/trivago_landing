import React , {Component} from 'react';
import logo from '../img/trivago.png';
import Select from 'react-select'; // import react-select

//font awesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'; 
import { faSearch , faCalendar , faUser, faUserFriends ,faUsers} from '@fortawesome/free-solid-svg-icons'
//font awesome

class Form extends Component{
    render(){

        //estilos del logo trivago
        const title = {
            width: '180px',
            margin: '20px 0px'
        }
        //estilos del logo trivago

        //atajos para iconos font awesome
        const user = <FontAwesomeIcon icon={faUser} />
        const userFriends = <FontAwesomeIcon icon={faUserFriends} />
        const users = <FontAwesomeIcon icon={faUsers} />
        //atajos para iconos font awesome


        //values del select en block-3
        const options = [
            { value: 'Individual', label:  (
                <>
                    {user}
                    <span style={{ paddingRight: "5px" }}>Individual</span>
                  
                </>
              )},
              { value: 'Doble', label:  (
                <>
                    {userFriends}
                    <span style={{ paddingRight: "5px" }}>Doble</span>
                  
                </>
              )},
              { value: 'Multiple', label:  (
                <>
                    {users}
                    <span style={{ paddingRight: "5px" }}>Multiple</span>
                  
                </>
              )}
            
        ];
        //values del select en block-3

        return(
            <div className="container-fluid form-title">
                <form className="text-center">
                    <img src={logo} style={title} alt="Logo trivago"/>
                    <p>Encontrá tu hotel ideal y compará precios de <br/> diferentes páginas web</p>

                    <div className="form-body">
                        <div className="block-1">
                            <FontAwesomeIcon icon={faSearch} />
                            <input type="search"/>
                        </div>
                        
                        <div class="block-2">
                            <FontAwesomeIcon icon={faCalendar} />
                            <input type="date"/>
                            <input type="date"/>
                        </div>

                        <div class="block-3">
                            <Select
                                defaultValue = {{ value: 'Doble', label:  (
                                    <>
                                        {userFriends}
                                        <span style={{ paddingRight: "5px" }}>Habitacion Doble</span>
                                      
                                    </>
                                  )}}
                                options={options}
                            />
                        </div>
                        <button type="submit">Buscar</button>
                        
                    </div>
                </form>
                
            </div>
            
        )
    }
}




export default Form;
