import React from 'react';
import '../css/cards.css';
const Cards = () => {
    return (
        <div>
            <div className='container'>
            <div className='row my-5'>
                <div className='card col-lg-12'>
                <div className="text-white text-center d-flex align-items-center rgba-black-strong py-5 px-4 card-image">
                        <div>
                            <h5 className="pink-text"></h5>
                            <h3 className="card-title pt-2"><strong><i className="fas fa-book"></i> Digital Marketing Course</strong></h3>
                            {/* <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellat fugiat, laboriosam, voluptatem,
                                optio vero odio nam sit officia accusamus minus error nisi architecto nulla ipsum dignissimos.
                                Odit sed qui, dolorum!.</p> */}
                            <a className="btn btn-pink"><i className="fas fa-clone left"></i> View project</a>
                        </div>
                    </div>
                </div>
                <div className='card col-lg-6'>
                <div className="text-white text-center d-flex align-items-center rgba-black-strong py-5 px-4 card-image">
                        <div>
                            <h5 className="pink-text"><i className="fas fa-book"></i> Search Engine Optimizaion Course</h5>
                            <h3 className="card-title pt-2"><strong></strong></h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellat fugiat, laboriosam, voluptatem,
                                optio vero odio nam sit officia accusamus minus error nisi architecto nulla ipsum dignissimos.
                                Odit sed qui, dolorum!.</p>
                            <a className="btn btn-pink"><i className="fas fa-clone left"></i> View project</a>
                        </div>
                    </div>
                </div>
                <div className='card col-lg-6'>
                <div className="text-white text-center d-flex align-items-center rgba-black-strong py-5 px-4 card-image">
                        <div>
                            <h5 className="pink-text"><i className="fas fa-book"></i> Pay Per Click Course</h5>
                            <h3 className="card-title pt-2"><strong></strong></h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellat fugiat, laboriosam, voluptatem,
                                optio vero odio nam sit officia accusamus minus error nisi architecto nulla ipsum dignissimos.
                                Odit sed qui, dolorum!.</p>
                            <a className="btn btn-pink"><i className="fas fa-clone left"></i> View project</a>
                        </div>
                    </div>
                </div>
                <div className="col-lg-6 card">
                    <div className="text-white text-center d-flex align-items-center rgba-black-strong py-5 px-4 card-image">
                        <div>
                            <h5 className="pink-text"><i className="fas fa-book"></i> Social Media Optimizaion Course</h5>
                            <h3 className="card-title pt-2"><strong>This is the card title</strong></h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellat fugiat, laboriosam, voluptatem,
                                optio vero odio nam sit officia accusamus minus error nisi architecto nulla ipsum dignissimos.
                                Odit sed qui, dolorum!.</p>
                            <a className="btn btn-pink"><i className="fas fa-clone left"></i> View project</a>
                        </div>
                    </div>
                </div>
                <div className="col-lg-6 card">
                    <div className="text-white text-center d-flex align-items-center rgba-black-strong py-5 px-4 card-image">
                        <div>
                            <h5 className="pink-text"><i className="fas fa-book"></i> Social Media Marketing Course</h5>
                            <h3 className="card-title pt-2"><strong>This is the card title</strong></h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellat fugiat, laboriosam, voluptatem,
                                optio vero odio nam sit officia accusamus minus error nisi architecto nulla ipsum dignissimos.
                                Odit sed qui, dolorum!.</p>
                            <a className="btn btn-pink"><i className="fas fa-clone left"></i> View project</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </div>
    )
}

export default Cards