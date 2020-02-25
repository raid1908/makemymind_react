import React from 'react';
//obrazy:

import Testimonial from '../../assets/illustration_testimonial.svg'

const Opinie = () =>{

    return(
        <section className="opinie">
                <div className="container">
                
                    <h2>Opinie</h2>
                    <div className="carousel" id="carousel">
                        <div className="carousel-container-big">
                            <ul className="slider">
                                <li className="visible">
                                    <div className="carousel-container">
                                        <a className="carousel-control-prev" href="#demo" data-slide="prev">
                                            <i className="fas fa-chevron-left prev"></i>
                                        </a>
                                    <img src={Testimonial} alt="obrazek opinii"></img>
                                    <div className="carousel-txt-container">
                                        <h4>"Najlepsze treningi na jakich byłem!"</h4>
                                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. A beatae, ullam optio dicta non eligendi pariatur? Numquam, omnis explicabo magnam deserunt, quia quisquam quos maxime reprehenderit aperiam ut odit officia!</p>
                                        <p className="person"><span>Jan Nowak</span> | CEO Make My Mind</p>
                                    </div>
                                        <a className="carousel-control-next" href="#demo" data-slide="next">
                                            <i className="fas fa-chevron-right"></i>
                                        </a>                              
                                    </div>
                                </li>
                                <li>
                                    <div className="carousel-container">
                                        <a className="carousel-control-prev" href="#demo" data-slide="prev">
                                            <i className="fas fa-chevron-left"></i>
                                        </a>
                                    <img src={Testimonial} alt="obrazek opinii"></img>
                                    <div className="carousel-txt-container">
                                        <h4>"Najlepsze treningi na jakich byłem!"</h4>
                                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. A beatae, ullam optio dicta non eligendi pariatur? Numquam, omnis explicabo magnam deserunt, quia quisquam quos maxime reprehenderit aperiam ut odit officia!</p>
                                        <p className="person"><span>Jan Nowak</span>| CEO Make My Mind</p>
                                    </div>
                                        <a className="carousel-control-next" href="#demo" data-slide="next">
                                            <i className="fas fa-chevron-right"></i>
                                        </a>                              
                                    </div>
                                </li>
                                <li>
                                    <div className="carousel-container">
                                        <a className="carousel-control-prev" href="#demo" data-slide="prev">
                                            <i className="fas fa-chevron-left"></i>
                                        </a>
                                    <img src={Testimonial} alt="obrazek opinii"></img>
                                    <div className="carousel-txt-container">
                                        <h4>"Najlepsze treningi na jakich byłem!"</h4>
                                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. A beatae, ullam optio dicta non eligendi pariatur? Numquam, omnis explicabo magnam deserunt, quia quisquam quos maxime reprehenderit aperiam ut odit officia!</p>
                                        <p className="person"><span>Jan Nowak</span>| CEO Make My Mind</p>
                                    </div>
                                        <a className="carousel-control-next" href="#demo" data-slide="next">
                                            <i className="fas fa-chevron-right"></i>
                                        </a>                              
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>
    )
}

export default Opinie;