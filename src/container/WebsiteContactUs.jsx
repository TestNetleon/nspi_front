import React from 'react'

const WebsiteContactUs = () => {
    return (
        <>
            <title>Contact US | National Portal of India - NSPI</title>
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
                                <a href="about-us">About NSPI</a>
                            </li>
                            <li>
                                <a href="our-initiatives">Our Initiatives</a>
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
            {/*Section*/}
            <section className="main_section inner_pages">
                <div className="heading">
                    <h2>Contact Us</h2>
                </div>
                <div className="container contact_us_page">
                    <div className="section_contact">
                        <strong>Registered address: </strong>
                        <br />
                        STUDENTS INTEGRITY FOUNDATION
                        <br />
                        C/O BHAWAR LAL, S/O BHAGIRATH, 6/813, JATON KA BAS, <br />
                        PANER, ROOPANGARH, AJMER, RAJASTHAN, INDIA, 305814.
                    </div>
                    <div className="section_contact">
                        <strong>Corporate Headquarter:</strong>
                        <br />
                        NATIONAL STUDENT PORTAL OF INDIA
                        <br />
                        104, CONVENTION CENTRE, <br />
                        JAWAHARLAL NEHRU UNIVERSITY, <br />
                        NEW DELHI-110067.
                    </div>
                    <div className="section_contact">
                        <strong>For General Queries:</strong>
                        <br />
                        Email: namaste@nationalstudentportal.org
                        <br />
                        Mobile: +91-9460720757
                    </div>
                    <div className="section_contact">
                        <strong>For Administrative Queries: </strong>
                        <br />
                        Sagar Tiwari
                        <br />
                        National Secretary - NSPI
                        <br />
                        Email: secretary@nationalstudentportal.org, <br />
                        admin@nationalstudentportal.org
                    </div>
                    <div className="section_contact">
                        <strong>For Tech Queries:</strong>
                        <br />
                        techteam@nationalstudentportal.org
                    </div>
                    <div className="section_contact">
                        <strong>For Donation/ Account Queries:</strong>
                        <br />
                        accounts@nationalstudentportal.org
                    </div>
                    <div className="section_contact">
                        <strong>For Complaints and Notice: </strong>
                        <br />
                        legal@nationalstudentportal.org
                    </div>
                </div>
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
                                    <a href="about-us">About NSPI</a>
                                </li>
                                {/* <li><a href="https://nationalstudentportal.org/our-initiatives">Our Initiatives</a></li>
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

export default WebsiteContactUs