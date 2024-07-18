import React from 'react'
import { Card, div, Container, Row } from 'react-bootstrap'

export default function FooterSection() {
    return (
        <div className='footersection'>
            <div className="footerclr">
                <div className="foteritems">
                    <ul>
                        <li>Privacy Policy</li>
                        <li>Term of use</li>
                        <li>Refund Policy</li>
                    </ul>
                    <Container>
                        <div className='row'>
                            <div className='col-sm col-4' >
                                <Card id='crd' >
                                    <img id='cardss' src="Images/visa.png" alt="" width='100%' />
                                </Card>
                            </div>
                            <div className='col-sm col-4'>
                                <Card id='crd'>
                                    <img id='cardss' src="Images/mastercard.png" alt="" />
                                </Card>
                            </div>
                            <div className='col-sm col-4'>
                                <Card id='crd'>
                                    <img id='cardss' src="Images/apple-pay.png" alt="" />
                                </Card>
                            </div>
                            <div className='col-sm col-4 mt-sm-0 mt-2'>
                                <Card id='crd'>
                                    <img id='cardss' src="Images/google-pay.png" alt="" />
                                </Card>
                            </div>
                            <div className='col-sm col-4 mt-sm-0 mt-2'>
                                <Card id='crd'>
                                    <img id='cardss' src="Images/stripe.png" alt="" />
                                </Card>
                            </div>

                        </div>
                    </Container>
                </div>
                <div className="footerlogo">
                    <img src="Images/logo.png" alt="" />
                    <h4>GMZ AUTOLIKER</h4>
                </div>
                <div className="footerpra">
                    <p><a href=''>© 2023 AutoLiker</a> All rights reserved. We are not endorsed or certified by any of the social media platforms referenced on this site. All logos and trademarks displayed are the property of their respective owners. Images shown are purely illustrative and do not indicate partnerships or affiliations. Use of our website constitutes acceptance of our</p>
                    <p id='pr'>For any questions and support, contact us at support@tubekick.co. We reply in 12-24 hours.u</p>
                </div>
            </div>
        </div>
    )
}
