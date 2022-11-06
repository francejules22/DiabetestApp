import React from 'react';
import './predictModal.css';
import NegativeDiabetes from '../../assets/NegativeDiabetes.png';
import {AiFillCloseCircle} from 'react-icons/ai';



function NegativePredictModal ({ closeModal }){
    return(
        <div className="predict-background">
            <div className="predict-container">
                <button onClick={() => closeModal(false)} className="closed-btn"><AiFillCloseCircle /></button>
                <div className="predict-img">
                    <img src={NegativeDiabetes} alt="Predict Image"/>
                </div>
                <div className="predict-content">
                    <p className="predict-para">Based on your results, you have <span className="negative-predict">LOW RISK</span> of having Type II Diabetes.</p>
                </div>
            </div>
        </div>
    )
}
export default NegativePredictModal;