import Cookies from "js-cookie";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

import useTranslation from "next-translate/useTranslation";
import MainButton from "../shared/MainButton";

import Animate from "@/components/animation/Animate";
import { fadeDu2 } from "@/lib/animation";

const Navbar = () => {
  const { t } = useTranslation("common");
  const router = useRouter();
  const [colorChange, setColorChange] = useState(false);
  const [openNav, setOpenNav] = useState(false);
  const [showToTopBtn, setShowToTopBtn] = useState(false);

  const inContactUsPage = router.pathname == "/contact-us";
  const inPrivacyPolicyPage = router.pathname == "/privacy-policy";

  const darkNav = [
    "/contact-us",
    "/careers/job/[id]",
    "/privacy-policy",
  ].includes(router.pathname);

  const changeNavbarColorAndToggleToTopBtn = () => {
    if (window.scrollY >= 60) {
      setColorChange(true);
      setShowToTopBtn(true);
    } else {
      setColorChange(false);
      setShowToTopBtn(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", changeNavbarColorAndToggleToTopBtn);
  }, []);

  const scrollUp = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const headerClasses = () => {
    return `navContainer ${colorChange ? "navScroll" : ""} ${darkNav ? "dark-nav" : ""
      }`;
  };

  return (
    <>
      <nav>
        <Animate variants={fadeDu2} className={headerClasses()}>
          <div
            className={`menuBtn ${openNav ? "closeMenu" : ""}`}
            onClick={() => setOpenNav(!openNav)}
          >
            <div className="btnLine"></div>
            <div className="btnLine"></div>
            <div className="btnLine"></div>
          </div>
          <div className="logo d-block d-lg-none">
            <Link href="/">
              <Image
                src="/assets/images/ccit-logo.png"
                alt="CCIT"
                quality={100}
                width={100}
                height={50}
              />
            </Link>
          </div>

          {!inContactUsPage && (
            <div className="contact-us_mob">
              <MainButton
                isLink
                linkTo="/contact-us"
                restClasses="px-3 d-flex d-lg-none"
                primary
              >
                {t("navbar.contact")}
              </MainButton>
            </div>
          )}
          <div className="navContent">
            <div
              className={`linksContainer d-flex align-items-center ${openNav ? "open-nav" : ""
                }`}
            >
              <div className="container">
                <div className="row align-items-center flex-column flex-md-row">
                  <div className="col-2">
                    <div className="logo d-none d-lg-block">
                      <Link href="/">
                        <Image
                          src="/assets/images/ccit-logo.png"
                          alt="CCIT"
                          quality={100}
                          width={100}
                          height={50}
                        />
                      </Link>
                    </div>
                  </div>
                  <div className="col-lg-7">
                    <ul className="links list-unstyled align-items-center justify-content-center  m-0">
                      <li>
                        <Link
                          href="/"
                          className={`navLink ${router.pathname == "/" ? "active" : ""
                            }`}
                        >
                          {t("navbar.home")}
                        </Link>
                      </li>

                      <li>
                        <Link
                          href="/about-us"
                          className={`navLink ${router.pathname == "/about-us" ? "active" : ""
                            }`}
                        >
                          {t("navbar.about")}
                        </Link>
                      </li>
                      <li>
                        <Link
                          href="/careers"
                          className={`navLink ${router.pathname == "/careers" ? "active" : ""
                            }`}
                        >
                          {t("navbar.careers")}
                        </Link>
                      </li>
                      <li>
                        <Link
                          href="/our-works"
                          className={`navLink ${router.pathname == "/our-works" ? "active" : ""
                            }`}
                        >
                          {t("navbar.works")}
                        </Link>
                      </li>
                      {/* <li>
                                            <Link href="/blog" className={`navLink ${router.pathname == "/blog" ? "active" : ""}`}>
                                                {t('navbar.blog')}
                                            </Link>
                                        </li> */}
                      <li>
                        <Link
                          href="/contact-us"
                          className={`navLink ${router.pathname == "/contact-us" ? "active" : ""
                            }`}
                        >
                          {t("navbar.contact")}
                        </Link>
                      </li>
                    </ul>
                  </div>
                  <div className="col-lg-3 d-flex flex-column flex-lg-row align-items-center justify-content-center justify-content-lg-end mt-4 mt-lg-0">
                    {inContactUsPage || inPrivacyPolicyPage ? (
                      ""
                    ) : (
                      <MainButton
                        isLink
                        linkTo="/contact-us"
                        restClasses="px-3 d-none d-lg-flex mx-3"
                        primary
                      >
                        {t("navbar.contact")}
                      </MainButton>
                    )}

                    <MainButton
                      isLink
                      linkTo="/contact-us"
                      restClasses="px-5 mt-4 d-flex d-lg-none my-3"
                      primary
                    >
                      Request a proposal
                    </MainButton>

                    {router.locale === "ar" ? (
                      <div
                        onClick={() => {
                          Cookies.set("lang", "en", { path: "/" });
                          setOpenNav(!openNav);
                        }}
                      >
                        <Link
                          className="fs-6 text-white"
                          href={router.asPath}
                          locale="en"
                        >
                          English
                        </Link>
                      </div>
                    ) : (
                      <div
                        onClick={() => {
                          Cookies.set("lang", "ar", { path: "/" });
                          setOpenNav(!openNav);
                        }}
                      >
                        <Link
                          className="fs-6 text-white"
                          href={router.asPath}
                          locale="ar"
                        >
                          عربي
                        </Link>
                      </div>
                    )}

                    <div className="d-flex d-lg-none justify-content-center mt-5">
                      <a href="https://wa.me/message/3R7SF4MG2S7MP1" target="_blank">
                        <Image src='/assets/images/whatsapp-img.jpeg' alt='whatsapp' className='mx-auto whatsapp-img'
                          width={120} height={50} />
                      </a>ƒ
                    </div>


                  </div>
                </div>
              </div>
            </div>
          </div>
        </Animate>
      </nav>
      <div
        onClick={scrollUp}
        className={`d-flex align-items-center justify-content-center to-top ${showToTopBtn ? "showToTopBtn" : ""
          }`}
      >
        <div className="icon">☝️</div>
      </div>
    </>
  );
};

export default Navbar;
