import React from 'react'
import { Container, Row, Col } from 'reactstrap'
import SectionSubtitle from './SectionSubtitle'

const Portfolio = () => {
    return <section id="portfolio">
        <Container>
            <Row>
                <Col lg="6" md="6"></Col>
                    <SectionSubtitle subtitle='My Projects'/>
                    <h4 className='mt-4'>Some of my Best Projects</h4>

                <Col lg="6" md="6">
                    <div>
                        <button className="secondary__btn">E-Commerce Skincare Website</button>
                        <button className="secondary__btn">Portfolio Web</button>
                    </div>
                </Col>
            </Row>
        </Container>
    </section>
}

export default Portfolio