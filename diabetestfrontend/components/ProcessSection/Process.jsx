import React from 'react';
import './Process.css';
import InputData from '../../assets/data.png';
import ClickPredict from '../../assets/click.png';
import InterpretResult from '../../assets/result.png';
import {Slide} from 'react-reveal';



const Process = () => {
    return(
        <>
        <div className="process" id="process">
            {/*How It Works Container*/}
            <div className="work-container">
                <Slide right>
                      <div className="work-heading-box"> 
                          <h3 className="work-title">How It Works</h3>
                          <p className="work-para">Shows how the proposed solution works for Type II Diabetes Risk Detection using Gradient Boosting Algorithm.</p>
                      </div>
                </Slide>
              
                <div className="work-box">
                    <div className="work-row">
                        <Slide top>
                            <div className="work-col">
                                 <div className="work-box-content">
                                    <div className="work-img">
                                        <img src={InputData} alt="Input" />
                                    </div>
                                    <div className="work-content">
                                        <h1 className="work-title-content">Input Data</h1>
                                        <p className="work-para-content">The user is required to fill in all the fields in the form. The input data will be protected and secured from unauthorized access.</p>
                                    </div>
                                 </div>
                            </div>
                        </Slide>
                
                        <Slide bottom>
                            <div className="work-col">
                                 <div className="work-box-content">
                                    <div className="work-img">
                                       <img src={ClickPredict} alt="Predict"/>
                                    </div>
                                    <div className="work-content">
                                        <h1 className="work-title-content">Click Predict</h1>
                                        <p className="work-para-content">Using the Gradient Boosting Algorithm, the model will be trained and tested to predict the user's health data.</p>
                                    </div>
                                 </div>
                            </div>
                        </Slide>
                   

                        <Slide top>
                             <div className="work-col">
                                  <div className="work-box-content">
                                     <div className="work-img">
                                        <img src={InterpretResult} alt ="Result"/>
                                     </div>
                                     <div className="work-content">
                                         <h1 className="work-title-content">Interpret Result</h1>
                                         <p className="work-para-content">Based on the model, it shows the user's risk of having Type II Diabetes either low risk or high risk. </p>
                                     </div>
                                  </div>
                             </div>     
                        </Slide>
                    </div>
                </div>
            </div>
         </div>
      </>
   );
}
export default Process;
