import React from "react";
import { Container, Row, Col } from "reactstrap";
import Link from "next/link";
import SectionSubtitle from "./SectionSubtitle";
import classes from "../../styles/contact.module.css";
import Form from "../UI/Form"

const Contact = () => {
  return (
    <section id="contact" className={`${classes.contact}`}>
      <Container>
        <Row>
          <Col lg="6" md="6">
            <SectionSubtitle subtitle="Contact" />
            <h3 className="mt-4 mb-4">Get To Know Me</h3>
            <p>
              Leave ur steps right here!
            </p>

            <ul className={`${classes.contact__info__list}`}>
              <li className={`${classes.info__item}`}>
                <span>
                  <i className="ri-map-pin-line"></i>
                </span>
                <Link className={`${classes.info__link}`} target="_blank" href="" >Denpasar, Bali</Link>
              </li>
              <li className={`${classes.info__item}`}>
                <span>
                  <i className="ri-mail-line"></i>
                </span>
                <Link className={`${classes.info__link}`} target="_blank" href="">hanjin.riyanthi.ng@gmail.com</Link>
              </li>
              <li className={`${classes.info__item}`}>
                <span>
                  <i className="ri-phone-line"></i>
                </span>
                <Link className={`${classes.info__link}`} target="_blank" href="https://wa.me/+6285737005452?text=Hello!,%20I%20have%20something%20to%20talk%20to%20you%20about....">+628216290871</Link>
              </li>
            </ul>

            <div className={`${classes.social__links}`}>
              <Link target="_blank" href="https://www.youtube.com/channel/UCeJ0f1pQVxAHsyxX2DjiwgQ">
                <i className="ri-youtube-fill"></i>
              </Link>
              <Link target="_blank" href="https://github.com/riyanthi25">
                <i className="ri-github-fill"></i>
              </Link>
              <Link target="_blank" href="https://www.instagram.com/riyanthi_ng/">
                <i className="ri-instagram-fill"></i>
              </Link>
            </div>
          </Col>
          <Col lg="6" md="6"><Form></Form>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Contact;
