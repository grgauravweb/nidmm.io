import React from 'react';
import Banner from '../images/banner2.jpeg';
import '../css/banner.css';
const Homebanner = () => {
  return (
    <div>
        <div id="carouselExampleSlidesOnly" className="carousel slide" data-ride="carousel">
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img className="d-block w-100" src={Banner} alt="First slide"/>
      <div className="carousel-caption d-none d-md-block">
        <h1>Trusted Digital Marketing Training Institute In India</h1>
        <p>We at NIDMM will provide you with a better perspective and approach to the new way of learning. With an advanced program and attentive, professional teachers, you will quickly master digital marketing.</p>
      </div>
    </div>
  </div>
</div>
    </div>
  )
}

export default Homebanner