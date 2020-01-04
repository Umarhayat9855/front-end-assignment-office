import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Background1 from '../Images/background1.jpg';
import Background2 from '../Images/background2.jpg';
import Map1 from '../Images/map1.jpg';
import Map2 from '../Images/map2.jpg';
import afterMap from '../Images/afterMap.jpg';
import './style.css';
class first extends Component {
    state = {  }
    render() { 
        return ( 
            <React.Fragment>
                <div className="container" id="Backimage" class="img-fluid text-center" alt="Responsive image" style={{maxWidth:"auto", height:"auto" ,display:"flux" , margin:"auto"}}>
                    <div style={{textAlign:"center", fontSize:"38px", fontFamily:"MuseoSans-300", fontStyle:"normal", fontWeight:"400",lineHeight:"46px" , color:"white" ,  marginBottom:"100px"}}>
                    <h2 style={{}}>RUNWITHME FITNESS APP</h2>
                  
                    </div>
                    <div className="container" >
                      <div className="row">
                          <div className="col-xl-1" style={{marginTop:"40px"}}>
                            
                          </div>
                          <div className="col-xl-2 col-lg-6 col-md-6 col-sm-6 col-xs-6">
                          <img src={Background1} class="img-fluid text-center" alt="Responsive image" style={{maxWidth:"100%", height:"auto" ,display:"flux" , margin:"auto"}}/>
                          </div>
                          <div className="col-xl-2 col-lg-6 col-md-6 col-sm-6 col-xs-6">
                          <img src={Background2} class="img-fluid text-center" alt="Responsive image" style={{maxWidth:"100%", height:"auto" ,display:"flux" , margin:"auto"}}/>
                          </div>
                          <div className="col-xl-2 col-lg-6 col-md-6 col-sm-6 col-xs-6">
                          <img src={Map1} class="img-fluid text-center" alt="Responsive image" style={{maxWidth:"100%", height:"auto" ,display:"flux" , margin:"auto"}}/>
                          </div>
                          <div className="col-xl-2 col-lg-6 col-md-6 col-sm-6 col-xs-6">
                          <img src={Map2} class="img-fluid text-center" alt="Responsive image" style={{maxWidth:"100%", height:"auto" ,display:"flux" , margin:"auto"}}/>
                          </div>
                          <div className="col-xl-2 col-lg-6 col-md-6 col-sm-6 col-xs-6">
                          <img src={afterMap} class="img-fluid text-center" alt="Responsive image" style={{maxWidth:"100%", height:"auto" ,display:"flux" , margin:"auto"}}/>
                          </div>
                          <div className="col-xl-1">
                            
                          </div>
                          <div style={{marginBottom:"100px"}}>
                        <h2>i</h2>
                    </div>
                      </div>
                    </div>
                </div>
            </React.Fragment>
         );
    }
}
 
export default first;
{/* <div class="Grid Grid--1of2 large-Grid--fit Grid--gutters Grid--justifyCenter Grid--center" id="gallery" tyle="border-bottom: 1px  solid #efefef;border-top: 1px  solid #efefef">
<div class="Grid-cell ">
    <div class="thumbnail">
        <img class="" src={Background1} style={{width:"auto" , height:"auto" ,alt:"4 Home"}}/>
    </div>
    </div>
    <div class="Grid-cell">
    <div class="thumbnail">
    <img class="" src={Background2} style={{width:"auto" , height:"auto" ,alt:"4 Home"}}/>
    </div>
</div>
<div class="Grid-cell">
    <div class="thumbnail">
    <img class="" src={Map1} style={{width:"auto" , height:"auto" ,alt:"4 Home"}}/>
    </div>
</div>
    </div> */}