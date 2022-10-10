import React from 'react'

const WebsiteOurInitiatives = () => {
    return (
        <>
            <title>Our Initiatives | National Portal of India - NSPI</title>
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
            {/*Section*/}
            <section className="main_section inner_pages">
                <div className="heading">
                    <h2>Our Initiatives</h2>
                </div>
                <div className="container">
                    <h2>Chitra-Sadhana:</h2>
                    <p>
                        National Student Portal of India believes art has immense power and
                        opportunities to mold a well-aware and more informed student community.
                        Through the Chitra Sadhana initiative, NSPI expects to build a
                        nationwide community of designers who can serve the country's student
                        community through their creativity.
                    </p>
                    <h2>Sewa- Setu</h2>
                    <p>
                        Sewa Setu is a thoughtful initiative to bring all the Youth centric NGOs
                        together at one socially recognized platform to resolve their existing
                        structural problems by forming a network of NGOs to empower these NGOs.
                        This initiative has been designed to serve as a means to resolve the
                        existing youth and societal problems. It will act as a grid between
                        NGOs, Industry, and People and help uplift NGOs and their people.
                    </p>
                    <h2>We are following a 3S approach:</h2>
                    <strong>SYNERGY | SOLIDARITY | SUSTAINABILITY</strong>
                    <ol>
                        <li>Synergy: Cooperation among Organisations.</li>
                        <li>Solidarity: Unity &amp; Like mindedness</li>
                        <li>Sustainability: Ability to sustain at all times</li>
                    </ol>
                    <h2>Student Entrepreneur Council-SEC</h2>
                    <p>
                        India is filled with unbound potential, where its 1/3rd population is
                        students. About four crore students are studying in the country's higher
                        education institutions. To lead the country towards rapid economic
                        growth, it is essential to provide Indian students with the proper
                        infrastructure for business development, training, and an atmosphere to
                        improve their business competencies healthily. This council aims to
                        identify talented student entrepreneurs in the country and nourish them
                        with essential skills.
                    </p>
                    <strong>SEC-VISION</strong>
                    <p>
                        To discover, nurture, and raise student entrepreneurs for catalyzing
                        social change and rapid economic growth of Bharatvarsh.
                    </p>
                    <strong>SEC-MISSION</strong>
                    <p>
                        To create a support system for student startups across the country and
                        to nurture them with the right resources, mentorship, and legal and
                        monetary support.
                    </p>
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

export default WebsiteOurInitiatives