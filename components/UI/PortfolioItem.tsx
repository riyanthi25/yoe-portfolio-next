import React from "react";
import classes from "../../styles/portfolio-item.module.css";
import Link from "next/link";
import Image from "next/image";

const PortfolioItem = (props) => {
  const { title, img, liveUrl, keyword, more } = props.item;
  return (
    <div className={`${classes.portfolio__item}`}>
      <div className="bg-transparent">
        <h6>{title}</h6>
        {keyword.map((item, index) => (
          <span className={`${classes.portfolio__keyword}`} key={index}>
            {item}
          </span>
        ))}
      </div>
      <div className={`${classes.portfolio__more}`}>{more}</div>
      <div className={`${classes.portfolio__img}`}>
        <Image alt="portfolio-img" src={img} width="380" height="250" />
      </div>
      <div className={`${classes.portfolio__raise} bg-transparent`}>
        <button className="third__btn">
          <Link target="_blank" href={liveUrl}>Visit</Link>
        </button>
      </div>
    </div>
  );
};

export default PortfolioItem;
