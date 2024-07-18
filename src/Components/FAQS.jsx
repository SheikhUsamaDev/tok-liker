import React from 'react'
import Accordion from 'react-bootstrap/Accordion';

export default function FAQS() {
    return (
        <div className='faqs'>
            <div className="imgs">
                <img src="Images/vactor292.png" alt="" width='100%' />
            </div>
            <div className="faqbg">
                <div className="Faqheadings">
                    <h4>Frequently Asked Questions</h4>
                    <p>We have all the answers to your questions about our TikTok promotion packages, <br /> including pricing, payment methods, order processing times, and more.</p>
                </div>
                <div className="acordan">
                    <Accordion defaultActiveKey={['0']} alwaysOpen>
                        <Accordion.Item eventKey="0">
                            <Accordion.Header>01. How long until I see results?</Accordion.Header>
                            <Accordion.Body>
                                We typically start working on your order within 24-48 hours, but please note that this is the timeframe for beginning the work and not the completion time. Delivery times may vary depending on the size of your order. Smaller orders can often be completed within 2-4 days, while larger orders may take several days or even weeks. If you do not see any changes in your numbers within 48-72 hours, please reach out to us at
                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="2">
                            <Accordion.Header>02. How do I pay?</Accordion.Header>
                            <Accordion.Body>
                                We currently accept credit card payments, and most Visa and Mastercard credit cards are accepted. If your payment fails, we recommend trying a different credit card. Depending on your country and credit card processor, some cards may be considered high risk by payment merchants and thus be rejected.
                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="3">
                            <Accordion.Header>03. How do I buy your service?</Accordion.Header>
                            <Accordion.Body>
                                To get started, search for your TikTok username and select your account. Then choose your campaign goals (followers, views, etc.) and make your payment. Our team will begin working on your order within 24-48 hours.
                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="4">
                            <Accordion.Header>04. Are your services from real users?</Accordion.Header>
                            <Accordion.Body>
                                At Tubekick, we are steadfast in ensuring the utmost safety of your TikTok account. We employ promotional strategies that are meticulously crafted, effective, and risk-averse. Our advice for optimal results is clear - avoid using multiple promotional services concurrently. This approach ensures there are no overlaps and allows for a clear, unambiguous assessment of the impact rendered by our specialized services. <br />
                                Balancing organic growth efforts with strategic promotional interventions is key to fostering a diverse and robust mix of traffic sources, each contributing uniquely to the visibility and popularity of your content. At Tubekick, we’re not just a service – we are a partnership in your growth journey.
                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="5">
                            <Accordion.Header>05. What happens after I purchase?</Accordion.Header>
                            <Accordion.Body>
                                After you finish payment, our team is notified, and we begin distributing your content among our TikTok network within 24-48 hours. You can expect to see the first results within a couple of days, and most smaller campaigns are completed within 1-2 weeks. However, delivery times may vary depending on the size of the campaign.
                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="6">
                            <Accordion.Header>06. Do you have a money-back guarantee?</Accordion.Header>
                            <Accordion.Body>
                                Yes, if we are unable to deliver what you have ordered, we will issue a refund. If you are unsatisfied with your campaign, please email us at
                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="7">
                            <Accordion.Header>07. How can I contact you?</Accordion.Header>
                            <Accordion.Body>
                                If you have any questions, please email us at <br />
                                We typically respond to emails within 24 hours. If you haven‘t heard back from us after 48 hours, please follow up with us.
                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="8">
                            <Accordion.Header>08. Why should I buy your services?</Accordion.Header>
                            <Accordion.Body>
                                The number of fans, likes, and other metrics of your TikTok channel is a common indicator of success and the health of your channel. Boosting these numbers can help increase visibility and social proof for your account, making it more attractive to potential viewers. At Tubekick, we've spent years perfecting our strategies to deliver all views, followers, and engagement in a sustainable, organic way that aligns with the natural growth speed of most TikTok accounts. We also keep your account 100% confidential, so no one will know that you have used our services to boost your profile.
                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="9">
                            <Accordion.Header>09. Do you provide followers from a specific targeted area or country?</Accordion.Header>
                            <Accordion.Body>
                                At this time, we do not offer targeted followers from a specific area or country. However, our team is working on providing targeted followers in the future, and we will update our packages accordingly when this becomes available.
                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="10">
                            <Accordion.Header>10. Do you charge me every month?</Accordion.Header>
                            <Accordion.Body>
                                No, we do not. All payments are one-off and non-recurring, so we only charge you at the time you make a payment. If you wish to launch additional campaigns in the future, you can place another order through our website.
                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="11">
                            <Accordion.Header>11. Is there any risk or downside?</Accordion.Header>
                            <Accordion.Body>
                                At Tubekick, we take great care to ensure the safety and integrity of your TikTok account. Our team of experts uses organic promotion techniques that are compliant with TikTok's policies and guidelines, so you can be confident that your account is in good hands. We have been promoting TikTok accounts since 2019 with great success, and to date, our clients have not reported any negative experiences with our services. However, we always recommend that you exercise caution when using any third-party service and carefully read and follow our guidelines to ensure the best possible results. If you ever have any questions or concerns about our service, please don't hesitate to contact our support team at
                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="12">
                            <Accordion.Header>12. Are there any limitations to the service?</Accordion.Header>
                            <Accordion.Body>
                                Yes, we have some limitations in place to ensure the safety and long-term success of your TikTok account. For example, we do not offer services for accounts that are less than 30 days old or have less than 20 published videos. We also do not offer services for accounts that have already purchased followers or other engagement services from other providers within the last 30 days. Additionally, we do not offer services for accounts that violate TikTok's terms of service or community guidelines.
                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="13">
                            <Accordion.Header>13. What information do you need from me to get started?</Accordion.Header>
                            <Accordion.Body>
                                To get started with our services, we will need your TikTok username and the specific campaign goals that you would like to achieve (such as increasing your followers or views). We do not require your account password or any other sensitive information.
                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="14">
                            <Accordion.Header>14. Is it safe to use your services?</Accordion.Header>
                            <Accordion.Body>
                                Yes, our services are safe to use. We only use organic promotion methods and do not use any bots, fake accounts, or other shady tactics that could put your account at risk. Additionally, we keep your account information and campaign details 100% confidential.
                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="15">
                            <Accordion.Header>15. How do I know if your services are working?</Accordion.Header>
                            <Accordion.Body>
                                You should start to see an increase in your followers, views, or other metrics within a few days of starting your campaign. We also provide regular updates on the progress of your campaign and are available to answer any questions or concerns that you may have along the way.
                            </Accordion.Body>
                        </Accordion.Item>
                    </Accordion>
                </div>
               
            </div>
            <div className="imgs">
                    <img src="Images/faq-line.png" alt="" width='100%' />
                </div>
        </div>
    )
}
