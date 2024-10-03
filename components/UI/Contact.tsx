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
                <Link className={`${classes.info__link}`} target="_blank" href="https://www.google.com/maps/place/Jl.+Mekar+I+No.24,+Pemogan,+Denpasar+Selatan,+Kota+Denpasar,+Bali+80221/@-8.7099976,115.2014326,17z/data=!3m1!4b1!4m6!3m5!1s0x2dd241385f4fa353:0x8c46ededbc9fb91b!8m2!3d-8.7100029!4d115.2036213!16s%2Fg%2F11c1zj93m3" >Jl. Mekar 1 No.24 Pemogan, South Denpasar, Indonesia</Link>
              </li>
              <li className={`${classes.info__item}`}>
                <span>
                  <i className="ri-mail-line"></i>
                </span>
                <Link className={`${classes.info__link}`} target="_blank" href="https://mail.google.com/mail/u/0/?view=cm&tf=1&fs=1&to=putu.riyanthi.ng@gmail.com">putu.riyanthi.ng@gmail.com</Link>
              </li>
              <li className={`${classes.info__item}`}>
                <span>
                  <i className="ri-phone-line"></i>
                </span>
                <Link className={`${classes.info__link}`} target="_blank" href="https://wa.me/+6285737005452?text=Hello!,%20I%20have%20something%20to%20talk%20to%20you%20about....">+6285737005452</Link>
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
