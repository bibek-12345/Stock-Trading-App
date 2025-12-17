import React from "react";

function Footer() {
  return (
    <footer style={{ backgroundColor: "rgb(250,250,250)" }}>
      <div className="container border-top mt-5">
        <div className="row">
          <div className="col">
            <img src="media/images/logo.svg" style={{ width: "50%" }}></img>
            <p className="text-muted">
              &copy; 2010 - 2027, Not Zerodha Broking Ltd. All rights reserved.
            </p>
          </div>
          <div className="col no-underline">
            <p>Company</p>
            <a href="" className="text-muted mb-2 d-block">About</a>
            <a href="" className="text-muted mb-2 d-block">Products</a>
            <a href="" className="text-muted mb-2 d-block">Pricing</a>
            <a href="" className="text-muted mb-2 d-block">Referral programme</a>
            <a href="" className="text-muted mb-2 d-block">Careers</a>
            <a href="" className="text-muted mb-2 d-block">Zerodha.tech</a>
            <a href="" className="text-muted mb-2 d-block">Press & media</a>
            <a href="" className="text-muted mb-2 d-block">Zerodha cares (CSR)</a>
          </div>
          <div className="col no-underline">
            <p>Support</p>
            <a href="" className="text-muted mb-2 d-block">Contact</a>
            <a href="" className="text-muted mb-2 d-block">Support portal</a>
            <a href="" className="text-muted mb-2 d-block">Z-Connect blog</a>
            <a href="" className="text-muted mb-2 d-block">List of charges</a>
            <a href="" className="text-muted mb-2 d-block">Downloads & resources</a>
          </div>
          <div className="col no-underline">
            <p>Account</p>
            <a href="" className="text-muted mb-2 d-block">Open an account</a>
            <a href="" className="text-muted mb-2 d-block">Fund transfer</a>
            <a href="" className="text-muted mb-2 d-block">60 day challenge</a>
          </div>
        </div>
        <div className="mt-5 text-muted" style={{ fontSize: "14px" }}>
          <p>
            Zerodha Broking Ltd.: Member of NSE​ &​ BSE – SEBI Registration no.:
            INZ000031633 CDSL: Depository services through Zerodha Securities
            Pvt. Ltd. – SEBI Registration no.: IN-DP-100-2015 Commodity Trading
            through Zerodha Commodities Pvt. Ltd. MCX: 46025 – SEBI Registration
            no.: INZ000038238 Registered Address: Zerodha Broking Ltd.,
            #153/154, 4th Cross, Dollars Colony, Opp. Clarence Public School,
            J.P Nagar 4th Phase, Bengaluru - 560078, Karnataka, India. For any
            complaints pertaining to securities broking please write to
            complaints@zerodha.com, for DP related to dp@zerodha.com. Please
            ensure you carefully read the Risk Disclosure Document as prescribed
            by SEBI | ICF
          </p>

          <p>
            Procedure to file a complaint on SEBI SCORES: Register on SCORES
            portal. Mandatory details for filing complaints on SCORES: Name,
            PAN, Address, Mobile Number, E-mail ID. Benefits: Effective
            Communication, Speedy redressal of the grievances
          </p>

          <p>
            Investments in securities market are subject to market risks; read
            all the related documents carefully before investing.
          </p>

          <p>
            "Prevent unauthorised transactions in your account. Update your
            mobile numbers/email IDs with your stock brokers. Receive
            information of your transactions directly from Exchange on your
            mobile/email at the end of the day. Issued in the interest of
            investors. KYC is one time exercise while dealing in securities
            markets - once KYC is done through a SEBI registered intermediary
            (broker, DP, Mutual Fund etc.), you need not undergo the same
            process again when you approach another intermediary." Dear
            Investor, if you are subscribing to an IPO, there is no need to
            issue a cheque. Please write the Bank account number and sign the
            IPO application form to authorize your bank to make payment in case
            of allotment. In case of non allotment the funds will remain in your
            bank account. As a business we don't give stock tips, and have not
            authorized anyone to trade on behalf of others. If you find anyone
            claiming to be part of Zerodha and offering such services, please
            create a ticket here.
          </p>
        </div>
      </div>
      <div className="mt-4 d-flex justify-content-center gap-3">
        <a href="#" className="text-muted text-decoration-none">NSE</a>
        <a href="#" className="text-muted text-decoration-none">BSE</a>
        <a href="#" className="text-muted text-decoration-none">MCX</a>
        <a href="#" className="text-muted text-decoration-none">Terms & conditions</a>
        <a href="#" className="text-muted text-decoration-none">Policies & procedures</a>
        <a href="#" className="text-muted text-decoration-none">Privacy policy</a>
        <a href="#" className="text-muted text-decoration-none">Disclosure</a>
       </div>
    </footer>
  );
}

export default Footer;
