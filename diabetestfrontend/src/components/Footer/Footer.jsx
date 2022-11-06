import React from 'react';
import './Footer.css';
import Logo from '../../assets/Logo.png';
import {BsGithub} from 'react-icons/bs';
import {FaPython} from 'react-icons/fa';
import {IoMdAnalytics} from 'react-icons/io';
import {Slide} from 'react-reveal';

class Footer extends React.Component{
    render(){
        return(
            <div className="footer-container" id='footer'>
                 <Slide bottom>
                  <div className="footer-links">
                       <div className="footer-link-wrapper">
                            <div className="footer-link-items">
                                <h2 className="footer-title">About</h2>
                                <a href="#" className="links">T2DM Disease</a>
                                <a href="#" className="links">T2DM Variables</a>
                                <a href="#" className="links">Diagnosis</a>
                            </div>

                            <div className="footer-link-items">
                                <h2 className="footer-title">How It Works</h2>
                                <a href="#" className="links">Input Data</a>
                                <a href="#" className="links">Click Predict</a>
                                <a href="#" className="links">Interpret Result</a>
                            </div>
                        </div>

                          <div className="footer-link-wrapper">            

                          
                              <div className="footer-link-items">
                                  <h2 className="footer-title">ML Model</h2>
                                  <a href="#" className="links">Existing Algorithm</a>
                                  <a href="#" className="links">Proposed Model</a>
                                  <a href="#" className="links">Accuracy</a>
                              </div>

                              <div className="footer-link-items">
                                  <h2 className="footer-title">Take the Test</h2>
                                  <a href="#" className="links">Test Result</a>
                                  <a href="#" className="links">Percentage</a>
                                  <a href="#" className="links">Suggestion</a>
                              </div>
                          </div>
                    </div>
                   
                   <section className="reference-link">
                        <div className="reference-link-wrap">
                            <div className="footer-logo">
                                <img src={Logo} alt="Footer-Logo" class="diabetest-logo"/>
                            </div>
                            <p className="footer-right">DiabeTest 2022. All right reserved</p>
                            <div className="footer-icons">
                                <a href="#" className="icon-link"><BsGithub /></a>
                                <a href="#" className="icon-link"><FaPython /></a>
                                <a href="#" className="icon-link"><IoMdAnalytics /></a>
                            </div>
                        </div>
                   </section>
                   </Slide>
             </div>
        );
    }
}
export default Footer;

