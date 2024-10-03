import React from 'react'
import SectionSubtitle from './SectionSubtitle';
import { Container, Row, Col } from 'reactstrap';
import Image from 'next/image';
import Link from 'next/link';
import yoeImg from '../../public/images/yoefix.jpeg';
import classes from '../../styles/hero.module.css';

const Hero = () => {
    return <section className={`${classes.hero}`}>
        <Container>
            <Row>
                {/* Hero Content */}
                <Col lg='6' md='6'>
                    <div className={`${classes.hero__content}`}>
                        <SectionSubtitle subtitle='Hello' />
                        <h2 className='mt-2'>I&apos;m Putu Yoeliessya Riyanthi</h2>
                        <h5 className='mb-4'>Undergraduate Information Systems Student</h5>
                        <p>I am a college student at Universitas Terbuka, majoring in Information Systems, with strong skills in web development, including HTML, CSS, JavaScript, TypeScript, and frameworks like Next JS, React JS, Tailwind CSS, etc. Also skilled in digital design, using tools like Adobe Photoshop, Illustrator, and Canva. I&apos;m confident in delivering high-quality results and making a positive impact on both clients and the company.
                        </p>
                        <div className='mt-3 mb-4'>
                            <button className='primary__btn'>
                                <Link target="_blank" href= "https://drive.google.com/file/d/146vNb5RvHld84LL1YsuWxnmxwrZRxHz1/view?usp=share_link">Download CV</Link>
                            </button>
                        </div>
                    </div>
                </Col>

                {/* Hero Image */}
                <Col lg='6' md='6'>
                    <div className={`${classes.hero__img} text-end `}>
                        <Image alt="hero-image" src={yoeImg} width="350" height="350" />

                        <div className={`${classes.hero__skills}`}>
                            <h6>Skills</h6>
                            <span><i className="ri-bar-chart-fill"></i></span>
                            <span><i className="ri-bar-chart-fill"></i></span>
                            <span><i className="ri-bar-chart-fill"></i></span>
                            <span><i className="ri-bar-chart-fill"></i></span>
                            <span><i className="ri-bar-chart-fill"></i></span>
                        </div>

                        <div className={`${classes.hero__experience} d-flex align-items-center gap-3`}>
                            <span><i className="ri-lightbulb-flash-fill"></i></span>
                            <div className='bg-transparent'>
                                <h6>Experience</h6>
                                <h5 className='mb-0'>4 year</h5>
                            </div>
                        </div>
                    </div>
                </Col>
            </Row>
        </Container>
    </section>
}

export default Hero;
