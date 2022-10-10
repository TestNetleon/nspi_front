import React from 'react'

const WebsiteAskForHelp = () => {
  return (
    <>
  <title>Ask for help | National Portal of India - NSPI</title>
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
      <h2>Ask for Help</h2>
    </div>
    <div className="container">
      <p>
        ‘Ask for Help’ has been developed for all the students living all across
        the country. So that they can ask for help anytime, anywhere. This
        concept was developed based on the fact that each and every student who
        lives in hostels, colleges, PGs, or who is travelling to different
        places needs something or the other but cannot easily find help.
      </p>
      <p>
        We all know that there are thousands of volunteers, organizations, and
        student leaders who are working towards building a community to help
        such students who are in need. But it is very difficult for them to find
        and connect with people who are in need.
      </p>
      <p>
        Hence, the ‘Ask for Help’ app was developed to bridge the gap between
        students (who are in need) and volunteers (who are ready to help). This
        way, anyone can get quick help and also network with a large network of
        volunteers or student leaders from across the country.
      </p>
      <h2>What does ‘Ask for Help’ offer to students?</h2>
      <h3>It provides-</h3>
      <ul>
        <li>- Easy access to the campus volunteers’ community.</li>
        <li>- Get real-time support and help from all across the country.</li>
        <li>
          - An opportunity to become a part of India’s biggest virtual student
          community.
        </li>
        <li>- 50 categories from which students can ask for help.</li>
      </ul>
      <h2>What does ‘Ask for help" offer to volunteers or student leaders?</h2>
      <h3>It provides-</h3>
      <ul>
        <li>
          - A mechanism to grow and develop skills to showcase true leadership
          skills and persona.
        </li>
        <li>
          - An opportunity to interact with students directly and help them
          resolve their issues.
        </li>
        <li>- An easy excess to a large student community.</li>
        <li>- Social recognition and appreciation from society.</li>
      </ul>
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

export default WebsiteAskForHelp