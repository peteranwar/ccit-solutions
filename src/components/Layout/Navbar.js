import React, { useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import MainButton from '../shared/MainButton';
import Link from 'next/link';
import Image from 'next/image';

const Navbar = () => {

    const router = useRouter();
    const [colorChange, setColorchange] = useState(false);
    const [openNav, setOpenNav] = useState(false);
    const [showToTopBtn, setShowToTopBtn] = useState(false);

    const changeNavbarColorAndToggleToTopBtn = () => {
        if (window.scrollY >= 60) {
            setColorchange(true);
            setShowToTopBtn(true);
        }
        else {
            setColorchange(false);
            setShowToTopBtn(false);
        }
    };

    useEffect(() => {
        window.addEventListener('scroll', changeNavbarColorAndToggleToTopBtn);
    }, [])

    const scrollUp = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        })
    }

    const headerClasses = () => {
        return (
            `navContainer ${colorChange ? 'navScroll' : ''}`
        )
    }

    return (
        <nav className={headerClasses()}>
            <div className={`menuBtn ${openNav ? 'closeMenu' : ''}`}
                onClick={() => setOpenNav(!openNav)} >
                <div className="btnLine"></div>
                <div className="btnLine"></div>
                <div className="btnLine"></div>
            </div>
            <div className="logo d-block d-lg-none">
                <Link href="/">
                    <Image src="/assets/images/ccit-logo.png" alt='CCIT' quality={100} width={100} height={50} />
                </Link>
            </div>

            <div className='navContent'>
                <div className={`linksContainer d-flex align-items-center ${openNav ? "open-nav" : ''}`}>
                    <div className="container">
                        <div className="row align-items-center flex-column flex-md-row">
                            <div className="col-2">
                                <div className="logo d-none d-lg-block">
                                    <Link href="/">
                                        <Image src="/assets/images/ccit-logo.png" alt='CCIT' quality={100} width={100} height={50} />
                                    </Link>
                                </div>
                            </div>
                            <div className="col-lg-8">
                                <ul className="links list-unstyled align-items-center justify-content-center  m-0">
                                    <li>
                                        <Link href='/' className={`navLink ${router.pathname == "/" ? "active" : ""}`}>
                                            Home
                                        </Link>
                                    </li>

                                    <li>
                                        <Link href='/about-us' className={`navLink ${router.pathname == "/about-us" ? "active" : ""}`}>
                                            About us
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href='/services' className={`navLink ${router.pathname == "/services" ? "active" : ""}`}>
                                            Services
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href='/our-works' className={`navLink ${router.pathname == "/our-works" ? "active" : ""}`}>
                                            Our works
                                        </Link>
                                    </li>
                                    <li>
                                        <a href="https://ccit-blog.sa" target='_blank' className="navLink ">
                                              Blog
                                        </a>
                                    </li>
                                    <li>
                                        <Link href='/contact-us' className={`navLink ${router.pathname == "/contact-us" ? "active" : ""}`}>
                                            Contact us
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                            <div className="col-lg-2 d-flex justify-content-center justify-content-lg-end mt-4 mt-lg-0">
                                    <MainButton isLink linkTo="/contact-us" restClasses="px-3" primary>
                                        CONTACT US
                                    </MainButton>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Navbar