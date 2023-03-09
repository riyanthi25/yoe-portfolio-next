import React from 'react'
import classes from '../../styles/skills-item.module.css'
import Image from 'next/image'
import Link from 'next/link'

const SkillsItem = (props) => {
  const { title, img, keyword } = props.item
  return (
    <div className={`${classes.skills__item}`}>
      <div className='bg-transparent'>
        {
          keyword.map((item, index) => (
            <span className={`${classes.skills__keyword}`} key={index}>
              {item}
            </span>
          ))}
      </div>

      <div className={`${classes.skills__img}`}>
        <h3>{title}</h3>
        <Image alt='skills-img' src={img} width="150" height="150" />
      </div>
    </div>
  )
};

export default SkillsItem