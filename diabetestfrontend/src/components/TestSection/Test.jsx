import React from 'react';
import './Test.css';
import DiabetesBgTwo from '../../assets/DiabetesBgTwo.png';
import { Button }  from '../Button/TestButtonStyle';
import {Slide, Fade} from 'react-reveal';

const Test = () =>{
    return(
        <>
           <div className="test" id="test">
              <div className="container">

                <Slide left>
                     <div className="test-box">
                         <h1 className="test-title">T2DM Disease Risk Detector Test</h1>
                         <h3 className="test-heading">Could you have Type 2 Diabetes?</h3>
                         <h3 className="test-heading">Lets check your health!</h3>
                         <p className="test-para">Hi there, please fill in all the fields and click the button below to get started.</p>
                         <Button className='home-btn' to="/taketest">Take the test</Button>
                     </div>
                </Slide>

               <Fade right>
                    <div className="img-box">
                         <img src={DiabetesBgTwo} alt="Diabetes BgTwo" className="test-img"></img>
                     </div>     
               </Fade>
              </div>
           </div>
        </>
    );
}
export default Test;
