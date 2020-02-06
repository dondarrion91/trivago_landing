import React,{Component} from 'react';


import Header from './components/header'; // imports Header from components folder.
import Form from './components/form'; // imports Form from components folder.
import Gallery from './components/gallery';//imports Gallery from components folder
import Carrousel from './components/carrousel' //imports Carrousel from components
import Info from './components/info'; // imports Info from components folder.

import './components/css/style.css';
import countries from './samples/countries.js';
console.log(countries);


class App extends Component{
  render(){

    

    return (
      
      <div className="container-fluid">
        <Header/>
        <Form content={countries}/>
        <Gallery/>
        <Carrousel/>
        <Info/>
      </div>
      
    )  
  } 
}



export default App;
