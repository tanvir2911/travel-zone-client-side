import React from 'react';
import { Carousel } from 'react-bootstrap';
import banner5 from '../../../images/banner/banner-5.png';
import banner6 from '../../../images/banner/banner-6.png';
import banner7 from '../../../images/banner/banner-7.png';


const Banner2 = () => {
    return (
        <>
            <Carousel>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={banner5}
                        alt="Second slide"
                    />

                    <Carousel.Caption>
                        <h3>We are the only ones who can take you anywhere in the lowest cost</h3>

                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={banner6}
                        alt="Third slide"
                    />

                    <Carousel.Caption>
                        <h3>Travel lets you get your inner vision</h3>

                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={banner7}
                        alt="Third slide"
                    />

                    <Carousel.Caption>
                        <h3>Traveling can get you out of your stress</h3>

                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </>
    );
};

export default Banner2;