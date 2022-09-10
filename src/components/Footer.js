import React from 'react';
import Logo from '../images/logo.png';
import '../css/footer.css';
const Footer = () => {
    return (
        <div>
            <footer>
                <div className='container'>
                <div className='row'>
                    <div className='col-xl-4 col-lg-4'>
                        <img src={Logo} />
                        <p>We denounce with righteous indi gnation and dislike men who are so beguiled and demoralized by the charms of pleasure of your moment, so blinded by desire those who fail weakness.</p>
                        <ul className='list-unstyled social'>
                            <li className='social'><i className="fa fa-facebook"></i></li>
                            <li className='social'><i className="fa fa-instagram"></i></li>
                            <li className='social'><i className="fa fa-twitter"></i></li>
                        </ul>
                    </div>
                    <div className='col-xl-4 col-lg-4'>
                        <h2>Contact Details</h2>
                        <ul className='list-unstyled'>
                            <li><i className="fa fa-map-marker"></i> 524, City Centre Mall, Sector-12,<br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Dwarka, Delhi - 110075, India</li>
                            <li><i className="fa fa-phone"></i> 011-41716004</li>
                            <li><i className="fa fa-envelope"></i> info@nidmm.com</li>
                        </ul>
                    </div>
                    <div className='col-xl-4 col-lg-4'>
                        <h2>Courses</h2>
                        <ul className='list-unstyled course'>
                            <li>Full Digital Marketing Course</li>
                            <li>Search Engine Optimizaion Course</li>
                            <li>Pay Per Click Course</li>
                            <li>Social Media Optimizaion Course</li>
                            <li>Social Media Marketing Course</li>

                        </ul>
                    </div>
                </div>
                </div>
        </footer>
        </div>
  )
}

export default Footer