import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'

export default function Works() {
    return (
        <div className='works'>
            <div className="heading">
                <h4>Here's How AutoLiker <span>Works</span></h4>
                <p>Our process is quick and easy! Simply follow <br /> these steps to get started</p>
            </div>
            <div className="workscard">
                <Container>
                    <Row>
                        <Col lg='4'>
                            <img src="Images/item1.png" alt="" />
                            <div className="head">
                                <h4><span>1.</span>Choose Account</h4>
                                <p>Select the TikTok account that you want to boost. Whether it's your personal account or someone else's, our service can help you grow your following and increase your influence.</p>
                            </div>
                        </Col>
                        <Col lg='4'>
                            <img src="Images/item2.png" alt="" />
                            <div className="head">
                                <h4><span>2.</span>Select Package</h4>
                                <p>Customize your campaign and select the number of followers, likes, views, and shares. You can choose which posts you want to promote, giving you full control over your growth strategy.</p>
                            </div>
                        </Col>
                  
                        <Col lg='4'>
                            <img src="Images/item3.png" alt="" />
                            <div className="head">
                                <h4><span>3.</span>Get Results</h4>
                                <p>We start to work on your campaign within 24-48 hours and provide transparent reporting and dedicated support throughout the process. For any questions, simply reach out to us.</p>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
            <div className="workbtn d-md-flex d-none">
                <img src="Images/arrow1.png" alt="" />
                <button>Grow My Tiktok  account 🔥</button>
                <img src="Images/arrow2.png" alt="" />
            </div>
        </div>
    )
}
