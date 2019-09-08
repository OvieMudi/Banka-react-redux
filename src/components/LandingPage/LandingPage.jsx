import React from 'react';
import './landingPage.scss';
import background1 from './images/undraw_speed_test.svg';
import background2 from './images/undraw_wallet.svg';
import background3 from './images/undraw_urban_design.svg';

const LandingPage = () => (
  <main className="landingPage">
    <nav>
      <div className="nav-wrapper">
        {/* <!---------  Home Icon/Logo ---------> */}
        <a href="./index.html" className="logo">
          <i className="fas fa-coins" />
          <span className="icon">B</span>
          <span className="icon-text">anka</span>
        </a>
        <ul id="nav-mobile" className="right">
          <li>
            <a href="https://github.com/OvieMudi/Banka">Support</a>
          </li>
          <li>
            <a href="https://github.com/OvieMudi/Banka">Contact</a>
          </li>
          <li>
            <button type="button" className="waves-effect waves-teal btn-flat">
              login
            </button>
          </li>
        </ul>
      </div>
    </nav>

    <div className="row">
      <section
        className="col s12 section1"
        style={{
          backgroundImage: `url(${background1})`,
        }}
      >
        <div className="hero-text-box hero1">
          <h1 className="hero-text hero-text-big">
            Your internet banking just got smarter
          </h1>
          <p className="hero-text">
            Banka provides a robust platform that allows you manage all your
            bank accounts online.
          </p>
          <button type="button" className="btn waves-effect waves-light">
            GET STARTED
          </button>
        </div>
      </section>

      <section
        className="col s12 section2"
        style={{ backgroundImage: `url(${background2})` }}
      >
        <div className="hero-text-box hero2">
          <h2 className="hero-text hero-text-medium">
            Visit our branch near you to withdraw or make deposits.
          </h2>
          <button type="button" className="waves-effect waves-teal btn-flat">
            Find out more
          </button>
        </div>
      </section>

      <section
        className="col s12 section3"
        style={{ backgroundImage: `url(${background3})` }}
      >
        <div className="hero-text-box hero3">
          <h2 className="hero-text hero-text-medium">
            Find us in major cities nationwide or an agent near you.
          </h2>
          <button type="button" className="btn waves-effect waves-light">
            Register Now
          </button>
        </div>
      </section>
    </div>
  </main>
);

export default LandingPage;
