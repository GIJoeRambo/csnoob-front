import React from 'react';
import './HomeCarousel.css';

const HomeCarousel = () => {
    let img = '../../../assets/images/background/home_bg.jpg';
    return (
        <div className='col-12 HomeCarousel'>
            <div className='cs_hc_layer'></div>
            <div className='col-10 cs_hc_carousel'>
            <div id="carouselExampleCaptions" className="carousel slide" data-ride="carousel">
                <ol className="carousel-indicators">
                    <li data-target="#carouselExampleCaptions" data-slide-to="0" className="active"></li>
                    <li data-target="#carouselExampleCaptions" data-slide-to="1"></li>
                    <li data-target="#carouselExampleCaptions" data-slide-to="2"></li>
                </ol>
                <div className="carousel-inner">
                    <div className="carousel-item active cs_hc_img_item">
                        <img src={require('../../../assets/images/university/uoa_campus01.jpg')} className="d-block cs_hc_img" alt="..."></img>
                        <div className="carousel-caption d-none d-md-block">
                            <h5>First slide label</h5>
                            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                        </div>
                    </div>
                    <div className="carousel-item cs_hc_img_item">
                        <img src={require('../../../assets/images/background/home_bg.jpg')} className="d-block cs_hc_img" alt="..."></img>
                        <div className="carousel-caption d-none d-md-block">
                            <h5>Second slide label</h5>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                        </div>
                    </div>
                    <div className="carousel-item cs_hc_img_item">
                        <img src={require('../../../assets/images/background/home_bg.jpg')} className="d-block cs_hc_img" alt="..."></img>
                        <div className="carousel-caption d-none d-md-block">
                            <h5>Third slide label</h5>
                            <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                        </div>
                    </div>
                    <div>
                        <a className="carousel-control-prev" href="#carouselExampleCaptions" role="button" data-slide="prev">
                            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span className="sr-only">Previous</span>
                        </a>
                        <a className="carousel-control-next" href="#carouselExampleCaptions" role="button" data-slide="next">
                            <span className="carousel-control-next-icon" aria-hidden="true"></span>
                            <span className="sr-only">Next</span>
                        </a>
                    </div>
                </div>
                </div>
            </div>
        </div>

    );
}

export default HomeCarousel;
