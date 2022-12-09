import React, { useState } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import {Slide} from 'react-reveal';
import './Tips.css';
import { dataDigitalBestSeller } from './data';
import DiabetesBG from '../../assets/DiabetesBgFive.png';


function App() {
  const [defaultImage, setDefaultImage] = useState({});
  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const handleErrorImage = (data) => {
    setDefaultImage((prev) => ({
      ...prev,
      [data.target.alt]: data.target.alt,
      linkDefault: DiabetesBG,
    }));
  };

  return (
    <div className="tip-container" id="tips">
        <div className="tip-content">
            <Slide right>
                <div className="tip-content-box">
                  <h1 className="plan-title">Diabetes Tips and Recommendation</h1>
                  <p className="plan-para">Showing diabetes tips and recommendation for prevention of Type II Diabetes Mellitus Disease.</p>
                </div>
            </Slide>
        </div>
        
      <Slider {...settings}>
        {dataDigitalBestSeller.map((item) => (
          <div className="card">
            <div className="card-top">
              <img
                src={
                  defaultImage[item.title] === item.title
                    ? defaultImage.linkDefault
                    : item.linkImg
                }
                alt={item.title}
                onError={handleErrorImage}
              />
              <h1 className="tip-title">{item.title}</h1>
            </div>
            <div className="card-bottom">
              <h3 className="tip-para">{item.description}</h3>
              <button className="tip-btn btn-line"><a href={item.link} rel="noreferrer" target="_blank">Read More</a></button>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default App;
