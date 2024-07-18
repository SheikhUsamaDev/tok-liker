import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import ClientProfile from './ClientProfile/ClientProfile'

export default function Subscribers() {
    return (
        <div className='subscriber'>
            <div className="imgs">
                <img src="Images/vector2.png" alt="" width='100%' />
            </div>
            <div className="subconent">
                <div className="containers">
                    <Container>
                        <Row>
                            <Col lg='6'>
                                <img src="Images/grow.png" alt="" className='w-100'/>
                            </Col>
                            <Col lg='6'>
                                <div className="growhead">
                                    <img id='growi' src="Images/grow1.png" alt="" />
                                    <h4>Grow TikTok <span>Subscribers</span></h4>
                                </div>
                                <div className="growpra">
                                    <p>Boost your channel's visibility through our community network. Let us know your subscriber goal, and we'll introduce your content to a new audience to help you achieve organic growth.</p>
                                </div>
                                <div className="growclient d-md-flex d-none">
                                    <ClientProfile />
                                    <img id='smallarow1' src="Images/arrow-left.svg" alt="" width='30px' />
                                    <h4>What Our Client Says</h4>
                                </div>
                                <div className="growbtn d-md-flex d-none">
                                    <button>Grow My Tiktok  account </button>
                                </div>
                            </Col>
                        </Row>
                    </Container>

                </div>
                <div className="growth">
                    <Container>
                        <Row>
                            <Col lg='6'>
                                <div className="growhead">
                                    <img id='growi' src="Images/grow1.png" alt="" />
                                    <h4>TikTok growth for <span>Everyone</span></h4>
                                </div>
                                <div className="growpra">
                                    <p>Boost your channel's visibility through our community network. Let us know your subscriber goal, and we'll introduce your content to a new audience to help you achieve organic growth.</p>
                                </div>
                                <div className="growclient d-md-flex d-none">
                                    <ClientProfile />
                                    <img id='smallarow1' src="Images/arrow-left.svg" alt="" width='30px' />
                                    <h4>What Our Client Says</h4>
                                </div>
                                <div className="growbtn d-md-flex d-none">
                                    <button>Grow My Tiktok  account </button>
                                </div>
                            </Col>
                            <Col lg='6'>
                                <img src="Images/growth.png" alt="" className='w-100'/>
                            </Col>
                        </Row>
                    </Container>
                </div>
                <div className="growth">
                    <Container>
                        <Row>
                            <Col lg='5'>
                                <img src="Images/trackorder.png" alt="" width='100%' />
                            </Col>
                            <Col lg='7'>
                                <div className="growhead d-md-flex d-none">
                                    <img id='growi' src="Images/grow1.png" alt="" />
                                    <h4>Track orders in yours <span>DashBoard</span></h4>
                                </div>
                                <div className="growpra">
                                    <p>Boost your channel's visibility through our community network. Let us know your subscriber goal, and we'll introduce your content to a new audience to help you achieve organic growth.</p>
                                </div>
                                <div className="growclient d-md-flex d-none">
                                    <ClientProfile />
                                    <img id='smallarow1' src="Images/arrow-left.svg" alt="" width='30px' />
                                    <h4>What Our Client Says</h4>
                                </div>
                                <div className="growbtn d-md-flex d-none">
                                    <button>Grow My Tiktok  account </button>
                                </div>
                            </Col>

                        </Row>
                    </Container>
                </div>
            </div>
            <div className="imgs">
                <img src="Images/faq-line.png" alt="" width='100%' />
            </div>
            <div className="imgs">
                <img src="Images/wave-up.png" alt="" width='100%' />
            </div>
            <div className="money">
                <div className="growth">
                    <Container>
                        <Row>
                            <Col lg='6'>
                                <img src="Images/left-image.png" alt="" width='100%' />
                            </Col>
                            <Col lg='6'>
                                <div className="growheads">
                                    <img id='growi' src="Images/percent-circle.png" alt="" />
                                    <h4><span>100% </span>Money <br /> back Guarantee</h4>
                                </div>
                                <div className="growpra">
                                    <p>We understand that at times, things may not work out as intended. If for any reason, we are unable to deliver the promised results, rest assured that we will provide a refund for any undelivered services. This is our performance guarantee, and we take it seriously.
                                        <br /> <br />
                                        For any questions, please reach out to us at support@tubekick.co. Our team is dedicated to addressing any concerns you may have and ensuring that you receive the best possible service.</p>
                                </div>
                                {/* <div className="growclient">
                                    <ClientProfile />
                                    <img id='smallarow1' src="Images/arrow-left.svg" alt="" width='30px' />
                                    <h4>What Our Client Says</h4>
                                </div> */}
                                <div className="growbtn">
                                   <a href=''> Read Our full refund policy</a>
                                </div>
                            </Col>

                        </Row>
                    </Container>
                </div>
            </div>
            <div className="imgs">
                <img src="Images/wave-down.png" alt="" width='100%' />
            </div>
        </div>
    )
}
