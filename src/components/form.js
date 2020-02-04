import React , {Component} from 'react';
import logo from '../img/trivago.png';
import Select from 'react-select'; // import react-select
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";


//font awesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'; 
import { faSearch , faCalendar , faUser, faUserFriends ,faUsers , faMapMarkerAlt} from '@fortawesome/free-solid-svg-icons'
//font awesome

class Form extends Component{

    //SEARCH BAR
    state = {
        initialItems: [],
        items: []
    }
    
    filterList = (event) => {
        let items = this.state.initialItems;
        items = items.filter((item) => {
          return item.toLowerCase().search(event.target.value.toLowerCase()) !== -1;
        });
        this.setState({items: items});
    }

    componentWillMount = () => {
        this.setState({
            initialItems: this.props.content,
            items: this.props.content
        })
    }


    //SEARCH BAR

    //Calendario

    state = {
        startDate1: new Date(),
        startDate2: new Date(),
    };

    handleChange1 = date => {
        this.setState({
          startDate1: date
        });
    };

    handleChange2 = date => {
        this.setState({
          startDate2: date
        });
    };

    //Calendario

    render(){
        
        //Filtro de Busqueda
        //Filtro de Busqueda

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
                            <input type="text" placeholder="Search" onChange={this.filterList}/>
                            <div className="places">
                                {
                                    this.state.items.map(function (item) {
                                        return <div key={item}><FontAwesomeIcon icon={faMapMarkerAlt} /> {item}</div>
                                    })
                                }
                            </div>
                        </div>
                        
                        <div className="block-2">
                            <FontAwesomeIcon icon={faCalendar} />
                            <DatePicker
                                selected={this.state.startDate1}
                                onChange={this.handleChange1}
                            />
                            <DatePicker
                                selected={this.state.startDate2}
                                onChange={this.handleChange2}
                            />
                        </div>

                        <div className="block-3">
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
