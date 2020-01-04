import React, { Component } from 'react';
import Veiwall from './View/veiwall';
import history from '../src/Routing/history';
class App extends Component {
  state = {  }
  render() { 
    return ( 
      <React.Fragment>
        <Veiwall/>
      </React.Fragment>
     );
  }
}
 
export default App;