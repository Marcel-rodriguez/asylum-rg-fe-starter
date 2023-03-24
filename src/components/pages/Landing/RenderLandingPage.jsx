import React from 'react';
// ADD IMPORTS BACK FOR GRAPHS SECTION
import GrantRatesByOfficeImg from '../../../styles/Images/bar-graph-no-text.png';
import GrantRatesByNationalityImg from '../../../styles/Images/pie-chart-no-text.png';
import GrantRatesOverTimeImg from '../../../styles/Images/line-graph-no-text.png';
import HrfPhoto from '../../../styles/Images/paper-stack.jpg';
import '../../../styles/RenderLandingPage.less';
import { Button } from 'antd';
import { useHistory } from 'react-router-dom';
// for the purposes of testing PageNav
// import PageNav from '../../common/PageNav';

function RenderLandingPage(props) {
  const scrollToTop = () => {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  };

  const history = useHistory();

  return (
    <div className="main">
      <div className="header">
        <div className="header-text-container">
          <h1>Asylum Office Grant Rate Tracker</h1>
          <h3>
            The Asylum Office Grant Rate Tracker provides asylum seekers,
            researchers, policymakers, and the public an interactive tool to
            explore USCIS data on Asylum Office decisions
          </h3>
        </div>
      </div>

      {/* Graphs Section: Add code here for the graphs section for your first ticket */}

      <section className="graphs-section">
        <div className="grant-rates-container">
          <div className="grant-rates-by-office-graph-container">
            <img src={GrantRatesByOfficeImg} alt="grant-rates-by-office" />
            <p>Search Grant Rates By Office</p>
          </div>
          <div className="grant-rates-by-nationality-container">
            <img
              className="grant-rates-by-nationality"
              src={GrantRatesByNationalityImg}
              alt="grant-rates-by-nationality"
            />
            <p>Search Grant Rates By Nationality</p>
          </div>
          <div className="grant-rates-over-time-container">
            <img src={GrantRatesOverTimeImg} alt="grant-rates-over-time" />
            <p>Search Grant Rates Over Time</p>
          </div>
        </div>
      </section>

      <div className="view-more-data-btn-container">
        {/* this button should redirect you to the graphs page */}
        <Button
          type="default"
          style={{ backgroundColor: '#404C4A', color: '#FFFFFF' }}
          onClick={() => history.push('/graphs')}
        >
          View the Data
        </Button>
        {/* this button will download the grant rates file hosted on the url below */}
        <Button
          type="default"
          style={{ backgroundColor: '#404C4A', color: '#FFFFFF' }}
        >
          <a
            href="https://humanrightsfirst.org/wp-content/uploads/2022/10/COW2021001887-I589Data.csv"
            target="_blank"
            download
            rel="noreferrer"
          >
            Download the Data
          </a>
        </Button>
      </div>

      <section className="middle-section">
        <div className="hrf-img-container">
          <img src={HrfPhoto} alt="Human Rights First" className="hrf-img" />
        </div>
        <div className="middle-section-text-container">
          <h3>
            Human Rights First has created a search tool to give you a
            user-friendly way to explore a data set of asylum decisions between
            FY 2016 and May 2021 by the USCIS Asylum Office, which we received
            through a Freedom of Information Act request. You can search for
            information on asylum grant rates by year, nationality, and asylum
            office, visualize the data with charts and heat maps, and download
            the data set
          </h3>
        </div>
      </section>
      <div>
        {/* Bottom Section: Add code here for the graphs section for your first ticket */}
        <section className="bottom-section">
          <h2>Systemic Disparity Insights</h2>
          <div className="bottom-section-metrics">
            <div>
              <h3>36%</h3>
              <p>
                By the end of the Trump administration, the average asylum
                office grant rate had fallen 36 percent from an average of 44
                percent in fiscal year 2016 to 28 percent in fiscal year 2020.
              </p>
            </div>
            <div>
              <h3>5%</h3>
              <p>
                The New York asylum office grant rate dropped to 5 percent in
                fiscal year 2020.
              </p>
            </div>
            <div>
              <h3>6x Lower</h3>
              <p>
                Between fiscal year 2017 and 2020, the New York asylum office’s
                average grant rate was six times lower than the San Francisco
                asylum office.
              </p>
            </div>
          </div>
          {/* this button should redirect you to the learn more page for disparity insights */}
          <Button
            type="default"
            style={{ backgroundColor: '#404C4A', color: '#FFFFFF' }}
            onClick={() => history.push('')}
          >
            Read More
          </Button>
        </section>
        {/* this button lets you return back to the top of the page */}
        <p onClick={() => scrollToTop()} className="back-to-top">
          Back To Top ^
        </p>
      </div>
    </div>
  );
}
export default RenderLandingPage;
