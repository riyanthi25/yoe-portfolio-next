import React from 'react'
import { Container, Row, Col } from 'reactstrap'
import SectionSubtitle from './SectionSubtitle'
import SkillsItem from './SkillsItem'
import classes from '../../styles/skills.module.css'

import skillsData from '../data/skills'

const Skills = () => {
    return <section id="skills">
        <Container>
            <Row>
                <Col lg='6' md='6'>
                    <SectionSubtitle subtitle='Skills' />
                    <h4 className='mt-3 mb-3'>Here's some of my Skills</h4>
                </Col>

                <Col lg='6' md='6'>
                    <div></div>
                </Col>

                {
                    skillsData.map(item => (
                        <Col className={`${classes.skills__col}`} lg='4' md='4' key={item.id}>
                            <SkillsItem item={item} />
                        </Col>
                    ))
                }

            </Row>
        </Container>
    </section>
}

export default Skills