import React, {useContext} from 'react';
import FormContext from '../FormContext/formContext';
import { Slide } from 'react-reveal';


export const StepTwoForm = () => {
    const {
        weight,
        setWeight,
        weakness,
        setWeakness,
        polyphagia,
        setPolyphagia,
        genital,
        setGenital
    } = useContext(FormContext);

    return(
        <Slide right>
        <form id="test-form" className="form-wrapper" action="#">
                {/*SUDDEN WEIGHT LOSS*/}
                <div className="form-group">
                       <p className="form-para">Sudden Weight Loss</p>
                       <select name="sudden weight loss" 
                               value={weight}
                               onChange={(e) => {
                                setWeight(e.target.value);
                               }}
                               className="form-control" required >
                           <option value="">Suffered from sudden weight loss?</option>
                           <option value="1">Yes</option>
                           <option value="0">No</option>
                       </select>
                   </div>


                    {/*WEAKNESS*/}
                    <div className="form-group">
                       <p className="form-para">Weakness</p>
                       <select name="weakness" 
                               value={weakness}
                               onChange={(e) => {
                                setWeakness(e.target.value);
                               }}
                               className="form-control" required >
                           <option value="">Suffering from weakness?</option>
                           <option value="1">Yes</option>
                           <option value="0">No</option>
                       </select>
                   </div>

                    {/*POLYPHAGIA OR EXCESSIVE HUNGER*/}
                    <div className="form-group">
                       <p className="form-para">Polyphagia</p>
                       <select name="polyphagia" 
                               value={polyphagia}
                               onChange={(e) => {
                                setPolyphagia(e.target.value);
                               }}
                               className="form-control" required >
                           <option value="">Do you have Polyphagia? (Excessive hunger)</option>
                           <option value="1">Yes</option>
                           <option value="0">No</option>
                       </select>
                   </div>
                  
                    {/*GENITAL THRUSH*/}
                    <div className="form-group">
                       <p className="form-para">Genital Thrush</p>
                       <select name="genital thrush" 
                               value={genital}
                               onChange={(e) => {
                                setGenital(e.target.value);
                               }}
                               className="form-control" required >
                           <option value="">Do you have Genital thrush? (Reddening, Itching, Pain during urination)</option>
                           <option value="1">Yes</option>
                           <option value="0">No</option>
                       </select>
                   </div>
          </form>   
       </Slide>
    )
}