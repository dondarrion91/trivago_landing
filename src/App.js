import React,{Component} from 'react';


import Header from './components/header'; // imports Header from components folder.
import Form from './components/form'; // imports Form from components folder.
import './components/css/style.css';
import countries from './samples/countries.js';
console.log(countries);


class App extends Component{
  render(){

    

    return (
      
      <div className="container-fluid">
        <Header/>
        <Form content={countries}/>
        
      </div>
      
    )  
  } 
}



export default App;
