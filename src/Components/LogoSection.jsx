import React from 'react'
import ClientProfile from './ClientProfile/ClientProfile'
import { Col, Container, Row } from 'react-bootstrap'
export default function LogoSection() {
  return (
    <div className='logosection'>
      <div className="logos d-lg-flex d-none">
        <img id='logo1' src="Images/fox.png" alt="" />
        <img id='logo1' src="Images/usa-today.png" alt="" />
        <img id='logo1' src="Images/google-news.png" alt="" />
        <img id='logo1' src="Images/market-watch.png" alt="" />
        <img id='logo1' src="Images/benzinga.png" alt="" />
      </div>
      <div className="main-content">
        <div className="image d-xl-flex d-none">
          <img src="Images/tiktok-left.png" alt="" />
        </div>
        <div className="content">
          <h4>We help your Tiktok <span>Explode</span></h4>
          <p>Experience unmatched growth with our leading TikTok acceleration service. With years of expertise, we turn profiles into powerhouses.</p>
          <div className="clint d-lg-flex d-none">
            <ClientProfile />
            <img id='smallarow' src="Images/arrow-left.svg" alt="" width='30px' />
            <h4>What Our Client Says</h4>
          </div>
          <div className="accnts">
            <Container>
              <Row>
                <Col lg='3' md="6">
                  <div className="infoo">
                    <h4>542M</h4>
                    <p>FOLLOWERS <br /> AND COUNTING</p>
                  </div>

                </Col>
                <Col lg='3' md="6">
                  <div className="infoo">
                    <h4>54K</h4>
                    <p>ACCOUNTS TRANSFORMED</p>
                  </div>
                </Col>
                <Col lg='3' md="6">
                  <div className="infoo">
                    <h4>243K</h4>
                    <p>VIDEOS <br /> PROMOTED</p>
                  </div>
                </Col>
                <Col lg='3' md="6">
                  <div className="infoo">
                    <h4>178M</h4>
                    <p>LIKES <br /> RECEIVED</p>
                  </div>
                </Col>
              </Row>
            </Container>
          </div>
        </div>
        <div className="images d-xl-flex d-none">
          <img src="Images/tiktok-right.png" alt="" />
        </div>
      </div>

    </div>
  )
}
