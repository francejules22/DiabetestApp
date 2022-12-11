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
                                <a href="https://www.cdc.gov/diabetes/basics/type2.html" target="_blank"  rel="noopener" className="links">T2DM Disease</a>
                                <a href="https://www.cdc.gov/diabetes/basics/symptoms.html" target="_blank"  rel="noopener" className="links">Symptoms</a>
                                <a href="https://www.cdc.gov/diabetes/basics/getting-tested.html"  target="_blank"  rel="noopener" className="links">Diagnosis</a>
                            </div>

                            <div className="footer-link-items">
                                <h2 className="footer-title">How It Works</h2>
                                <a href="https://drive.google.com/file/d/1PshvzTONynxeFgHem2Eez9guPwKSwf4h/view?usp=sharing" target="_blank"  rel="noopener" className="links">Input Data</a>
                                <a href="https://drive.google.com/file/d/1lOLX2-r4ELkOUvz252hNk3z7G0joXRrI/view?usp=sharing" target="_blank"  rel="noopener" className="links">Click Predict</a>
                                <a href="https://drive.google.com/file/d/1JvzoyB8Y9EfJq31QCjkGq4LOZK-s6Xxu/view?usp=sharing" target="_blank"   rel="noopener" className="links">Interpret Result</a>
                            </div>
                        </div>

                          <div className="footer-link-wrapper">            

                          
                              <div className="footer-link-items">
                                  <h2 className="footer-title">ML Model</h2>
                                  <a href="https://colab.research.google.com/drive/14DOENxx4708boUssloS5NWspyI5vIJ-8" target="_blank"  rel="noopener" className="links">Existing Algorithm</a>
                                  <a href="https://colab.research.google.com/drive/14DOENxx4708boUssloS5NWspyI5vIJ-8" target="_blank"  rel="noopener" className="links">Proposed Model</a>
                                  <a href="https://colab.research.google.com/drive/14DOENxx4708boUssloS5NWspyI5vIJ-8" target="_blank"  rel="noopener" className="links">Accuracy</a>
                              </div>

                              <div className="footer-link-items">
                                  <h2 className="footer-title">Take the Test</h2>
                                  <a href="https://www.cdc.gov/diabetes/basics/getting-tested.html" target="_blank"  rel="noopener" className="links">Test Result</a>
                                  <a href="https://www.cdc.gov/diabetes/basics/risk-factors.html" target="_blank"  rel="noopener" className="links">Risk Factor</a>
                                  <a href="https://www.cdc.gov/diabetes/prevent-type-2/index.html" target="_blank"  rel="noopener" className="links">Prevention</a>
                              </div>
                          </div>
                    </div>
                   
                   <section className="reference-link">
                        <div className="reference-link-wrap">
                            <div className="footer-logo">
                                <img src={Logo} alt="Footer-Logo" class="diabetestfooter-logo"/>
                            </div>
                            <p className="footer-right">DiabeTest 2022. All right reserved</p>
                            <div className="footer-icons">
                                <a href="https://github.com/francejules22/DiabetestApp" target="_blank"  rel="noopener" className="icon-link"><BsGithub /></a>
                                <a href="https://colab.research.google.com/drive/14DOENxx4708boUssloS5NWspyI5vIJ-8"  target="_blank"  rel="noopener" className="icon-link"><FaPython /></a>
                                <a href="https://colab.research.google.com/drive/1I-mRuPljsflT57B-sgm2iDTCBF3_0xMI" target="_blank"  rel="noopener" className="icon-link"><IoMdAnalytics /></a>
                            </div>
                        </div>
                   </section>
                   </Slide>
             </div>
        );
    }
}
export default Footer;

