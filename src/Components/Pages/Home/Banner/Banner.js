import React from 'react';
import './Banner'
import laptop from '../../../img/laptop.jpg'

const Banner = () => {
    return (
        
        <div id="carouselExampleSlidesOnly" className="carousel slide" data-ride="carousel">
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img className="d-block w-100" src={laptop} alt="First slide"/>
          </div>
          <div className="carousel-item">
            <img className="d-block w-100" src="..." alt="Second slide"/>
          </div>
          <div className="carousel-item">
            <img className="d-block w-100" src="..." alt="Third slide"/>
          </div>
        </div>
      </div>
    );
};

export default Banner;