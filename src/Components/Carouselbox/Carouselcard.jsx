import React from 'react'
import { Container } from 'react-bootstrap';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import "./Carouselcard.scss"

const Carouselcard = () => {
    const responsive = {
        superLargeDesktop: {
            // the naming can be any, depends on you.
            breakpoint: { max: 2000, min: 1200 },
            items: 5
        },
        desktop: {
            breakpoint: { max: 1199, min: 992 },
            items: 4
        },
        tablet: {
            breakpoint: { max: 991, min: 768 },
            items: 3
        },
        mobile: {
            breakpoint: { max: 767, min: 500 },
            items: 2
        }
    };
    return (
        <div className='layout18'>
            <Container>
                <Carousel responsive={responsive}
                    autoPlay={true}
                    swipeable={true}
                    draggable={true}
                    showDots={false}
                    autoPlaySpeed={100}
                    infinitinfinite={true}
                >
                    <div className='Carousel-list'>
                        <div className='carousel-card'>
                            <div className="Flex-box-profile">
                                <img src="Images/star.svg" alt="" />
                                <div className="Trust-box ms-1">
                                    TrustPilot
                                </div>
                            </div>
                            <p>
                                Sooo gladd I gave them a try after thinking about it for a while. Massive amounts of streams in past two months from their site
                            </p>
                            <div className="Flex-box-footer">

                                <div className="Trust-box ms-1">
                                    Rose
                                </div>
                                <img src="Images/stars2.png" alt="" />
                            </div>
                        </div>
                        <div className='carousel-card'>
                            <div className="Flex-box-profile">
                                <img src="Images/star.svg" alt="" />
                                <div className="Trust-box ms-1">
                                    TrustPilot
                                </div>
                            </div>
                            <p>
                                Sooo gladd I gave them a try after thinking about it for a while. Massive amounts of streams in past two months from their site
                            </p>
                            <div className="Flex-box-footer">

                                <div className="Trust-box ms-1">
                                    Rose
                                </div>
                                <img src="Images/stars2.png" alt="" />
                            </div>
                        </div>
                        <div className='carousel-card'>
                            <div className="Flex-box-profile">
                                <img src="Images/star.svg" alt="" />
                                <div className="Trust-box ms-1">
                                    TrustPilot
                                </div>
                            </div>
                            <p>
                                Sooo gladd I gave them a try after thinking about it for a while. Massive amounts of streams in past two months from their site
                            </p>
                            <div className="Flex-box-footer">

                                <div className="Trust-box ms-1">
                                    Rose
                                </div>
                                <img src="Images/stars2.png" alt="" />
                            </div>
                        </div>
                    </div>

                    <div className='Carousel-list'>
                        <div className='carousel-card'>
                            <div className="Flex-box-profile">
                                <img src="Images/star.svg" alt="" />
                                <div className="Trust-box ms-1">
                                    TrustPilot
                                </div>
                            </div>
                            <p>
                                Sooo gladd I gave them a try after thinking about it for a while. Massive amounts of streams in past two months from their site
                            </p>
                            <div className="Flex-box-footer">

                                <div className="Trust-box ms-1">
                                    Rose
                                </div>
                                <img src="Images/stars2.png" alt="" />
                            </div>
                        </div>
                        <div className='carousel-card'>
                            <div className="Flex-box-profile">
                                <img src="Images/star.svg" alt="" />
                                <div className="Trust-box ms-1">
                                    TrustPilot
                                </div>
                            </div>
                            <p>
                                Sooo gladd I gave them a try after thinking about it for a while. Massive amounts of streams in past two months from their site
                            </p>
                            <div className="Flex-box-footer">

                                <div className="Trust-box ms-1">
                                    Rose
                                </div>
                                <img src="Images/stars2.png" alt="" />
                            </div>
                        </div>
                        <div className='carousel-card'>
                            <div className="Flex-box-profile">
                                <img src="Images/star.svg" alt="" />
                                <div className="Trust-box ms-1">
                                    TrustPilot
                                </div>
                            </div>
                            <p>
                                Sooo gladd I gave them a try after thinking about it for a while. Massive amounts of streams in past two months from their site
                            </p>
                            <div className="Flex-box-footer">

                                <div className="Trust-box ms-1">
                                    Rose
                                </div>
                                <img src="Images/stars2.png" alt="" />
                            </div>
                        </div>
                    </div>

                    <div className='Carousel-list'>
                        <div className='carousel-card'>
                            <div className="Flex-box-profile">
                                <img src="Images/star.svg" alt="" />
                                <div className="Trust-box ms-1">
                                    TrustPilot
                                </div>
                            </div>
                            <p>
                                Sooo gladd I gave them a try after thinking about it for a while. Massive amounts of streams in past two months from their site
                            </p>
                            <div className="Flex-box-footer">

                                <div className="Trust-box ms-1">
                                    Rose
                                </div>
                                <img src="Images/stars2.png" alt="" />
                            </div>
                        </div>
                        <div className='carousel-card'>
                            <div className="Flex-box-profile">
                                <img src="Images/star.svg" alt="" />
                                <div className="Trust-box ms-1">
                                    TrustPilot
                                </div>
                            </div>
                            <p>
                                Sooo gladd I gave them a try after thinking about it for a while. Massive amounts of streams in past two months from their site
                            </p>
                            <div className="Flex-box-footer">

                                <div className="Trust-box ms-1">
                                    Rose
                                </div>
                                <img src="Images/stars2.png" alt="" />
                            </div>
                        </div>
                        <div className='carousel-card'>
                            <div className="Flex-box-profile">
                                <img src="Images/star.svg" alt="" />
                                <div className="Trust-box ms-1">
                                    TrustPilot
                                </div>
                            </div>
                            <p>
                                Sooo gladd I gave them a try after thinking about it for a while. Massive amounts of streams in past two months from their site
                            </p>
                            <div className="Flex-box-footer">

                                <div className="Trust-box ms-1">
                                    Rose
                                </div>
                                <img src="Images/stars2.png" alt="" />
                            </div>
                        </div>
                    </div>

                    <div className='Carousel-list'>
                        <div className='carousel-card'>
                            <div className="Flex-box-profile">
                                <img src="Images/star.svg" alt="" />
                                <div className="Trust-box ms-1">
                                    TrustPilot
                                </div>
                            </div>
                            <p>
                                Sooo gladd I gave them a try after thinking about it for a while. Massive amounts of streams in past two months from their site
                            </p>
                            <div className="Flex-box-footer">

                                <div className="Trust-box ms-1">
                                    Rose
                                </div>
                                <img src="Images/stars2.png" alt="" />
                            </div>
                        </div>
                        <div className='carousel-card'>
                            <div className="Flex-box-profile">
                                <img src="Images/star.svg" alt="" />
                                <div className="Trust-box ms-1">
                                    TrustPilot
                                </div>
                            </div>
                            <p>
                                Sooo gladd I gave them a try after thinking about it for a while. Massive amounts of streams in past two months from their site
                            </p>
                            <div className="Flex-box-footer">

                                <div className="Trust-box ms-1">
                                    Rose
                                </div>
                                <img src="Images/stars2.png" alt="" />
                            </div>
                        </div>
                        <div className='carousel-card'>
                            <div className="Flex-box-profile">
                                <img src="Images/star.svg" alt="" />
                                <div className="Trust-box ms-1">
                                    TrustPilot
                                </div>
                            </div>
                            <p>
                                Sooo gladd I gave them a try after thinking about it for a while. Massive amounts of streams in past two months from their site
                            </p>
                            <div className="Flex-box-footer">

                                <div className="Trust-box ms-1">
                                    Rose
                                </div>
                                <img src="Images/stars2.png" alt="" />
                            </div>
                        </div>
                    </div>

                    <div className='Carousel-list'>
                        <div className='carousel-card'>
                            <div className="Flex-box-profile">
                                <img src="Images/star.svg" alt="" />
                                <div className="Trust-box ms-1">
                                    TrustPilot
                                </div>
                            </div>
                            <p>
                                Sooo gladd I gave them a try after thinking about it for a while. Massive amounts of streams in past two months from their site
                            </p>
                            <div className="Flex-box-footer">

                                <div className="Trust-box ms-1">
                                    Rose
                                </div>
                                <img src="Images/stars2.png" alt="" />
                            </div>
                        </div>
                        <div className='carousel-card'>
                            <div className="Flex-box-profile">
                                <img src="Images/star.svg" alt="" />
                                <div className="Trust-box ms-1">
                                    TrustPilot
                                </div>
                            </div>
                            <p>
                                Sooo gladd I gave them a try after thinking about it for a while. Massive amounts of streams in past two months from their site
                            </p>
                            <div className="Flex-box-footer">

                                <div className="Trust-box ms-1">
                                    Rose
                                </div>
                                <img src="Images/stars2.png" alt="" />
                            </div>
                        </div>
                        <div className='carousel-card'>
                            <div className="Flex-box-profile">
                                <img src="Images/star.svg" alt="" />
                                <div className="Trust-box ms-1">
                                    TrustPilot
                                </div>
                            </div>
                            <p>
                                Sooo gladd I gave them a try after thinking about it for a while. Massive amounts of streams in past two months from their site
                            </p>
                            <div className="Flex-box-footer">

                                <div className="Trust-box ms-1">
                                    Rose
                                </div>
                                <img src="Images/stars2.png" alt="" />
                            </div>
                        </div>
                    </div>

                    <div className='Carousel-list'>
                        <div className='carousel-card'>
                            <div className="Flex-box-profile">
                                <img src="Images/star.svg" alt="" />
                                <div className="Trust-box ms-1">
                                    TrustPilot
                                </div>
                            </div>
                            <p>
                                Sooo gladd I gave them a try after thinking about it for a while. Massive amounts of streams in past two months from their site
                            </p>
                            <div className="Flex-box-footer">

                                <div className="Trust-box ms-1">
                                    Rose
                                </div>
                                <img src="Images/stars2.png" alt="" />
                            </div>
                        </div>
                        <div className='carousel-card'>
                            <div className="Flex-box-profile">
                                <img src="Images/star.svg" alt="" />
                                <div className="Trust-box ms-1">
                                    TrustPilot
                                </div>
                            </div>
                            <p>
                                Sooo gladd I gave them a try after thinking about it for a while. Massive amounts of streams in past two months from their site
                            </p>
                            <div className="Flex-box-footer">

                                <div className="Trust-box ms-1">
                                    Rose
                                </div>
                                <img src="Images/stars2.png" alt="" />
                            </div>
                        </div>
                        <div className='carousel-card'>
                            <div className="Flex-box-profile">
                                <img src="Images/star.svg" alt="" />
                                <div className="Trust-box ms-1">
                                    TrustPilot
                                </div>
                            </div>
                            <p>
                                Sooo gladd I gave them a try after thinking about it for a while. Massive amounts of streams in past two months from their site
                            </p>
                            <div className="Flex-box-footer">

                                <div className="Trust-box ms-1">
                                    Rose
                                </div>
                                <img src="Images/stars2.png" alt="" />
                            </div>
                        </div>
                    </div>

                    <div className='Carousel-list'>
                        <div className='carousel-card'>
                            <div className="Flex-box-profile">
                                <img src="Images/star.svg" alt="" />
                                <div className="Trust-box ms-1">
                                    TrustPilot
                                </div>
                            </div>
                            <p>
                                Sooo gladd I gave them a try after thinking about it for a while. Massive amounts of streams in past two months from their site
                            </p>
                            <div className="Flex-box-footer">

                                <div className="Trust-box ms-1">
                                    Rose
                                </div>
                                <img src="Images/stars2.png" alt="" />
                            </div>
                        </div>
                        <div className='carousel-card'>
                            <div className="Flex-box-profile">
                                <img src="Images/star.svg" alt="" />
                                <div className="Trust-box ms-1">
                                    TrustPilot
                                </div>
                            </div>
                            <p>
                                Sooo gladd I gave them a try after thinking about it for a while. Massive amounts of streams in past two months from their site
                            </p>
                            <div className="Flex-box-footer">

                                <div className="Trust-box ms-1">
                                    Rose
                                </div>
                                <img src="Images/stars2.png" alt="" />
                            </div>
                        </div>
                        <div className='carousel-card'>
                            <div className="Flex-box-profile">
                                <img src="Images/star.svg" alt="" />
                                <div className="Trust-box ms-1">
                                    TrustPilot
                                </div>
                            </div>
                            <p>
                                Sooo gladd I gave them a try after thinking about it for a while. Massive amounts of streams in past two months from their site
                            </p>
                            <div className="Flex-box-footer">

                                <div className="Trust-box ms-1">
                                    Rose
                                </div>
                                <img src="Images/stars2.png" alt="" />
                            </div>
                        </div>
                    </div>

                    <div className='Carousel-list'>
                        <div className='carousel-card'>
                            <div className="Flex-box-profile">
                                <img src="Images/star.svg" alt="" />
                                <div className="Trust-box ms-1">
                                    TrustPilot
                                </div>
                            </div>
                            <p>
                                Sooo gladd I gave them a try after thinking about it for a while. Massive amounts of streams in past two months from their site
                            </p>
                            <div className="Flex-box-footer">

                                <div className="Trust-box ms-1">
                                    Rose
                                </div>
                                <img src="Images/stars2.png" alt="" />
                            </div>
                        </div>
                        <div className='carousel-card'>
                            <div className="Flex-box-profile">
                                <img src="Images/star.svg" alt="" />
                                <div className="Trust-box ms-1">
                                    TrustPilot
                                </div>
                            </div>
                            <p>
                                Sooo gladd I gave them a try after thinking about it for a while. Massive amounts of streams in past two months from their site
                            </p>
                            <div className="Flex-box-footer">

                                <div className="Trust-box ms-1">
                                    Rose
                                </div>
                                <img src="Images/stars2.png" alt="" />
                            </div>
                        </div>
                        <div className='carousel-card'>
                            <div className="Flex-box-profile">
                                <img src="Images/star.svg" alt="" />
                                <div className="Trust-box ms-1">
                                    TrustPilot
                                </div>
                            </div>
                            <p>
                                Sooo gladd I gave them a try after thinking about it for a while. Massive amounts of streams in past two months from their site
                            </p>
                            <div className="Flex-box-footer">

                                <div className="Trust-box ms-1">
                                    Rose
                                </div>
                                <img src="Images/stars2.png" alt="" />
                            </div>
                        </div>
                    </div>

                    


                </Carousel>
            </Container>
        </div>
    )
}

export default Carouselcard
