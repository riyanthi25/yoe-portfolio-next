import React from 'react';

import { Container } from 'reactstrap';
import classes from './header.module.css';
import Link from "next/link";

const NAV__LINK = [
    {
        path: '/',
        display: 'Home'
    },
    {
        path: '#about',
        display: 'About'
    },
    {
        path: '#project',
        display: 'Projects'
    },
    {
        path: '#contact',
        display: 'Contact'
    },
]


const Header = () => {
    return (
        <header className={`${classes.header}`}>
            <Container>
                <div className={`${classes.nav__wrapper}`}>
                    {/* {===== Navigation Logo =====} */}
                    <div className={`${classes.logo}`}>
                        <h1><span>Yoe</span>lis</h1>
                    </div>
                    {/* {===== Navigation Menu =====} */}
                    <div className={`${classes.navigation}`}>
                        <div className={`${classes.nav__menu}`}>
                            {NAV__LINK.map((item, index) => (
                                <Link href={item.path} key={index}>
                                    {item.display}
                                </Link>
                            ))}

                            <div className={`${classes.nav__right}`}>
                                <p className='d-flex align-items-center gap-2 mb-0'>
                                    {""}
                                <i className="ri-phone-fill"></i> +6281558753036 </p> {""}
                            </div>
                        </div>
                    </div>
                </div>
            </Container>
        </header>
    );
};

export default Header;