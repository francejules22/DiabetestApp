import React, { useContext } from 'react';
import FormContext from '../FormContext/formContext';
import { Slide } from 'react-reveal';
import PredictModal from '../OpenModal/predictModal';
import { useState } from 'react';


export const StepFourForm = () => {
   /*Open Modal to show the appropriate components when clicking the button*/
    const [openModal, setOpenModal] = useState(false)

   /*Using use context for the target value*/
    const {
        paresis,
        setParesis,
        stiffness,
        setStiffness,
        alopecia,
        setAlopecia,
        obesity,
        setObesity
    } = useContext(FormContext);

    return(
        <Slide right>
        <form id="test-form" className="form-wrapper" action="#">
             
              
                
                    {/* PARTIAL PARESIS OR WEAK MUSCLE MOVEMENT */}
                    <div className="form-group">
                       <p className="form-para">Partial Paresis</p>
                       <select name="partial paresis" 
                               value={paresis}
                               onChange={(e) => {
                                setParesis(e.target.value);
                               }}
                              className="form-control" required >
                           <option value="">Suffering from Partial Paresis? (weak muscle movement)</option>
                           <option value="1">Yes</option>
                           <option value="0">No</option>
                       </select>
                   </div>


                    {/* MUSCLE STIFFNESS */}
                    <div className="form-group">
                       <p className="form-para">Muscle Stiffness</p>
                       <select name="muscle stiffness" 
                               value={stiffness}
                               onChange={(e) => {
                                setStiffness(e.target.value)
                               }}
                               className="form-control" required >
                           <option value="">Do you have muscle stiffness?</option>
                           <option value="1">Yes</option>
                           <option value="0">No</option>
                       </select>
                   </div>


                    {/* ALOPECIA */}
                    <div className="form-group">
                       <p className="form-para">Alopecia</p>
                       <select name="alopecia" 
                               value={alopecia}
                               onChange={(e) => {
                                setAlopecia(e.target.value)
                               }}
                               className="form-control" required >
                           <option value="">Do you have Alopecia (Patchy hair loss on the head)</option>
                           <option value="1">Yes</option>
                           <option value="0">No</option>
                       </select>
                   </div>


                   {/* OBESITY */}
                   <div className="form-group">
                       <p className="form-para">Obesity</p>
                       <select name="obesity" 
                               value={obesity}
                               onChange={(e) => {
                                 setObesity(e.target.value);
                               }}
                               className="form-control" required >
                           <option value="">Do you have obesity (having an excess amount of body fat)</option>
                           <option value="1">Yes</option>
                           <option value="0">No</option>
                       </select>
                   </div>
                   <div className="form-btn">
                      <button type="submit" 
                              id="submit" 
                              className="taketest-btn predictModalBtn"
                              onClick={() => {
                                setOpenModal(true);
                              }}>Predict</button>
                  </div>
                  {openModal && <PredictModal closeModal={setOpenModal} />}
           </form> 
       </Slide>  
    )
}
