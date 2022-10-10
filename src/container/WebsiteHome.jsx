import React from 'react'
import '../Custom.css'
import '../Normalize.css'

const WebsiteIndex = () => {
    return (
            <>
                <title>National Portal of India - NSPI</title>
                <meta charSet="utf-8" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <meta name="Keywords" content="NSPI" />
                <meta name="Description" content="National Student Portal" />
                <meta
                    property="og:image"
                    content="https://www.w3schools.com/images/w3schools_logo_436_2.png"
                />
                <meta property="og:image:type" content="image/png" />
                <meta property="og:image:width" content={436} />
                <meta property="og:image:height" content={228} />
                <meta property="og:description" content="National Student Portal" />
                <link rel="icon" href="/favicon.ico" type="image/x-icon" />
                <link rel="stylesheet" href="css/normalize.css" />
                <link rel="stylesheet" href="css/custom.css" />
                <link
                    rel="stylesheet"
                    href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css"
                />
                {/*Header*/}
                <header>
                    <div className="container">
                        <div className="header_section">
                            <div className="logo">
                                <a href="home">
                                    <img src="images/nspi-logo.jpg" />
                                </a>
                            </div>
                            <div className="header_logo">
                                <a href="home">
                                    <img src="images/header_logo.jpg" />
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="navigation">
                        <div className="navigation_inner">
                            <ul>
                                <li>
                                    <a href="home">
                                        <img src="images/home.jpg" />
                                    </a>
                                </li>
                                <li>
                                    <a href="/about-us">About NSPI</a>
                                </li>
                                <li>
                                    <a href="/our-initiatives">Our Initiatives</a>
                                </li>
                                {/* <li><a href="programs">Programs</a></li> */}
                                <li>
                                    <a href="teams">Teams</a>
                                </li>
                                <li>
                                    <a href="contact-us">Contact Us</a>
                                </li>
                                <li>
                                    <a href="ask-for-help">Ask for Help</a>
                                </li>
                            </ul>
                        </div>
                        {/* <div class="donation_button">
              <a href="#" class="donation_icon"><img src="images/donation.jpg" /></a>
              <a href="#" class="support">SUPPORT NSPI</a>
          </div> */}
                        <div className="social_section">
                            <span>FOLLOW US</span>
                            <ul>
                                <li>
                                    <a href="https://facebook.com/nationalstudentportal">
                                        <i className="fa-brands fa-facebook-f" />
                                    </a>
                                </li>
                                <li>
                                    <a href="https://twitter.com/NSPBHARAT">
                                        <i className="fa-brands fa-twitter" />
                                    </a>
                                </li>
                                <li>
                                    <a href="https://www.linkedin.com/company/nationalstudentportal">
                                        <i className="fa-brands fa-linkedin-in" />
                                    </a>
                                </li>
                                {/* <li>
                      <a href="#"><i class="fa-brands fa-youtube"></i></a>
                  </li> */}
                            </ul>
                        </div>
                    </div>
                </header>
                {/*NSPI Banner*/}
                <section className="website_banner">
                    <div className="container website_banner_inner">
                        <div className="banner_left_area">
                            <h2>Connecting Dots and Rebuilding The Academia</h2>
                            <h1>
                                Rethinking India?
                                <br />
                                Think NSPI.
                            </h1>
                            <div className="app_icon">
                                <ul>
                                    <li href="#">
                                        <img src="images/google-button.jpg" />
                                    </li>
                                    {/* <li href="#"><img src="images/apple-app.jpg" /></li> */}
                                </ul>
                            </div>
                        </div>
                        <div className="banner_right_area">
                            <img src="images/banner_image.png" />
                        </div>
                    </div>
                </section>
                {/*NSPI ROADMAP*/}
                <section className="nspi_timeline marb30">
                    <div className="heading">
                        <h2>NSPI ROADMAP</h2>
                        <h3>NSPI Roadmap</h3>
                    </div>
                    <ul>
                        <li>
                            <img src="images/tl/october22.jpg" />
                        </li>
                        <li>
                            <img src="images/tl/december22.jpg" />
                        </li>
                        <li>
                            <img src="images/tl/march23.jpg" />
                        </li>
                        <li>
                            <img src="images/tl/may23.jpg" />
                        </li>
                        <li>
                            <img src="images/tl/july23.jpg" />
                        </li>
                        <li>
                            <img src="images/tl/october23.jpg" />
                        </li>
                        <li>
                            <img src="images/tl/december23.jpg" />
                        </li>
                        <li>
                            <img src="images/tl/may24.jpg" />
                        </li>
                        <li>
                            <img src="images/tl/july24.jpg" />
                        </li>
                    </ul>
                </section>
                {/*NSPI ROADMAP*/}
                <section className="nspi_timeline mart90 marb90">
                    <div className="heading">
                        <h2>WHY NSPI…?</h2>
                        <h3>Energy | Resource | Talent | Infrastructure</h3>
                    </div>
                    <div className="why_nspi_section">
                        <div className="container why_nspi_inner">
                            <div className="section_left">
                                <div className="nspi_section">
                                    <img src="images/icon1.jpg" />
                                    <p>
                                        Unidentified &amp; scattered academic information, resources and
                                        infrastructure.
                                    </p>
                                </div>
                                <div className="nspi_section">
                                    <img src="images/icon2.jpg" />
                                    <p>
                                        Limited access of Rural and Trible students to mainstream
                                        academia.
                                    </p>
                                </div>
                            </div>
                            <div className="section_center">
                                <img src="images/whynspi.jpg" />
                            </div>
                            <div className="section_right">
                                <div className="nspi_section">
                                    <img src="images/icon3.jpg" />
                                    <p>Increasing student lifestyle cost in cities.</p>
                                </div>
                                <div className="nspi_section">
                                    <img src="images/icon4.jpg" />
                                    <p>Lack of single gateway to cater all academic stakeholders.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                {/*Section Video*/}
                <div className="video_background"></div>
                {/*Sol NSPI*/}
                <section className="solution_nspi mart90 marb90">
                    <div className="heading">
                        <h2>SOLUTION BY NSPI…?</h2>
                        {/* <h3>Energy | Resource | Talent | Infrastructure</h3> */}
                    </div>
                    {/*Top Section*/}
                    <div className="top_section">
                        <div className="container section_nspi_sols">
                            <div className="card_block">
                                <div className="card step_one">
                                    <img src="images/marketplace.jpg" />
                                </div>
                            </div>
                            <div className="step_two">
                                Real time and student driven academic data, information and knowledge
                                system.
                            </div>
                            <div className="card_block">
                                <div className="card step_three">
                                    <img src="images/campus.jpg" />
                                </div>
                            </div>
                            <div className="step_four">
                                Community building and student support mechanism.
                            </div>
                        </div>
                    </div>
                    {/*Border Section*/}
                    <div className="border_area">
                        <div className="container">
                            <div className="dot_se">
                                <div className="dot1">
                                    <div className="white_dot" />
                                </div>
                            </div>
                            <div className="dot_se">
                                <div className="dot1">
                                    <div className="white_dot" />
                                </div>
                            </div>
                            <div className="dot_se">
                                <div className="dot1">
                                    <div className="white_dot" />
                                </div>
                            </div>
                            <div className="dot_se">
                                <div className="dot1">
                                    <div className="white_dot" />
                                </div>
                            </div>
                        </div>
                    </div>
                    {/*Bottom Section*/}
                    <div className="bottom_section">
                        <div className="container section_nspi_sols">
                            <div className="step_one">
                                Students dedicated and affordable market place.
                            </div>
                            <div className="card_block">
                                <div className="card step_two">
                                    <img src="images/book.jpg" />
                                </div>
                            </div>
                            <div className="step_three">
                                Campus centric, student led media and entertainment platform.
                            </div>
                            <div className="card_block">
                                <div className="card step_four">
                                    <img src="images/social.jpg" />
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                {/*Section*/}
                <section className="main_section">
                    <div className="container"></div>
                </section>
                {/*Footer*/}
                <footer>
                    {/*-Top Footer*/}
                    <div className="footer_logo">
                        <div className="container footer_inner">
                            <img src="images/NSPI-Footerupdated.png" />
                            <img src="images/qr-code.jpg" />
                        </div>
                    </div>
                    {/*-Bottom Footer*/}
                    <div className="useful_links">
                        <div className="container useful_links_inner">
                            <div className="copy_msg">
                                Copyright © 2022 NSPI. All Rights Reserved.
                            </div>
                            <div className="left_links">
                                <ul>
                                    <li>
                                        <a href="/about-us">About NSPI</a>
                                    </li>
                                    {/* <li><a href="https://nationalstudentportal.org//our-initiatives">Our Initiatives</a></li>
                          <li><a href="https://nationalstudentportal.org/programs">Programs</a></li>
                          <li><a href="https://nationalstudentportal.org/teams">Teams</a></li> */}
                                    <li>
                                        <a href="contact-us">Contact Us</a>
                                    </li>
                                </ul>
                            </div>
                            <div className="right_links">
                                <ul>
                                    <li>
                                        <a href="privacy-policy">Privacy Policy</a>
                                    </li>
                                    <li>
                                        <a href="terms-and-conditions">Term and Condations</a>
                                    </li>
                                    {/* <li><a href="https://nationalstudentportal.org/support">Support</a></li> */}
                                </ul>
                            </div>
                        </div>
                    </div>
                </footer>
            </>
    )
}

export default WebsiteIndex