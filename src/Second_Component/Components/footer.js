import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './style.css';
class Footer extends Component {
    state = {  }
    render() { 
        return ( 
            <React.Fragment>
                <div className="container-fluid">
                   <hr style={{marginTop:"100px" , width:"100%" , textAlign:"center" , borderleft: "6px"}}/>
                </div>
                <div className="container-fluid" style={{marginTop:"100px"}}>
                    <div className="row">
                    <div className="col-lg-4 col-md-4 col-sm-4 col-xs-4 mb-4">
                        
                    </div>
                    <div className="col-lg-4 col-md-4 col-sm-4 col-xs-4 mb-4">
                        <h4 style={{fontSize:"12px", fontFamily:"Monoton", fontStyle:"normal", fontWeight:"400",lineHeight:"18px" , color:"rgba(0, 0, 0, 0.5)" , textAlign:"center"}}>
                        Mobile-izing the world
                        </h4>
                        <h3 style={{textAlign:"center" , fontSize:"36px", fontFamily:"Monoton", fontStyle:"normal", fontWeight:"400",lineHeight:"54px" , color:"rgba(0, 0, 0, 0)"}}>
                        <a class="logo" href="#top" >
                            CG
                        </a>
                        </h3>
                        <h2 style={{fontSize:"13px", fontFamily:"TenbyStencil-Medium", fontStyle:"normal", fontWeight:"400",lineHeight:"19px" , color:"rgba(0, 0, 0, 0),", textAlign:"center"}}>
                        415-260-4693<br/>
                        business@creativegray.com
                        </h2>
                    </div>
                    <div className="col-lg-4 col-md-4 col-sm-4 col-xs-4 mb-4">
                       
                    </div>
                        </div>
                    
                </div>
            </React.Fragment>
         );
    }
}
 
export default Footer;