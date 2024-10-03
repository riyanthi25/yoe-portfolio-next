import React from 'react'
import { Container, Row, Col } from 'reactstrap';
import Link from 'next/link';
import SectionSubtitle from './SectionSubtitle';
import Image from 'next/image';
import classes from '../../styles/about.module.css';
import imgAbout from "../../public/images/img-about.jpeg";


const About = () => {
    return (
      <section id="about">
        <Container>
          <Row>
            <Col lg="5" md="5">
              <div className="d-flex gap-2 justify-content-around">
                <div className="d-flex flex-column mb-5 mt-5">
                  <div
                    className={`${classes.about__img} ${classes.about__img__box}`}
                  >
                    <Image src={imgAbout} alt="about-img"></Image>
                  </div>
                </div>
              </div>
            </Col>

            <Col lg="7" md="6" className="mt-5">
              <div>
                <SectionSubtitle subtitle="About Me" />
                <h3>Hello Guys!</h3>
                <p>
                  Someone who loves anything about technology, like to discuss
                  and work grouply with other people. Also the social
                  organizations at school and surrounding environment
                </p>
                <div className="mt-4">
                  <h3>Abilities</h3>
                  <div
                    className="d-flex flex-wrap gap-3"
                    style={{ gap: "20px" }}
                  >
                    <h6 className=" d-flex align-items-center gap-2 fw-normal mr-2">
                      <span className={`${classes.about__icon}`}>
                        <i className="ri-checkbox-circle-fill"></i>
                      </span>
                      Creativity
                    </h6>
                    <h6 className=" d-flex align-items-center gap-2 fw-normal">
                      <span className={`${classes.about__icon}`}>
                        <i className="ri-checkbox-circle-fill"></i>
                      </span>
                      Collaboration
                    </h6>
                    <h6 className=" d-flex align-items-center gap-2 fw-normal">
                      <span className={`${classes.about__icon}`}>
                        <i className="ri-checkbox-circle-fill"></i>
                      </span>
                      Problem Solving
                    </h6>
                    <h6 className=" d-flex align-items-center gap-2 fw-normal">
                      <span className={`${classes.about__icon}`}>
                        <i className="ri-checkbox-circle-fill"></i>
                      </span>
                      Discipline
                    </h6>
                  </div>
                </div>
              </div>

              <div className="mt-4">
                <h3>Award & Certification</h3>
                <h6 className=" d-flex align-items-center gap-2 mt-3 fw-normal">
                  <span className={`${classes.about__icon}`}>
                    <i className="ri-checkbox-circle-fill"></i>
                  </span>
                  Junior Coder - BNSP
                </h6>
                <h6 className=" d-flex align-items-center gap-2 mt-2 fw-normal">
                  <span className={`${classes.about__icon}`}>
                    <i className="ri-checkbox-circle-fill"></i>
                  </span>
                  2<sup>nd</sup> Logo Design Competition SITEFEST
                </h6>
                <h6 className=" d-flex align-items-center gap-2 mt-2 fw-normal">
                  <span className={`${classes.about__icon}`}>
                    <i className="ri-checkbox-circle-fill"></i>
                  </span>
                  3<sup>rd</sup> Microsoft Office Word Competition
                </h6>
                <h6 className=" d-flex align-items-center gap-2 mt-2 fw-normal">
                  <span className={`${classes.about__icon}`}>
                    <i className="ri-checkbox-circle-fill"></i>
                  </span>
                  2<sup>nd</sup> Creative Poster Design Competition
                </h6>
                <h6 className=" d-flex align-items-center gap-2 mt-2 fw-normal">
                  <span className={`${classes.about__icon}`}>
                    <i className="ri-checkbox-circle-fill"></i>
                  </span>
                  Dasar Pemrograman JavaScript - Dicoding
                </h6>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    );
}

export default About
