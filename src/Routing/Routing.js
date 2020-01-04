import React, { Component } from 'react';
import Casestudy from '../Components/main';
import FirstPage from '../../src/Second_Component/Components/main';
import {Switch , Route ,Router} from 'react-router-dom';
import history from './history';
class Routing extends Component {
    state = {  }
    render() { 
        return ( 
            <React.Fragment>
                 {
                   <Router history={history}>
                       <Switch>
                       <Route path="/Components/main" render={props=><Casestudy {...props}/>}/>
                       <Route path="/src/Second_Component/Components/main" render={props=><FirstPage {...props}/>}/>
                       </Switch>
                   </Router>
               }
            </React.Fragment>
         );
    }
}
 
export default Routing;