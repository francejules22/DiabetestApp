import React from 'react';
import './Hero.css';
import DiabetesImg from '../../assets/DiabetesBgOne.png';
import Typical from 'react-typical';
import { Button } from '../Button/HomeButtonStyle';
import {Fade, Slide} from 'react-reveal';

const HeroSection = () => {
    return(
        <div className="home-box" id="home">
            <div  className="home-box-container">
            <Slide left>
                <div className="home-box-content">
                    <h1 className="home-heading">Welcome To</h1>
                   
                          <span className="home-title">
                              <h1 className="home-title-heading">
                                 {""}
                                 <Typical
                                   loop={Infinity}
                                   steps={[
                                     "Type 2 Diabetes🩸",
                                     2000,
                                     "Mellitus Risk Detection🔍",
                                     2000,
                                   ]}>
                                  </Typical>
                              </h1>
                          </span>
                       <p className="home-para">DiabeTest is a free app that helps you detect the <span className="highlighted-para">Type 2 Diabetes Mellitus Disease</span> using Machine Learning Algorithm and provides with better results.</p>
                       <Button className='home-btn' to="about">Get Started</Button>
                </div>
            </Slide>
            
               <Fade right>
                   <div className="home-box-img">
                      <img src={DiabetesImg} alt="medical" id="home-img"/>
                   </div>
                </Fade>
            </div>
        </div>
    );
}
export default HeroSection;