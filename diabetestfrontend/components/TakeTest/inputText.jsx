import React, { useState } from "react"
import DiabetesLogo from "../../images/mainLogo.png"
import "./inputTest.css"
import "./predictModal.css"
import { TestLogo } from "./inputTestStyleElements"
import { Slide } from "react-reveal"
import { axiosRequest } from "api"
import swal from "sweetalert2"
import { useNavigate } from "react-router-dom"
import NegativeDiabetes from "../../assets/NegativeDiabetes.png"
import PositiveDiabetes from "../../assets/PositiveDiabetes.png"


const initialState = {
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
  obesity: "",
}

const InputTest = () => {

  /*navigate*/
  const navigate = useNavigate()

  const [data, setData] = useState(null)

  /*Loading the data*/
  const [isLoading, setIsLoading] = useState(false)

  /*Form Data that user will input*/
  const [formData, setFormData] = useState(initialState)


  /*Handle Change*/
  const handleChange = (event) => {
    const { name, value } = event.target
    setFormData((prevState) => ({ ...prevState, [name]: value }))
  }

  /*Handle Predict Button*/
  const handlePredictClick = async (event) => {
    event.preventDefault()
    try {
      const response = await axiosRequest.post("/predict_api", formData)

      if (response.status === 200) {
        swal
          .fire({
            html: ` 
          <div className="predict-img">
              <img style="width: 12rem; height: 12rem; @media (min-width: 320px) { width: 5rem; height: 7rem; }" src=${
                response.data?.prediction ? PositiveDiabetes : NegativeDiabetes
              } alt="Predict Image" />
          </div>
              <div className="predict-content">
              <p className="predict-para" style="padding-top: 10px;">
                  Based on your results, you have
                  <b style="color:${
                    response.data?.prediction ? "#f60f19" : "#016711"
                  }">${response.data.message}</b> of having Type II
                  Diabetes.
              </p>
          </div>
        `,
            confirmButtonText: "Test again",
            showCancelButton: true,
          })
          .then((result) => {
            if (result.isConfirmed) {
              handleCancelClick()
            } else {
              navigate("/")
            }
          })
      }
    } catch (error) {
      console.log(error)
      if (error.response.status === 500) {
        swal.fire({
          title: "Oops!",
          text: "You need to answer all the questions to proceed.",
          icon: "warning",
        })
      }
    }
  }

  /*Handle Cancel Button */
  const handleCancelClick = () => {
    setFormData(initialState)
  }

  return (
    <div className="inputTest-container">
      <div className="taketest-logo-box">
        <TestLogo to="/">
          <img
            src={DiabetesLogo}
            alt="Diabetes Logo"
            className="diabetes-logo"
          />
        </TestLogo>
      </div>

      <div className="form-container">
        <Slide left>
          <header className="form-header">
            <h1 className="form-content">USER HEALTH DATA</h1>
            <p id="description" className="description">
              Please fill in all the required fields for Type II Diabetes Risk
              Detection using Gradient Boosting Algorithm.
            </p>
          </header>
        </Slide>

        <Slide right>
          <form
            id="test-form"
            className="form-wrapper"
            action="#"
            method="post"
          >
            {/*AGE*/}
            <div className="form-group">
              <label className="form-label" for="name">
                Age
              </label>
              <input
                type="number"
                name="age"
                id="age"
                value={formData.age}
                onChange={handleChange}
                className="form-control"
                placeholder="Enter your age"
                required
              />
            </div>

            {/*SEX*/}
            <div className="form-group">
              <p className="form-para">Sex</p>
              <select
                name="sex"
                value={formData.sex}
                onChange={handleChange}
                className="form-control"
                required
              >
                <option value="" disabled selected>
                  Select Sex
                </option>
                <option value={1}>Male</option>
                <option value={0}>Female</option>
              </select>
            </div>

            {/*POLYURIA OR EXCESSIVE URINATION*/}
            <div className="form-group">
              <p className="form-para">Polyuria</p>
              <select
                name="polyuria"
                value={formData.polyuria}
                onChange={handleChange}
                className="form-control"
                required
              >
                <option value="" disabled selected>
                  Do you urinate excessively?
                </option>
                <option value={1}>Yes</option>
                <option value={0}>No</option>
              </select>
            </div>

            {/*POLYDIPSIA OR EXCESSIVE THIRST*/}
            <div className="form-group">
              <p className="form-para">Polydipsia</p>
              <select
                name="polydipsia"
                value={formData.polydipsia}
                onChange={handleChange}
                className="form-control"
                required
              >
                <option value="" disabled selected>
                  Do you feel abnormally thirsty?
                </option>
                <option value={1}>Yes</option>
                <option value={0}>No</option>
              </select>
            </div>

            {/*SUDDEN WEIGHT LOSS*/}
            <div className="form-group">
              <p className="form-para">Sudden Weight Loss</p>
              <select
                name="weight"
                value={formData.weight}
                onChange={handleChange}
                className="form-control"
                required
              >
                <option value="" disabled selected>
                  Have you experienced sudden weight loss recently?
                </option>
                <option value={1}>Yes</option>
                <option value={0}>No</option>
              </select>
            </div>

            {/*WEAKNESS*/}
            <div className="form-group">
              <p className="form-para">Weakness</p>
              <select
                name="weakness"
                value={formData.weakness}
                onChange={handleChange}
                className="form-control"
                required
              >
                <option value="" disabled selected>
                  Do you feeling weak or fatigued often?
                </option>
                <option value={1}>Yes</option>
                <option value={0}>No</option>
              </select>
            </div>

            {/*POLYPHAGIA OR EXCESSIVE HUNGER*/}
            <div className="form-group">
              <p className="form-para">Polyphagia</p>
              <select
                name="polyphagia"
                value={formData.polyphagia}
                onChange={handleChange}
                className="form-control"
                required
              >
                <option value="" disabled selected>
                  Do you eat excessively?
                </option>
                <option value={1}>Yes</option>
                <option value={0}>No</option>
              </select>
            </div>

            {/*GENITAL THRUSH*/}
            <div className="form-group">
              <p className="form-para">Genital Thrush</p>
              <select
                name="genital"
                value={formData.genital}
                onChange={handleChange}
                className="form-control"
                required
              >
                <option value="" disabled selected>
                  Do you have any infections, especially near your genitals
                  and/or mouth?
                </option>
                <option value={1}>Yes</option>
                <option value={0}>No</option>
              </select>
            </div>

            {/*VISUAL BLURRING*/}
            <div className="form-group">
              <p className="form-para">Visual Blurring</p>
              <select
                name="visual"
                value={formData.visual}
                onChange={handleChange}
                className="form-control"
                required
              >
                <option value="" disabled selected>
                  Do you feel like your vision has blurred recently?
                </option>
                <option value={1}>Yes</option>
                <option value={0}>No</option>
              </select>
            </div>

            {/* ITCHING */}
            <div className="form-group">
              <p className="form-para">Itching</p>
              <select
                name="itching"
                value={formData.itching}
                onChange={handleChange}
                className="form-control"
                required
              >
                <option value="" disabled selected>
                  Do you face localized and severe itching anywhere on your
                  body?
                </option>
                <option value={1}>Yes</option>
                <option value={0}>No</option>
              </select>
            </div>

            {/* IRRITABILITY */}
            <div className="form-group">
              <p className="form-para">Irritability</p>
              <select
                name="irritability"
                value={formData.irritability}
                onChange={handleChange}
                className="form-control"
                required
              >
                <option value="" disabled selected>
                  Do you feel like you have low mood and are irritable?
                </option>
                <option value={1}>Yes</option>
                <option value={0}>No</option>
              </select>
            </div>

            {/* DELAYED HEALING */}
            <div className="form-group">
              <p className="form-para">Delayed Healing</p>
              <select
                name="healing"
                value={formData.healing}
                onChange={handleChange}
                className="form-control"
                required
              >
                <option value="" disabled selected>
                  Do you feel that your recent wounds have healed slowly or not
                  healed at all?
                </option>
                <option value={1}>Yes</option>
                <option value={0}>No</option>
              </select>
            </div>

            {/* PARTIAL PARESIS OR WEAK MUSCLE MOVEMENT */}
            <div className="form-group">
              <p className="form-para">Partial Paresis</p>
              <select
                name="paresis"
                value={formData.paresis}
                onChange={handleChange}
                className="form-control"
                required
              >
                <option value="" disabled selected>
                  Have you recently experienced weakening of muscles or a group
                  of muscles?
                </option>
                <option value={1}>Yes</option>
                <option value={0}>No</option>
              </select>
            </div>

            {/* MUSCLE STIFFNESS */}
            <div className="form-group">
              <p className="form-para">Muscle Stiffness</p>
              <select
                name="stiffness"
                value={formData.stiffness}
                onChange={handleChange}
                className="form-control"
                required
              >
                <option value="" disabled selected>
                  Have you recently experienced cramps, join pains or painful
                  walking?
                </option>
                <option value={1}>Yes</option>
                <option value={0}>No</option>
              </select>
            </div>

            {/* ALOPECIA */}
            <div className="form-group">
              <p className="form-para">Alopecia</p>
              <select
                name="alopecia"
                value={formData.alopecia}
                onChange={handleChange}
                className="form-control"
                required
              >
                <option value="" disabled selected>
                  Have you recently experienced any hair loss?
                </option>
                <option value={1}>Yes</option>
                <option value={0}>No</option>
              </select>
            </div>

            {/* OBESITY */}
            <div className="form-group">
              <p className="form-para">Obesity</p>
              <select
                name="obesity"
                value={formData.obesity}
                onChange={handleChange}
                className="form-control"
                required
              >
                <option value="" disabled selected>
                  Are you obese?
                </option>
                <option value={1}>Yes</option>
                <option value={0}>No</option>
              </select>
            </div>

            <div className="form-btn">
                      <button type="submit" 
                              id="submit" 
                              className="taketest-btn"
                              disabled={isLoading}
                              onClick={!isLoading ? handlePredictClick : null}>{isLoading ? "Making prediction" : "Predict"}</button>
            </div>


            {/* <div className="form-btn">
                      <button type="submit" 
                              id="submit" 
                              className="taketest-btn"
                              disabled={isLoading}
                              onClick={handleCancelClick}>Reset</button>
            </div> */}

      
            {/* <Row>
              <Col>
                <Button
                  block
                  variant="success"
                  disabled={isLoading}
                  onClick={!isLoading ? handlePredictClick : null}
                >
                  {isLoading ? "Making prediction" : "Predict"}
                </Button>
              </Col>
            </Row> */}

          </form>
        </Slide>
      </div>
    </div>
  )
}
export default InputTest
