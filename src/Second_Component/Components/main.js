import React, { Component } from 'react';
// import {Layout,Header,Content,Footer} from 'react-mdl';
import 'bootstrap/dist/css/bootstrap.min.css';
import Contect from './contect';
import Footer from './footer';
class Main extends Component {
    state = {  }
    render() { 
        return ( 
            <React.Fragment>
              
                  
                        <Contect/>
                        <Footer/>
                  

            </React.Fragment>
         );
    }
}
export default Main;
