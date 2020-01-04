import React, { Component } from 'react';
import Main from '../Components/main';
import Main2 from '../Second_Component/Components/main';
class Veiwall extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <React.Fragment>
                <Main2/>
                <Main/>
            </React.Fragment>
         );
    }
}
 
export default Veiwall;