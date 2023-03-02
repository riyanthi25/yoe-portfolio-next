import React from 'react'
import { Container, Row, Col } from 'reactstrap';
import Link from 'next/link';
import SectionSubtitle from './SectionSubtitle';
import Image from 'next/image';
import classes from '../../styles/about.module.css';
import img03 from '../../public/images/img-03.jpeg'


const About = () => {
    return <section id='about'>
        <Container>
            <Row>
                <Col lg='5' md='5'>
                    <div className="d-flex gap-2 justify-content-around">
                        <div className='d-flex flex-column mb-5'>
                            <div className={`${classes.about__img} ${classes.about__img__box}`}>
                                <Image src={img03} alt="about-img"></Image>
                            </div>
                        </div>
                    </div>

                </Col>


                <Col lg='6' md='6'>
                    <SectionSubtitle subtitle="About Me" />
                    <h3>Sup' Guys!</h3>
                    <p>Someone who loves anything about technology,
                        like to discuss and work grouply with other people.
                        Also the social organizations at school and surrounding environment
                    </p>
                    <div>
                        <div>
                            <h5>Abilities</h5>
                            <h6 className=' d-flex align-items-center gap-3 mt-4 fw-normal'>
                                <span className={`${classes.about__icon}`}><i className="ri-checkbox-circle-fill"></i></span>
                                Think Creative
                            </h6>
                            <h6 className=' d-flex align-items-center gap-3 mt-4 fw-normal'>
                                <span className={`${classes.about__icon}`}><i className="ri-checkbox-circle-fill"></i></span>
                                Responsive
                            </h6>
                        </div>
                        <div>
                            <h6 className=' d-flex align-items-center gap-3 mt-4 fw-normal'>
                                <span className={`${classes.about__icon}`}><i className="ri-checkbox-circle-fill"></i></span>
                                Socialize
                            </h6>
                            <h6 className=' d-flex align-items-center gap-3 mt-4 fw-normal'>
                                <span className={`${classes.about__icon}`}><i className="ri-checkbox-circle-fill"></i></span>
                                Discipline
                            </h6>
                            <Col>
                                <div className={`${classes.about__acv}`}>
                                    <h5>Achievements</h5>
                                    <h6 className=' d-flex align-items-center gap-2 mt-1 fw-normal'>
                                        <span className={`${classes.about__icon}`}><i className="ri-checkbox-circle-fill"></i></span>
                                        1<sup>st</sup> Microsoft Word Competition Junior High School Pentium 7 2019
                                    </h6>
                                    <h6 className=' d-flex align-items-center gap-2 mt-1 fw-normal'>
                                        <span className={`${classes.about__icon}`}><i className="ri-checkbox-circle-fill"></i></span>
                                        3<sup>rd</sup> Microsoft Word Competition Senior High School Ephotech Resman 2022
                                    </h6>
                                    <h6 className=' d-flex align-items-center gap-2 mt-1 fw-normal'>
                                        <span className={`${classes.about__icon}`}><i className="ri-checkbox-circle-fill"></i></span>
                                        2<sup>nd</sup> Essay Writing Walikota Denpasar 2020
                                    </h6>
                                    <h6 className=' d-flex align-items-center gap-2 mt-1 fw-normal'>
                                        <span className={`${classes.about__icon}`}><i className="ri-checkbox-circle-fill"></i></span>
                                        2<sup>nd</sup> Creative Design Poster Digital Competition PGRI Mahadewa 2021
                                    </h6>
                                </div>
                            </Col>
                        </div>
                    </div>
                </Col>
            </Row>
        </Container>
    </section>
}

export default About