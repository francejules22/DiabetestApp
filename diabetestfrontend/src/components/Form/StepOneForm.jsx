import React, { useContext } from 'react';
import FormContext from '../FormContext/formContext';
import {Slide} from 'react-reveal';

export const StepOneForm = () => {
    const {
        age,
        setAge,
        gender,
        setGender,
        polyuria,
        setPolyuria,
        polydipsia, 
        setPolydipsia
    } = useContext(FormContext);

    return(
        <Slide right>
        <form id="test-form" className="form-wrapper" action="#">
               {/*AGE*/}
               <div className="form-group">
                   <label className="form-label" for="name">Age</label>
                   <input type="number"  
                          name="age"  
                          id="age"  
                          value={age} 
                          onChange={(e) => {
                            setAge(e.target.value);
                          }} 
                          className="form-control" 
                          placeholder="Enter your age" required />
              </div>

              {/*GENDER*/}
              <div className="form-group">
                   <p className="form-para">Gender</p>
                   <select name="gender" 
                           value={gender} 
                           onChange={(e) => { 
                            setGender(e.target.value);
                            }}
                            className="form-control" required >
                       <option value="">Select Gender</option>
                       <option value="1">Male</option>
                       <option value="0">Female</option>
                   </select>
               </div>


               {/*POLYURIA OR EXCESSIVE URINATION*/}
               <div className="form-group">
                   <p className="form-para">Polyuria</p>
                   <select name="polyuria"
                           value={polyuria}
                           onChange={(e) => {
                            setPolyuria(e.target.value);
                           }} 
                           className="form-control" required >
                       <option value="">Do you have Polyuria? (Urinates large amounts of urine)</option>
                       <option value="1">Yes</option>
                       <option value="0">No</option>
                   </select>
              </div>


               {/*POLYDIPSIA OR EXCESSIVE THIRST*/}
               <div className="form-group">
                   <p className="form-para">Polydipsia</p>
                   <select name="polydipsia"
                           value={polydipsia}
                           onChange={(e) => {
                            setPolydipsia(e.target.value)
                           }} 
                           className="form-control" required >
                       <option value="">Do you have Polydipsia? (Feeling of extreme thirstiness)</option>
                       <option value="1">Yes</option>
                       <option value="0">No</option>
                   </select>
               </div>
       </form>   
       </Slide>
    )
}