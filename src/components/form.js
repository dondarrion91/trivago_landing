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
            items: [],
            value: '',
            startDate1: new Date(),
            startDate2: new Date(),
    };
    
    
    
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

    //evento click 

    
      selectionForm = (item) => {
        console.log(item.target.innerHTML)
        this.setState({value: item.target.innerHTML});
      }

    //evento click

    // visibilidad de la lista de paises en el filtro de busquedas

    visibleList = () => {
        let input = document.getElementById("buscador");
        input.style.display = "block";
    }

    notVisibleList = () => {
        let input = document.getElementById("buscador");
        input.style.display = "none";
    }

    // visibilidad de la lista de paises en el filtro de busquedas

    //SEARCH BAR

    //Calendario

    

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

    parseFecha = (fecha) => {
        let day = fecha.getDate();
        let month = fecha.getMonth() + 1;
        let year = fecha.getFullYear();
        return day + "-" + month + "-" + year;
        
    }
    //Calendario

    //guardar estados

    

    stateSave = () => {
        const estados = {
            place: this.state.value,
            date1: this.state.startDate1,
            date2: this.state.startDate2
        }
        
        
    }

    

    //

    //display tarjeta de busquedas

    visibleCard = () =>{
        let tarjeta = document.getElementById("tarjeta")
        tarjeta.style.display = "flex";
    }
    //

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
                <form action="#" method="GET" className="text-center">
                    <img src={logo} style={title} alt="Logo trivago"/>
                    <p>Encontrá tu hotel ideal y compará precios de <br/> diferentes páginas web</p>

                    <div className="form-body">
                        <div className="block-1">
                            <FontAwesomeIcon icon={faSearch} />
                            <input 
                                type="text"
                                id="barra"
                                placeholder="Search" 
                                onChange={this.filterList}
                                onFocus={this.visibleList}
                                
                            /> 
                            <div className="places" id="buscador">
                                {
                                    this.state.items.map((item) => {
                                        return <div key={item} onClick={(item) => {
                                            this.selectionForm(item)
                                            this.notVisibleList()
                                        }
                                    }>
                                        {item}</div>
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
                        <button type="submit" onClick={() => {
                            this.stateSave()
                            this.visibleCard()
                            
                        }
                        }>Buscar</button>
                        
                    </div>
                </form>

                <Card 
                    place={this.state.value}
                    date1 = {this.parseFecha(this.state.startDate1)}  
                    date2 = {this.parseFecha(this.state.startDate2)}
                />
                    
                
            </div>
            
        )
    }
}

class Card extends Component{
    render(){
        return(
            <div className="media tarjeta" id="tarjeta">
                <h4>Retomá tu búsqueda reciente</h4>
                <div className="media-body">
                    <h5 className="mt-0">{this.props.place}</h5>
                    <p>{"fecha de llegada " + this.props.date1}</p>
                    <p>{"fecha de salida " + this.props.date2}</p>
                </div>
            </div>
        )
    }
    

      
}


export default Form;
