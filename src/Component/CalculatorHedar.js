import React, { useState } from 'react';
import sip_investment from '../img/sip_investment.svg';
import lumpsum from '../img/lumpsum.svg';
import sip_calculator from '../img/sip_calculator.svg';
import InputForm from './InputForm';
import PieChart from './PieChart';

const SIPCalculator = () => {
  const [activeTab, setActiveTab] = useState('SIP Calculator');
  const [sipAmount, setSipAmount] = useState(0);
  const [investedAmount, setInvestedAmount] = useState(0);
  const [estimatedReturns, setEstimatedReturns] = useState(0);

  const handleTabClick = (tabName) => {
    setActiveTab(tabName);
  };

  const handleCalculation = (sip, invested, returns) => {
    setSipAmount(sip);
    setInvestedAmount(invested);
    setEstimatedReturns(returns);
  };

  return (
    <>
      <section className="hero_loan py-5">
        <div className="container">
          <div className="row">
            <div className="col-md-7 left_side">
              <ul id="pills-tab" role="tablist" className="nav nav-pills mb-3 p-0 align-items-center justify-content-around justifycontent-between">
                <li role="presentation" className="nav-item">
                  <button onClick={() => handleTabClick('SIP Calculator')} id="pills-home-tab" data-bs-toggle="pill" data-bs-target="#pills-home" type="button" role="tab" aria-controls="pills-home" aria-selected={activeTab === 'SIP Calculator' ? 'true' : 'false'} className={`nav-link text-center px-2 w-100 fw-bold rounded-0 ${activeTab === 'SIP Calculator' ? 'active' : ''}`} tabIndex={0}>SIP Calculator</button>
                </li>
                <li role="presentation" className="nav-item">
                  <button onClick={() => handleTabClick('Goal SIP')} id="pills-profile-tab" data-bs-toggle="pill" data-bs-target="#pills-profile" type="button" role="tab" aria-controls="pills-profile" aria-selected={activeTab === 'Goal SIP' ? 'true' : 'false'} className={`nav-link text-center px-2 w-100 fw-bold rounded-0 ${activeTab === 'Goal SIP' ? 'active' : ''}`} tabIndex={-1}>Goal SIP</button>
                </li>
                <li role="presentation" className="nav-item">
                  <button onClick={() => handleTabClick('SIP with annual increase')} id="pills-contact-tab" data-bs-toggle="pill" data-bs-target="#pills-contact" type="button" role="tab" aria-controls="pills-contact" aria-selected={activeTab === 'SIP with annual increase' ? 'true' : 'false'} className={`nav-link text-center px-2 w-100 fw-bold rounded-0 ${activeTab === 'SIP with annual increase' ? 'active' : ''}`} tabIndex={-1}>SIP with annual increase</button>
                </li>
              </ul>
              <div id="pills-tabContent rounded-0" className="tab-content">
                <div id="pills-home" role="tabpanel" aria-labelledby="pills-home-tab" tabIndex={0} className="tab-pane fade show active">
                  <div className="row">
                    <div className="col-12 content mb-4"> A Systematic Investment
                      Plan (SIP), more popularly known as SIP, is a facility offered by mutual funds to
                      the investors to invest in a disciplined manner. SIP facility allows an investor to
                      invest a fixed amount of money at pre-defined intervals in the selected mutual fund
                      scheme. </div>
                    <div className="col-12 row mx-0 px-0 justify-content-sm-start justify-content-center">
                      <div className="col-auto">
                        <div className="cards">
                          <div className="card-body py-sm-4 py-3 px-sm-3 px-0">
                            <div className="row mx-0">
                              <div className="col-auto">
                                <button className="sip_btn fw-bold btn d-flex align-items-center gap-3 active">
                                  <img src={sip_investment} alt=""/>
                                  SIP
                                </button>
                              </div>
                              <div className="col-auto ps-sm-2 ps-0">
                                <button className="sip_btn fw-bold btn d-flex align-items-center gap-3">
                                  <img src={lumpsum} alt="" />
                                  LUMPSUM
                                </button>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div id="pills-profile" role="tabpanel" aria-labelledby="pills-profile-tab" tabIndex={0} className="tab-pane fade">
                  <div className="row">
                    <div className="col-12 content mb-4"> A Systematic Investment
                      Plan (SIP), more popularly known as SIP, is a facility offered by mutual funds to
                      the investors to invest in a disciplined manner. SIP facility allows an investor to
                      invest a fixed amount of money at pre-defined intervals in the selected mutual fund
                      scheme. </div>
                  </div>
                </div>
                <div id="pills-contact" role="tabpanel" aria-labelledby="pills-contact-tab" tabIndex={0} className="tab-pane fade">
                  <div className="row">
                    <div className="col-12 content mb-4"> National Pension System
                      (NPS) is a voluntary, defined contribution retirement savings scheme designed to
                      enable the subscribers to make optimum decisions regarding their future through
                      systematic savings during their working life. NPS seeks to inculcate the habit of
                      saving for retirement amongst the citizens. </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-5 mb-md-0 mb-4 d-md-block d-none">
              <div className="ng-star-inserted"><img src={sip_calculator} alt="" className="w-50" /></div>
            </div>
          </div>
        </div>
        <div className="tab-content">
          {activeTab === 'SIP Calculator' && (
            <div>
              <form noValidate className="ng-untouched ng-pristine ng-valid">
                <section className="loancalculator_section">
                  <div className="container">
                    <div className="row align-items-center mt-5 py-2 mx-0 justify-content-between cards">
                      <InputForm onCalculate={handleCalculation} loan_heading="Monthly Investment" />
                      <PieChart
                        sipAmount={sipAmount}
                        investedAmount={investedAmount}
                        estimatedReturns={estimatedReturns}
                      />
                    </div>
                  </div>
                </section>
              </form>
            </div>
          )}
          {activeTab === 'Goal SIP' && (
            <div>
              <form noValidate className="ng-untouched ng-pristine ng-valid">
                <section className="loancalculator_section">
                  <div className="container">
                    <div className="row align-items-center mt-5 py-2 mx-0 justify-content-between cards">
                      <InputForm onCalculate={handleCalculation} loan_heading="Goal Amount" />
                      <PieChart
                        sipAmount={sipAmount}
                        investedAmount={investedAmount}
                        estimatedReturns={estimatedReturns}
                      />
                    </div>
                  </div>
                </section>
              </form>
            </div>
          )}
          {activeTab === 'SIP with annual increase' && (
            <div>
              <form noValidate className="ng-untouched ng-pristine ng-valid">
                <section className="loancalculator_section">
                  <div className="container">
                    <div className="row align-items-center mt-5 py-2 mx-0 justify-content-between cards">
                      <InputForm onCalculate={handleCalculation} loan_heading="Annual Increase SIP" />
                      <PieChart
                        sipAmount={sipAmount}
                        investedAmount={investedAmount}
                        estimatedReturns={estimatedReturns}
                      />
                    </div>
                  </div>
                </section>
              </form>
            </div>
          )}
        </div>
      </section>
    </>
  );
}

export default SIPCalculator;
