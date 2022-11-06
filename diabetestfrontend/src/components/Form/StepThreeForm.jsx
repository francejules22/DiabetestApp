import React, {useContext} from 'react';
import FormContext from '../FormContext/formContext';
import { Slide } from 'react-reveal';


export const StepThreeForm = () => {
    const {
        visual,
        setVisual,
        itching,
        setItching,
        irritability,
        setIrritability,
        healing,
        setHealing,
    } = useContext(FormContext);

    return(
        <Slide right>
        <form id="test-form" className="form-wrapper" action="#">
                {/*VISUAL BLURRING*/}
                <div className="form-group">
                       <p className="form-para">Visual Blurring</p>
                       <select name="visual blurring" 
                               value={visual}
                               onChange={(e) => {
                                setVisual(e.target.value);
                               }}
                               className="form-control" required >
                           <option value="">Do you have blurred vision?</option>
                           <option value="1">Yes</option>
                           <option value="0">No</option>
                       </select>
                   </div>


                     {/* ITCHING */}
                     <div className="form-group">
                       <p className="form-para">Itching</p>
                       <select name="itching" 
                               value={itching}
                               onChange={(e) => {
                                setItching(e.target.value);
                               }}
                               className="form-control" required >
                           <option value="">Do you have itching?</option>
                           <option value="1">Yes</option>
                           <option value="0">No</option>
                       </select>
                   </div>


                    {/* IRRITABILITY */}
                    <div className="form-group">
                       <p className="form-para">Irritability</p>
                       <select name="irritability" 
                               value={irritability}
                               onChange={(e) => {
                                setIrritability(e.target.value);
                               }}
                              className="form-control" required >
                           <option value="">Suffering from irritation?</option>
                           <option value="1">Yes</option>
                           <option value="0">No</option>
                       </select>
                   </div>


                    {/* DELAYED HEALING */}
                    <div className="form-group">
                       <p className="form-para">Delayed Healing</p>
                       <select name="delayed healing" 
                               value={healing}
                               onChange={(e) => {
                                setHealing(e.target.value);
                               }}
                               className="form-control" required >
                           <option value="">Is your wound healing delayed?</option>
                           <option value="1">Yes</option>
                           <option value="0">No</option>
                       </select>
                   </div>
           </form>
       </Slide>   
    )
}