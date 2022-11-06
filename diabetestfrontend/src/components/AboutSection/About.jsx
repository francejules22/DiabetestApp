import React from 'react';
import './About.css';
import DiabetesBgThree from '../../assets/aboutImg.png';
import {Fade, Slide} from 'react-reveal';

const About = () => {
    return(
        <>
          <div className="about" id="about">
            <div className="container">
              <Fade left>
                  <div className="about-box-img">
                       <img src={DiabetesBgThree} alt='Diabetes Img' className='about-img'/>
                  </div>
              </Fade>
    
              <Slide top>
                  <div className="about-box">
                       <h2 className="heading-about">About</h2>
                       <h5 className="heading-para2">Type 2 Diabetes Mellitus</h5>
                       <p className="about-para"> Diabetes Mellitus is being viewed as an epidemic in    the Philippines and is the fourth main cause of death    in the Philippines, where one in 14 adults suffer    from this disease with the mortality rate having    increased over the past few years, according to the    Philippine Statistics Authority (PSA).Type 2 diabetes,    as a chronic condition that affects the way tbody    metabolizes sugar. Specifically with type II    diabetes, the body insufficiently using insulin, or    does not produce enough insulin.</p>
                       <p className="about-para">To simplify the  test, only health traits the people would know about themselves by using the health data of diabetes. A  person with  positive in Type 2 Diabetes Mellitus Detector Test is at significant risk for having a type two diabetes.However, only a blood test can determine whether the person acquire type two diabetes or not for an official diagnosis.</p>
                       <button className="about-btn"><a href="https://www.mayoclinic.org/diseases-conditions/type-2-diabetes/symptoms-causes/syc-20351193" rel="noopener" target="_blank" className="read-link">Read More</a></button>
                  </div>
              </Slide>
            </div>
          </div>
        </>
    );
}
export default About;