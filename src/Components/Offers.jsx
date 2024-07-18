import React from 'react'
import { Card, Col, Container, Row } from 'react-bootstrap'

export default function Offers() {
    return (
        <div className='offers'>
            <div className="offerhead">
                <h4>AutoLiker has more to <span>offer!</span></h4>
            </div>
            <div className="offersbox">
                <Container>
                    <Row>
                        <Col lg='2' sm="4">
                            <Card>
                                <div className="setup">
                                    <img src="Images/YouTube.png" alt="" />
                                    <h4>Youtube</h4>
                                </div>
                            </Card>
                        </Col>
                        <Col lg='2' sm="4">
                            <Card>
                                <div className="setup">
                                    <img src="Images/Twitch.png" alt="" />
                                    <h4>Youtube</h4>
                                </div>
                            </Card>
                        </Col>
                        <Col lg='2' sm="4">
                            <Card>
                                <div className="setup">
                                    <img src="Images/TikTok.png" alt="" width='38%' />
                                    <h4>Youtube</h4>
                                </div>
                            </Card>
                        </Col>
                        <Col lg='2' sm="4">
                            <Card>
                                <div className="setup">
                                    <img src="Images/Instagram.png" alt="" width='38%'/>
                                    <h4>Youtube</h4>
                                </div>
                            </Card>
                        </Col>
                        <Col lg='2' sm="4">
                            <Card>
                                <div className="setup">
                                    <img src="Images/Twitter.png" alt=""  width='37%'/>
                                    <h4>Youtube</h4>
                                </div>
                            </Card>
                        </Col>
                        <Col lg='1' className='d-lg-flex d-none'>
                        <img id='offerarrow' src="Images/arrow-offer.png" alt="" />
                        </Col>
                    </Row>
                </Container>
            </div>

        </div>
    )
}
