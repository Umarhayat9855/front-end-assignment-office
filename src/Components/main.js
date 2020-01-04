import React, { Component } from 'react';
import Header from './header';
import Footer from './footer';
import First from './first';
class Main extends Component {
    state = {  }
    render() { 
        return ( 
            <React.Fragment>
                 <First/>
                <Header/>
                <Footer/>
            </React.Fragment>
         );
    }
}
 
export default Main;