import React from 'react'
import { Col, Container, Form, Row } from 'react-bootstrap'

export default function Contact() {
    return (
        <div className='contact'>
            <div className="contain">
                <Container>
                    <Row>
                        <Col lg='5'>
                            <div className="cntcthead">
                                <h5>Let’s Talk 👋</h5>
                                <p>We aim to reply to all emails within 12 hours. If you have any questions or doubts, simply get in touch.</p>
                            </div>
                            <div className="ques">
                                <div className="line">
                                    <img src="Images/green-tick.svg" alt="" />
                                    <p>Budget-friendly pricing plans to suit your goals</p>
                                </div>
                                <div className="line">
                                    <img src="Images/green-tick.svg" alt="" />
                                    <p>100% performance guarantee for peace of mind.</p>
                                </div>
                                <div className="line">
                                    <img src="Images/green-tick.svg" alt="" />
                                    <p>Transparent reporting to track progress and results</p>
                                </div>
                                <div className="line">
                                    <img src="Images/green-tick.svg" alt="" />
                                    <p>Easily boost your Tiktok and save time</p>
                                </div>
                                <div className="line">
                                    <img src="Images/green-tick.svg" alt="" />
                                    <p>Enhance your credibility with more followers</p>
                                </div>
                            </div>
                        </Col>
                        <Col lg='7'>
                            <div className="form">
                                <Form>
                                    <div className="inp">
                                        <input type="text"  placeholder='Your Name *'/>
                                        <input type="email"  placeholder='Your Email *'/>
                                        <textarea name="" id="" cols="30" rows="10" placeholder='Your Message *'></textarea>
                                        <button>Submit</button>
                                    </div>
                                </Form>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
        </div>
    )
}
