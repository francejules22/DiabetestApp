import React, { useState, useContext } from 'react';
import DiabetesLogo from '../../images/mainLogo.png';
import './inputTest.css';
import { TestLogo } from './inputTestStyleElements';
// import FormContext from '../FormContext/formContext';
// import NegativePredictModal from '../PredictModal/negativePredict'; /*NEGATIVE PREDICTION*/
// import PositivePredictModal from '../PredictModal/positivePredict';  /*POSITIVE PREDICTION*/
import {Slide} from 'react-reveal';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';


const InputTest = () =>  {
  /*To set the input form into multi page*/
  const [page, setPage] = useState(1);

  /*To view the value of inputs when user click next and back button it remains the value in the fields.*/
  //  const {
  //       age, setAge, gender, setGender, polyuria, setPolyuria, polydipsia, setPolydipsia,
  //       weight, setWeight, weakness, setWeakness, polyphagia, setPolyphagia, genital, setGenital,
  //       visual, setVisual, itching, setItching, irritability, setIrritability, healing, setHealing, 
  //       paresis, setParesis, stiffness, setStiffness, alopecia, setAlopecia, obesity, setObesity
  //  } = useContext(FormContext);

   /*Open Modal to show the appropriate components when clicking the button*/
   const [openModal, setOpenModal] = useState(false);

   /*Loading the data*/
   const [isLoading, setIsLoading] = useState(false);

   /*Form Data that user will input*/
   const [formData, setFormData] = useState({
       age: "",
       sex: "",
       polyuria: "",
       polydipsia: "",
       weight: "",
       weakness: "",
       polyphagia: "",
       genital: "",
       visual: "",
       itching: "",
       irritability: "",
       healing: "",
       paresis: "",
       stiffness: "",
       alopecia: "",
       obesity: ""
   });
   /*Result*/
   const [result, setResult] = useState("");
  
  /*Handle Change*/
  const handleChange = (event) => {
    const value = event.target.value;
    const name = event.target.name;
    let inputData = {...formData};
    inputData[name]=value;
    setFormData(inputData);
  }
  
  
  /*Handle Predict Button*/
  const handlePredictClick = (event) => {
    const url =  "http://127.0.0.1:5000/prediction/";
    setIsLoading(true);
    fetch(url,
      {
        headers: {
          'Accept' : 'application/json',
          'Content-type' : 'application/json'
        },
        method: 'POST',
        body: JSON.stringify(formData)
      })
        .then(response => response.json())
        .then(response => {
            setResult(response.result);
            setIsLoading(false);
        });
  }

  /*Handle Cancel Button */
  //  const handleCancelClick = (event) => {
  //     setResult("");
  //  }

  return(
      <div className='inputTest-container'>
         <div className="taketest-logo-box">
             <TestLogo to="/">
               <img src={DiabetesLogo} alt="Diabetes Logo" className="diabetes-logo" />
             </TestLogo>
         </div>
      
   
          <div className="form-container container mt-4">
            <Slide left>
              <header className="form-header">
                    <h1 className="form-content">USER HEALTH DATA</h1>
                    <p id="description" className="description">Please fill in all the required fields for Type II Diabetes Risk Detection using Gradient Boosting Algorithm.</p>
               </header>
             </Slide>

             <div className="input-form-container">
               <p className="step-para">Step {page} of  4</p>

                <form id="test-form" className="form-wrapper" action="" method="post">
                    {
                         page == 1 ? 
                        (
                           <Slide right>
                           <div className="one-form">
                              {/*AGE*/}
                              <div className="form-group">
                                  <label className="form-label" for="name">Age</label>
                                  <input type="number"  
                                         name="age"  
                                         id="age"  
                                         value={formData.age}
                                         onChange= {handleChange}
                                         className="form-control" 
                                         placeholder="Enter your age" required />
                             </div>

                             {/*Sex*/}
                             <div className="form-group">
                                  <p className="form-para">Sex</p>
                                  <select name="sex" 
                                          value={formData.sex}
                                          onChange={handleChange}
                                          className="form-control" required>
                                      <option value=""  disabled selected>Select Sex</option>
                                      <option value="1">Male</option>
                                      <option value="0">Female</option>
                                  </select>
                              </div>

              
                             {/*POLYURIA OR EXCESSIVE URINATION*/}
                             <div className="form-group">
                                 <p className="form-para">Polyuria</p>
                                 <select name="polyuria"
                                         value={formData.polyuria}
                                         onChange= {handleChange}
                                         className="form-control" required >
                                     <option value=""  disabled selected>Do you urinate excessively?</option>
                                     <option value="1">Yes</option>
                                     <option value="0">No</option>
                                 </select>
                            </div>
                           

                            {/*POLYDIPSIA OR EXCESSIVE THIRST*/}
                            <div className="form-group">
                                <p className="form-para">Polydipsia</p>
                                <select name="polydipsia"
                                        value={formData.polydipsia}
                                        onChange = {handleChange}
                                        className="form-control" required >
                                    <option value=""  disabled selected>Do you feel abnormally thirsty?</option>
                                    <option value="1">Yes</option>
                                    <option value="0">No</option>
                                </select>
                            </div>
                          </div>
                          </Slide>
                        ) 
                        
                        : 
                        
                        page == 2 ? 
                        (
                           <div className="two-form">
                               {/*SUDDEN WEIGHT LOSS*/}
                               <div className="form-group">
                                   <p className="form-para">Sudden Weight Loss</p>
                                   <select name="sudden weight loss" 
                                           value={formData.weight}
                                           onChange={handleChange}
                                           className="form-control" required >
                                       <option value=""  disabled selected>Have you experienced sudden weight loss recently?</option>
                                       <option value="1">Yes</option>
                                       <option value="0">No</option>
                                   </select>
                               </div>
    
            
                               {/*WEAKNESS*/}
                               <div className="form-group">
                                  <p className="form-para">Weakness</p>
                                  <select name="weakness" 
                                          value={formData.weakness}
                                          onChange={handleChange}
                                          className="form-control" required >
                                      <option value=""  disabled selected>Do you feeling weak or fatigued often?</option>
                                      <option value="1">Yes</option>
                                      <option value="0">No</option>
                                  </select>
                              </div>
    
                              {/*POLYPHAGIA OR EXCESSIVE HUNGER*/}
                              <div className="form-group">
                                 <p className="form-para">Polyphagia</p>
                                 <select name="polyphagia" 
                                         value={formData.polyphagia}
                                         onChange={handleChange}
                                         className="form-control" required >
                                     <option value=""  disabled selected>Do you eat excessively?</option>
                                     <option value="1">Yes</option>
                                     <option value="0">No</option>
                                 </select>
                             </div>
                           
                             {/*GENITAL THRUSH*/}
                             <div className="form-group">
                                <p className="form-para">Genital Thrush</p>
                                <select name="genital thrush" 
                                        value={formData.genital}
                                        onChange={handleChange}
                                        className="form-control" required >
                                    <option value=""  disabled selected>Do you have any infections, especially near your genitals and/or mouth?</option>
                                    <option value="1">Yes</option>
                                    <option value="0">No</option>
                                </select>
                            </div>
                          </div>
                        )
                        
                        : 
                        
                        page == 3 ? 
                        (
                          <div className="three-form">
                               {/*VISUAL BLURRING*/}
                               <div className="form-group">
                                      <p className="form-para">Visual Blurring</p>
                                      <select name="visual blurring" 
                                              value={formData.visual}
                                              onChange={handleChange}
                                              className="form-control" required >
                                          <option value=""  disabled selected>Do you feel like your vision has blurred recently?</option>
                                          <option value="1">Yes</option>
                                          <option value="0">No</option>
                                      </select>
                                </div>
    
                      
                                {/* ITCHING */}
                                <div className="form-group">
                                  <p className="form-para">Itching</p>
                                  <select name="itching" 
                                          value={formData.itching}
                                          onChange={handleChange}
                                          className="form-control" required >
                                      <option value=""  disabled selected>Do you face localized and severe itching anywhere on your body?</option>
                                      <option value="1">Yes</option>
                                      <option value="0">No</option>
                                  </select>
                                </div>
    
           
                               {/* IRRITABILITY */}
                               <div className="form-group">
                                  <p className="form-para">Irritability</p>
                                  <select name="irritability" 
                                          value={formData.irritability}
                                          onChange={handleChange}
                                         className="form-control" required >
                                      <option value=""  disabled selected>Do you feel like you have low mood and are irritable?</option>
                                      <option value="1">Yes</option>
                                      <option value="0">No</option>
                                  </select>
                              </div>
          
    
                              {/* DELAYED HEALING */}
                              <div className="form-group">
                                 <p className="form-para">Delayed Healing</p>
                                 <select name="delayed healing" 
                                         value={formData.healing}
                                         onChange={handleChange}
                                         className="form-control" required >
                                     <option value=""  disabled selected>Do you feel that your recent wounds have healed slowly or not healed at all?</option>
                                     <option value="1">Yes</option>
                                     <option value="0">No</option>
                                 </select>
                             </div>
                          </div>
                        )
                        
                        : 
                                
                        (
                          <div className="four-form">
                              {/* PARTIAL PARESIS OR WEAK MUSCLE MOVEMENT */}
                              <div className="form-group">
                                 <p className="form-para">Partial Paresis</p>
                                 <select name="partial paresis" 
                                         value={formData.paresis}
                                         onChange={handleChange}
                                        className="form-control" required >
                                     <option value=""  disabled selected>Have you recently experienced weakening of muscles or a group of muscles?</option>
                                     <option value="1">Yes</option>
                                     <option value="0">No</option>
                                 </select>
                             </div>
                
                             {/* MUSCLE STIFFNESS */}
                             <div className="form-group">
                                <p className="form-para">Muscle Stiffness</p>
                                <select name="muscle stiffness" 
                                        value={formData.stiffness}
                                        onChange={handleChange}
                                        className="form-control" required >
                                    <option value=""  disabled selected>Have you recently experienced cramps, join pains or painful walking?</option>
                                    <option value="1">Yes</option>
                                    <option value="0">No</option>
                                </select>
                            </div>


                           {/* ALOPECIA */}
                           <div className="form-group">
                              <p className="form-para">Alopecia</p>
                              <select name="alopecia" 
                                      value={formData.alopecia}
                                      onChange={handleChange}
                                      className="form-control" required >
                                  <option value=""  disabled selected>Have you recently experienced any hair loss?</option>
                                  <option value="1">Yes</option>
                                  <option value="0">No</option>
                              </select>
                          </div>

      
                         {/* OBESITY */}
                         <div className="form-group">
                             <p className="form-para">Obesity</p>
                             <select name="obesity" 
                                     value={formData.obesity}
                                     onChange={handleChange}
                                     className="form-control" required >
                                 <option value=""  disabled selected>Are you obese?</option>
                                 <option value="1">Yes</option>
                                 <option value="0">No</option>
                             </select>
                          </div>           
                          </div>
                        )
                    }

      
                        <div className="step-btn-box">
                            {/*BACK BUTTON*/}

                            {
                               page > 1 && (
                                <button type="submit" 
                                        className="step-btn" 
                                        onClick={() => {const nextPage = page - 1;
                                        setPage(nextPage);}}>Back</button>
                               )
                            }
           

                            {/*NEXT BUTTON*/}

                            {
                              page < 4 && (
                                <button type="submit" 
                                        className="step-btn" 
                                        onClick={() => {const nextPage = page + 1;
                                        setPage(nextPage);}}>Next</button>
                              )
                            }
                            

                            {/*SUBMIT BUTTON*/}
                            {
                              page == 4 && (
                                <div className="form-btn">
                                    <button type="submit" 
                                        id="submit" 
                                        disabled={isLoading}
                                        className="taketest-btn predictModalBtn"
                                        // onClick={() => {
                                        //   setOpenModal(true);
                                        // }}
                                        onClick={!isLoading ? handlePredictClick : null}>
                                         {isLoading ? 'Making prediction'  :  'Predict' }
                                     </button>
                                </div>
                              )
                            }
                        </div>
                        
                        {/*NEGATIVE PREDICTION*/}
                        {/* {openModal && <NegativePredictModal closeModal={setOpenModal} />} */}

                         {/*POSITIVE PREDICTION*/}
                        {/* {openModal && <PositivePredictModal closeModal={setOpenModal} />} */}

                        {result === "" ? null :
                (<Row>
                    <Col className="result-container">
                        <h5 id="result">{result}</h5>
                    </Col>
                </Row>)
            }

 
                   </form>

           
               </div>
           </div>
        </div>
    );
};
export default InputTest;


