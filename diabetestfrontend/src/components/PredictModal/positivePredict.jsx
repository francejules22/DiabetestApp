import React from 'react';
import './predictModal.css';
import PositiveDiabetes from '../../assets/PositiveDiabetes.png';
import {AiFillCloseCircle} from 'react-icons/ai';



function PositivePredictModal ({ closeModal }){
    return(
        <div className="predict-background">
            <div className="predict-container">
                <button onClick={() => closeModal(false)} className="closed-btn"><AiFillCloseCircle /></button>
                <div className="predict-img">
                    <img src={PositiveDiabetes} alt="Predict Image"/>
                </div>
                <div className="predict-content">
                    <p className="predict-para">Based on your results, you have <span className="positive-predict">HIGH RISK</span> of having Type II Diabetes.</p>
                </div>
            </div>
        </div>
    )
}
export default PositivePredictModal;