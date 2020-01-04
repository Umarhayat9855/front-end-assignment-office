import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Diagram1 from '../Images/diagram1.jpg';
import Diagram2 from '../Images/diagram2.jpg';
import Diagram3 from '../Images/diagram3.jpg';
import Diagram4 from '../Images/diagram4.jpg';
import './style.css';
class Header extends Component {
    state = {  }
    render() { 
        return ( 
            <React.Fragment>
                    {/* Page Container */}
                <div className="container">   
                    {/* Page Container */}
                 <div  id="Backimage">
                 {/* <img src={Background} class="img-fluid text-center" alt="Responsive image" style={{maxWidth:"100%", height:"auto" ,display:"flux" , margin:"auto"}}/> */}
                    <div className="row">
                        <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                            
                    </div>
                    </div>
                    </div>
                    {/* </div> */}
                <div class="container">
                    <div class="row">
                        <div style={{}}>
                        <h2 style={{fontSize:"31px", fontFamily:"TenbyStencil-Medium", fontStyle:"normal", fontWeight:"400",lineHeight:"43px" , color:"rgba(0, 0, 0, 0.9)"}}>
                            The Problem
                        </h2>
                        <p style={{textAlign:"center", fontSize:"21px", fontFamily:"MuseoSans-300", fontStyle:"normal", fontWeight:"400",lineHeight:"32px" , color:"rgba(0, 0, 0, 0.9)"}}>You want to connect and do an outdoor sports activity with a friend. You also want to stay connected with each other using the GPS location on a map. Or you are a
						        caring partner who wants to make sure their significant other is safe while they go out for an outdoor activity. </p>
                        </div>
                    </div>
                </div>
                <div>
                <hr style={{marginTop:"100px" , width:"100%" , textAlign:"center"}}/>
                </div>
                <div class="container" style={{marginTop:"50px"}}>
                    <div class="row">
                        <div >
                        <h2 style={{fontSize:"31px", fontFamily:"TenbyStencil-Medium", fontStyle:"normal", fontWeight:"400",lineHeight:"43px" , color:"rgba(0, 0, 0, 0.9)"}}>
                        DISCOVERY
                        </h2>
                        <p style={{marginTop:"40px", fontSize:"14px", fontFamily:"TenbyStencil-Medium", fontStyle:"normal", fontWeight:"700",lineHeight:"21px" , color:"rgba(0, 0, 0, 0.9)"}}>
                        SKETCHES - INITIAL IDEA </p>
                        </div>
                    </div>
                </div>
                <div class="container">
                <hr class="vl"style={{width:"100%" , textAlign:"center",marginTop:"-15px" , borderRadius:"10px"}}/>
                </div>

                        {/* Paraticesss */}
                    <div class="container">
                     <div class="row">
                        <div className="col-xl-2 col-lg-2 col-md-2 col-sm-2 col-2">

                        </div>
                        <div className="col-xl-8 col-lg-8 col-md-8 col-sm-8 col-8">
                            <img src={Diagram1} class="img-fluid text-center" alt="Responsive image" style={{maxWidth:"100%", height:"auto" ,display:"flux" , margin:"auto"}}/>
                        </div>
                        <div className="col-xl-2 col-lg-2 col-md-2 col-sm-2 col-2">

                        </div>
                    </div>
                    <div class="row" style={{marginTop:"30px"}}>
                    <div className="col-xl-2 col-lg-2 col-md-2 col-sm-2 col-2">

                    </div>
                    <div className="col-xl-8 col-lg-8 col-md-8 col-sm-8 col-8" >
                        <img src={Diagram2} class="img-fluid text-center" alt="Responsive image" style={{maxWidth:"100%", height:"auto" , display:"flux" , margin:"auto" }}/>
                    </div>
                    <div className="col-xl-2 col-lg-2 col-md-2 col-sm-2 col-2">

                    </div>
                    </div>
                </div>

                            {/* 2nd */}

                 {/* <div class="Grid Grid--full large-Grid--1of2 Grid--gutters margin-b50">
                     <div class="Grid-cell">
                        <img src={Diagram1} class="mx-auto d-block" style={{maxWidth:"50%", margin:"auto" , display:"flux"}}/>
                    </div>
                    <div class="Grid-cell" style={{marginTop:"30px"}}>
                        <img src={Diagram2} class="mx-auto d-block" style={{maxWidth:"50%", margin:"auto" , display:"flux"}}/>
                    </div>
                </div> */}
                         {/* Paraticesss */}

              
                 <div className="container" style={{marginTop:"90px"}}>
                    <div>
                        <h3 style={{fontSize:"14px", fontFamily:"TenbyStencil-Medium", fontStyle:"normal", fontWeight:"700",lineHeight:"21px" , color:"rgba(0, 0, 0, 0.9)"}}>
                            USER ONBOARDING EXPERIENCE
                        </h3>
                    </div>
                    <div>
                <hr class="vl"style={{width:"100%" , textAlign:"center" , borderRadius:"10px"}}/>
                </div>
                </div>
                <div className="container">
                    <div className="row">
                        <div className="col-xl-2 col-lg-2 col-md-2 col-sm-2 col-2">

                    </div>
                    <div className="col-xl-8 col-lg-8 col-md-8 col-sm-8 col-8" >
                        <img src={Diagram3} class="img-fluid text-center" alt="Responsive image" style={{maxWidth:"100%", height:"auto" , display:"flux" , margin:"auto" }}/>
                    </div>
                    <div className="col-xl-2 col-lg-2 col-md-2 col-sm-2 col-2">

                    </div>
                    </div>
                </div>
                <div className="container" style={{marginTop:"90px"}}>
                    <div>
                        <h3 style={{fontSize:"14px", fontFamily:"TenbyStencil-Medium", fontStyle:"normal", fontWeight:"700",lineHeight:"21px" , color:"rgba(0, 0, 0, 0.9)"}}>
                        USER STORIES
                        </h3>
                    </div>
                    <div>
                <hr class="vl"style={{width:"100%" , textAlign:"center" , borderRadius:"10px"}}/>
                </div>
                </div>
                <div className="container">
                    <div className="row">
                         <div className="col-xl-2 col-lg-2 col-md-2 col-sm-2 col-2">

                    </div>
                    <div className="col-xl-8 col-lg-8 col-md-8 col-sm-8 col-8" >
                        <img src={Diagram4} class="img-fluid text-center" alt="Responsive image" style={{maxWidth:"100%", height:"auto" , display:"flux" , margin:"auto" }}/>
                    </div>
                    <div className="col-xl-2 col-lg-2 col-md-2 col-sm-2 col-2">

                    </div>
                    </div>
                </div>
                </div> 
            </React.Fragment>
         );
    }
}
 
export default Header;
