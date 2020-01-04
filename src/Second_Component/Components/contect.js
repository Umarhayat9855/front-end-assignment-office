import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import logo from '../Images/mobile.png';
import iphone from '../Images/iphone.png';
import third from '../Images/third.png';
import forth from '../Images/forth.png';
import fifth from '../Images/fifth.png';
import sixth from '../Images/sixth.png';
import seventh from '../Images/seventh.png';
import Anima from '../Images/animation.svg';
import history from '../../Routing/history';
import './style.css';
class Contect extends Component {
    state = {  }
    render() { 
        return ( 
            <React.Fragment>
                <div class="container-fluid">
                    <div className="row" id="FristDescrption">
                        <div className="col-lg-2 col-md-2 col-sm-2 col-xs-2 mb-2">
                        </div>
                        <div className="col-lg-8 col-md-8 col-sm-8 col-xs-8 mb-8" >
                         <h4 id="headingfont1">Our Work</h4><br/>
                          <h4 id="font1" class="lead work-ID">
                          We design, engineer and launch digital products for iOS and Android platforms.
                          <img src={Anima} className="App-logo" alt="icon"/>
                           mobile apps portfolioWe bring skills from other disciplines: animation & motion, typography, information architecture, data science, agile methodology, design thinking and marketing to deliver holistic product experiences.
                          </h4>
                        </div>
                        <div className="col-lg-2 col-md-2 col-sm-2 col-xs-2 mb-2">

                        </div>
                    </div>
                </div>
                <div className="container fluid" style={{marginTop:"100px"}}>
                    <div className="row">
                        <div class="col-lg-6 col-md-6 col-sm-12 col-xs-12 mb-12 headingfont2">
                            <div >
                            [HEALTH & FITNESS / SOCIAL / LOCATION]
                            </div>
                            <div className="row">
                                <div className="col-sm-12 col-xs-12 mb-12">
                            <h4 style={{fontSize:"15px", fontFamily:"", fontStyle:"normal", fontWeight:"700",lineHeight:"31px" , color:"rgba(0, 0, 0, 0.9)"}}>
                            RUNWITHME
                            </h4>
                            
                            <br/><br/><br/><br/><br/><br/>
                            
                            </div>
                            </div>
                            
                            <div class="d-sm-none d-none">
                            <div id="vl">
                            </div>
                            </div>
                                <div className="row">
                                    <div className="col-sm-12 col-xs-12 mb-12">
                                <h2 style={{fontSize:"13px", fontFamily:"TenbyStencil-Medium", fontStyle:"normal", fontWeight:"400",lineHeight:"23px" , color:"rgba(0, 0, 0, 0.9),",marginLeft:"70px",marginTop:"-100px"}}>RunWithMe mobile app lets you take a walk or run with friends, even if you're not together. Easily stay connected using the GPS location map to track each other's path. This offers an added feature of being able to track a friend or loved one's journey to ensure that they make it home safely.</h2>
                            </div>
                            </div>
                          
                             <div class="Grid-content--dim set-content--alignment" style={{padding: "40px 0" ,  marginRight: "auto" , fontFamily:"Gilroy-Black"}}>					
                            <a class="anchor" href=""
                            onClick={()=>history.push("/Components/main")}
                            >Case Study</a>
					        </div> 
                            {/* <button  onClick={()=>history.push("/Components/main")}>Next Step</button> */}
                        </div>
                        <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12 mb-12">
                        <img src={logo} class="img-fluid text-center" alt="Responsive image" style={{maxWidth:"100%", height:"auto" ,display:"flux" , margin:"auto"}}/>
                        </div>
                    </div>
                </div>
                <div className="container-fluid">
                   <hr style={{marginTop:"100px" , width:"80%" , textAlign:"center"}}/>
                </div>


{/* <div class="Grid Grid--full small-Grid--1of2 Grid--justifySpaceAround">
<div class="Grid-cell">
					<h4>[Health &amp; Fitness / SOCIAL / LOCATION]</h4>
					<h3>RunWithMe</h3>
					<p class="Grid-content--dim vertical--line">
						RunWithMe mobile app lets you take a walk or run with friends, even if you're not together. Easily 
						stay connected using the GPS location map to track each other's path. 
						This offers an added feature of being able to track a friend or loved 
						one's journey to ensure that they make it home safely. 
					</p>
					<div class="Grid-content--dim set-content--alignment" style={{padding: "40px 0", marginRight: "auto"}}>					
							<a class="anchor" href="./runwithme-case-study">Case Study</a>
					</div>
				</div>
                <div class="Grid-cell" style={{paddingTop: "50px"}}>
                <img src={logo} class="img-fluid text-center" alt="Responsive image" style={{maxWidth:"100%", height:"auto" ,display:"flux" , margin:"auto"}}/>
                </div>

                </div> */}
                    {/* //second  */}

                    <div className="container fluid" style={{marginTop:"100px"}}>
                    <div className="row">
                       
                        <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12 mb-12">
                        <img src={iphone} class="img-fluid text-center" alt="Responsive image" style={{maxWidth:"100%", height:"auto" ,display:"flux" , margin:"auto"}}/>
                        </div>
                        <div class="col-lg-6 col-md-6 col-sm-12 col-xs-12 mb-12 headingfont2">
                            <div >
                            [HEALTH & FITNESS / SOCIAL / LOCATION]
                            </div>
                            <div className="row">
                                <div className="col-sm-12 col-xs-12 mb-12">
                            <h4 style={{fontSize:"15px", fontFamily:"", fontStyle:"normal", fontWeight:"700",lineHeight:"31px" , color:"rgba(0, 0, 0, 0.9)"}}>
                            RUNWITHME
                            </h4><br/><br/><br/><br/><br/><br/>
                            </div>
                            </div>
                            <div class="d-sm-none d-none">
                            <div id="vl">
                            </div>
                            </div>
                            <div>
                                <div className="row">
                                    <div className="col-sm-12 col-xs-12 mb-12">
                                <h2 style={{fontSize:"13px", fontFamily:"TenbyStencil-Medium", fontStyle:"normal", fontWeight:"400",lineHeight:"23px" , color:"rgba(0, 0, 0, 0.9),",marginLeft:"70px",marginTop:"-100px"}}>RunWithMe mobile app lets you take a walk or run with friends, even if you're not together. Easily stay connected using the GPS location map to track each other's path. This offers an added feature of being able to track a friend or loved one's journey to ensure that they make it home safely.</h2>
                            </div>
                            </div>
                            </div> 
                              <div class="Grid-content--dim set-content--alignment" style={{padding: "40px 0" ,  marginRight: "auto" , fontFamily:"Gilroy-Black"}}>					
                            <a class="anchor" href=""
                            onClick={()=>history.push("/Components/main")}
                            >Case Study</a>
					        </div> 
                        </div>
                    </div>
                </div>
                <div className="container-fluid">
                   <hr style={{marginTop:"100px" , width:"80%" , textAlign:"center"}}/>
                </div>
                {/* Third */}


                <div className="container fluid" style={{marginTop:"100px"}}>
                    <div className="row">
                        <div class="col-lg-6 col-md-6 col-sm-12 col-xs-12 mb-12 headingfont2">
                            <div >
                            [HEALTH & FITNESS / SOCIAL / LOCATION]
                            </div>
                            <div className="row">
                                <div className="col-sm-12 col-xs-12 mb-12">
                            <h4 style={{fontSize:"15px", fontFamily:"", fontStyle:"normal", fontWeight:"700",lineHeight:"31px" , color:"rgba(0, 0, 0, 0.9)"}}>
                            RUNWITHME
                            </h4><br/><br/><br/><br/><br/><br/>
                            </div>
                            </div>
                            <div class="d-sm-none d-none">
                            <div id="vl">
                            </div>
                            </div>
                            <div>
                                <div className="row">
                                    <div className="col-sm-12 col-xs-12 mb-12">
                                <h2 style={{fontSize:"13px", fontFamily:"TenbyStencil-Medium", fontStyle:"normal", fontWeight:"400",lineHeight:"23px" , color:"rgba(0, 0, 0, 0.9),",marginLeft:"70px",marginTop:"-100px"}}>RunWithMe mobile app lets you take a walk or run with friends, even if you're not together. Easily stay connected using the GPS location map to track each other's path. This offers an added feature of being able to track a friend or loved one's journey to ensure that they make it home safely.</h2>
                            </div>
                            </div>
                            </div> 
                            <div class="Grid-content--dim set-content--alignment" style={{padding: "40px 0" ,  marginRight: "auto" , fontFamily:"Gilroy-Black"}}>					
                            <a class="anchor" href=""
                            onClick={()=>history.push("/Components/main")}
                            >Case Study</a>
					        </div>  
                        </div>
                        <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12 mb-12">
                        <img src={third} class="img-fluid text-center" alt="Responsive image" style={{maxWidth:"100%", height:"auto" ,display:"flux" , margin:"auto"}}/>
                        </div>
                    </div>
                </div>
                <div className="container-fluid">
                   <hr style={{marginTop:"100px" , width:"80%" , textAlign:"center"}}/>
                </div>

                {/* forth */}

                <div className="container fluid" style={{marginTop:"100px"}}>
                    <div className="row">
                       
                        <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12 mb-12">
                        <img src={forth} class="img-fluid text-center" alt="Responsive image" style={{maxWidth:"100%", height:"auto" ,display:"flux" , margin:"auto"}}/>
                        </div>
                        <div class="col-lg-6 col-md-6 col-sm-12 col-xs-12 mb-12 headingfont2">
                            <div >
                            [HEALTH & FITNESS / SOCIAL / LOCATION]
                            </div>
                            <div className="row">
                                <div className="col-sm-12 col-xs-12 mb-12">
                            <h4 style={{fontSize:"15px", fontFamily:"", fontStyle:"normal", fontWeight:"700",lineHeight:"31px" , color:"rgba(0, 0, 0, 0.9)"}}>
                            RUNWITHME
                            </h4><br/><br/><br/><br/><br/><br/>
                            </div>
                            </div>
                            <div class="d-sm-none d-none">
                            <div id="vl">
                            </div>
                            </div>
                            <div>
                                <div className="row">
                                    <div className="col-sm-12 col-xs-12 mb-12">
                                <h2 style={{fontSize:"13px", fontFamily:"TenbyStencil-Medium", fontStyle:"normal", fontWeight:"400",lineHeight:"23px" , color:"rgba(0, 0, 0, 0.9),",marginLeft:"70px",marginTop:"-100px"}}>RunWithMe mobile app lets you take a walk or run with friends, even if you're not together. Easily stay connected using the GPS location map to track each other's path. This offers an added feature of being able to track a friend or loved one's journey to ensure that they make it home safely.</h2>
                            </div>
                            </div>
                            </div> 
                            <div class="Grid-content--dim set-content--alignment" style={{padding: "40px 0" ,  marginRight: "auto" , fontFamily:"Gilroy-Black"}}>					
                            <a class="anchor" href=""
                            onClick={()=>history.push("/Components/main")}
                            >Case Study</a>
					        </div>  
                        </div>
                    </div>
                </div>
                <div className="container-fluid">
                   <hr style={{marginTop:"100px" , width:"80%" , textAlign:"center"}}/>
                </div>
                {/* Fifth */}
                <div className="container fluid" style={{marginTop:"100px"}}>
                    <div className="row">
                        <div class="col-lg-6 col-md-6 col-sm-12 col-xs-12 mb-12 headingfont2">
                            <div >
                            [HEALTH & FITNESS / SOCIAL / LOCATION]
                            </div>
                            <div className="row">
                                <div className="col-sm-12 col-xs-12 mb-12">
                            <h4 style={{fontSize:"15px", fontFamily:"", fontStyle:"normal", fontWeight:"700",lineHeight:"31px" , color:"rgba(0, 0, 0, 0.9)"}}>
                            RUNWITHME
                            </h4><br/><br/><br/><br/><br/><br/>
                            </div>
                            </div>
                            <div class="d-sm-none d-none">
                            <div id="vl">
                            </div>
                            </div>
                            <div>
                                <div className="row">
                                    <div className="col-sm-12 col-xs-12 mb-12">
                                <h2 style={{fontSize:"13px", fontFamily:"TenbyStencil-Medium", fontStyle:"normal", fontWeight:"400",lineHeight:"23px" , color:"rgba(0, 0, 0, 0.9),",marginLeft:"70px",marginTop:"-100px"}}>RunWithMe mobile app lets you take a walk or run with friends, even if you're not together. Easily stay connected using the GPS location map to track each other's path. This offers an added feature of being able to track a friend or loved one's journey to ensure that they make it home safely.</h2>
                            </div>
                            </div>
                            </div> 
                            <div class="Grid-content--dim set-content--alignment" style={{padding: "40px 0" ,  marginRight: "auto" , fontFamily:"Gilroy-Black"}}>					
                            <a class="anchor" href=""
                            onClick={()=>history.push("/Components/main")}
                            >Case Study</a>
					        </div>  
                        </div>
                        <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12 mb-12">
                        <img src={fifth} class="img-fluid text-center" alt="Responsive image" style={{maxWidth:"100%", height:"auto" ,display:"flux" , margin:"auto"}}/>
                        </div>
                    </div>
                </div>
                <div className="container-fluid">
                   <hr style={{marginTop:"100px" , width:"80%" , textAlign:"center"}}/>
                </div>
                {/* Sixth */}
                <div className="container fluid" style={{marginTop:"100px"}}>
                    <div className="row">
                       
                        <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12 mb-12">
                        <img src={sixth} class="img-fluid text-center" alt="Responsive image" style={{maxWidth:"100%", height:"auto" ,display:"flux" , margin:"auto"}}/>
                        </div>
                        <div class="col-lg-6 col-md-6 col-sm-12 col-xs-12 mb-12 headingfont2">
                            <div >
                            [HEALTH & FITNESS / SOCIAL / LOCATION]
                            </div>
                            <div className="row">
                                <div className="col-sm-12 col-xs-12 mb-12">
                            <h4 style={{fontSize:"15px", fontFamily:"", fontStyle:"normal", fontWeight:"700",lineHeight:"31px" , color:"rgba(0, 0, 0, 0.9)"}}>
                            RUNWITHME
                            </h4><br/><br/><br/><br/><br/><br/>
                            </div>
                            </div>
                            <div class="d-sm-none d-none">
                            <div id="vl">
                            </div>
                            </div>
                            <div>
                                <div className="row">
                                    <div className="col-sm-12 col-xs-12 mb-12">
                                <h2 style={{fontSize:"13px", fontFamily:"TenbyStencil-Medium", fontStyle:"normal", fontWeight:"400",lineHeight:"23px" , color:"rgba(0, 0, 0, 0.9),",marginLeft:"70px",marginTop:"-100px"}}>RunWithMe mobile app lets you take a walk or run with friends, even if you're not together. Easily stay connected using the GPS location map to track each other's path. This offers an added feature of being able to track a friend or loved one's journey to ensure that they make it home safely.</h2>
                            </div>
                            </div>
                            </div> 
                            <div class="Grid-content--dim set-content--alignment" style={{padding: "40px 0" ,  marginRight: "auto" , fontFamily:"Gilroy-Black"}}>					
                            <a class="anchor" href=""
                            onClick={()=>history.push("/Components/main")}
                            >Case Study</a>
					        </div>  
                        </div>
                    </div>
                </div>
                <div className="container-fluid">
                   <hr style={{marginTop:"100px" , width:"80%" , textAlign:"center"}}/>
                </div>
                {/* Seventh */}

                <div className="container fluid" style={{marginTop:"100px"}}>
                    <div className="row">
                        <div class="col-lg-6 col-md-6 col-sm-12 col-xs-12 mb-12 headingfont2">
                            <div >
                            [HEALTH & FITNESS / SOCIAL / LOCATION]
                            </div>
                            <div className="row">
                                <div className="col-sm-12 col-xs-12 mb-12">
                            <h4 style={{fontSize:"15px", fontFamily:"", fontStyle:"normal", fontWeight:"700",lineHeight:"31px" , color:"rgba(0, 0, 0, 0.9)"}}>
                            RUNWITHME
                            </h4><br/><br/><br/><br/><br/><br/>
                            </div>
                            </div>
                            <div class="d-sm-none d-none">
                            <div id="vl">
                            </div>
                            </div>
                            <div>
                                <div className="row">
                                    <div className="col-sm-12 col-xs-12 mb-12">
                                <h2 style={{fontSize:"13px", fontFamily:"TenbyStencil-Medium", fontStyle:"normal", fontWeight:"400",lineHeight:"23px" , color:"rgba(0, 0, 0, 0.9),",marginLeft:"70px",marginTop:"-100px"}}>RunWithMe mobile app lets you take a walk or run with friends, even if you're not together. Easily stay connected using the GPS location map to track each other's path. This offers an added feature of being able to track a friend or loved one's journey to ensure that they make it home safely.</h2>
                            </div>
                            </div>
                            </div> 
                            <div class="Grid-content--dim set-content--alignment" style={{padding: "40px 0" ,  marginRight: "auto" , fontFamily:"Gilroy-Black"}}>					
                            <a class="anchor" href=""
                            onClick={()=>history.push("/Components/main")}
                            >Case Study</a>
					        </div>  
                        </div>
                        <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12 mb-12" style={{textAlign:"center"}}>
                        <img src={seventh} class="img-fluid text-center" alt="Responsive image" style={{maxWidth:"100%", height:"auto" ,display:"flux" , margin:"auto"}}/>
                        </div>
                    </div>
                </div>
                <div className="container-fluid">
                   <hr style={{marginTop:"100px" , width:"80%" , textAlign:"center"}}/>
                </div>
            </React.Fragment>
         );
    }
}
 
export default Contect;