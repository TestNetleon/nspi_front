import React from 'react'

const WebsiteTeams = () => {
    return (
        <>
            <title>Team | National Portal of India - NSPI</title>
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
                    <h2>Teams</h2>
                    <h3>The Founding Team</h3>
                </div>
                <div className="container team_page">
                    <div className="team_member_section">
                        <div className="team_photo">
                            <img src="images/Sarveshwar-Choudhary.png" />
                        </div>
                        <h5>Sarveshwar Choudhary</h5>
                        <p>
                            Founder &amp; Chairman <br />
                            Chairman [@] nationalstudentportal.org{" "}
                        </p>
                    </div>
                    <div className="team_member_section">
                        <div className="team_photo">
                            <img src="images/sagar-tiwari.png" />
                        </div>
                        <h5>Sagar Tiwari</h5>
                        <p>
                            Co-Founder &amp; National Secretary
                            <br />
                            secretary [@] nationalstudentportal.org{" "}
                        </p>
                    </div>
                    <div className="team_member_section">
                        <div className="team_photo">
                            <img src="images/Vishwanath-Pratap-Singh.png" />
                        </div>
                        <h5>Vishwanath Pratap Singh</h5>
                        <p>
                            Co-Founder &amp; National Joint Secretary
                            <br />
                            vishwanath [@] nationalstudentportal.org{" "}
                        </p>
                    </div>
                    <div className="team_member_section">
                        <div className="team_photo">
                            <img src="images/mamta.png" />
                        </div>
                        <h5>Mamta Chaudhary</h5>
                        <p>
                            Co-Founder &amp; Treasurer
                            <br />
                            accounts [@] nationalstudentportal.org{" "}
                        </p>
                    </div>
                </div>
                <div className="container name_team">
                    <div className="name_team_in">
                        <h3>Board of Directors</h3>
                        <h4>1. Permanent Members</h4>
                        <h4>2. Independent Members </h4>
                    </div>
                    <div className="name_team_in">
                        <h3>Governing Council </h3>
                        <h4>1. Central Council</h4>
                        <h4>2. District Council </h4>
                    </div>
                    <div className="name_team_in">
                        <h3>Executive Council</h3>
                        <h4>1. Initiative Division</h4>
                        <h4>2. Department Division</h4>
                    </div>
                    <div className="name_team_in">
                        <h3>Advisory Council</h3>
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
                                    <a href="/about-us">About NSPI</a>
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

export default WebsiteTeams