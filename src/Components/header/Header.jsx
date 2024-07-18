import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { Typewriter } from 'react-simple-typewriter'
import ClientProfile from '../ClientProfile/ClientProfile'
export default function Header() {

    return (
        <div className='header'>
            <div className="Nav">
                <div className="img">
                    <img src="Images/logo.png" alt="" />
                    <h4>GMZ AUTOLIKER</h4>
                </div>
                <div className="navbtn">
                    <button>DASHBOARD</button>
                </div>
            </div>
            <div className="textpart">
                <Container>
                    <Row>
                        <Col xl='7'>
                            <div className="text">
                                <h4>I Want more <span style={{ color: 'rgba(215,54,228)' }}> TikTok</span>
                                    <br /> <span style={{ color: 'rgba(215,54,228)' }}>
                                        <Typewriter
                                            words={['Followers', 'Shares', 'Views', 'Likes']}
                                            loop={false}
                                            cursor
                                            cursorStyle='|'
                                            typeSpeed={70}
                                            deleteSpeed={50}
                                            delaySpeed={1000}
                                        />
                                    </span></h4>
                            </div>
                            <div className="inputsection">
                                <div className="input">
                                    <img src="Images/tiktok-icon.svg" alt="" />
                                    <input className='inp' type="text" placeholder='Insert Tiktok username to start...' />
                                    <button id='inpbtn'>GET STARTED AT $1.99</button>
                                </div>
                                <div className="simpletext">
                                    <ul>
                                        
                                        <li> <img src="Images/white-tick.png" alt="" className='me-1'/>Gurenteed Results or It's Free</li>
                                        
                                        <li><img src="Images/white-tick.png" alt="" className='me-1'/>Start growing within 2 days</li>
                                       
                                        <li><img src="Images/white-tick.png" alt="" className='me-1'/>One time Payment</li>
                                    </ul>
                                </div>
                            </div>
                            <div className="profiles">
                                <ClientProfile/>
                                <img src="Images/Autoliker.png" alt="" width='30%' />
                            </div>
                        </Col>
                        <Col xl='5' className="d-xl-flex d-none">
                            <img id='bannerimg' src="Images/hearderbanner.png" alt="" />
                        </Col>
                    </Row>
                </Container>
            </div>
        </div>
    )
}
