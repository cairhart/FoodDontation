import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Button from 'react-bootstrap/lib/Button';

// We can inject some CSS into the DOM.
const style_button = {
  root: {
    background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
    borderRadius: 3,
    border: 0,
    color: 'white',
    height: 48,
    padding: '0 30px',
    boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
  },
  bigButton: {
    marginRight: 50,
    background: "rgba(0, 0, 0, 0.5)",
    borderRadius: 3,
    border: 50,
    color: "white",
    height: 100,
    width: 150,
    padding: "0 30px"
  }
};

const BasicExample = () => (
  <Router>
    <div>
      <Route exact path="/" component={Landing} />
      <Route path="/donorlanding" component={DonorLanding} />
      <Route path="/financialdonation" component={FinancialDonation} />
      <Route path="/thankyou" component={ThankYou} />
      <Route path="/fooddonation" component={FoodDonation} />
      <Route path="/vendorlanding" component={VendorLanding} />
      <Route path="/vendorsignup" component={VendorSignup} />
      <Route path="/vendorinfo" component={VendorInfo} />
    </div>
  </Router>
);

const Landing = () => (
  <div>
    <Button style={style_button}>
     ahk
    </Button>
  </div>
);

const DonorLanding = () => (
  <div>
    <h2>About</h2>
  </div>
);

const FinancialDonation = () => (
  <div>
    <h2>About</h2>
  </div>
);

const ThankYou = () => (
  <div>
    <h2>About</h2>
  </div>
);

const FoodDonation = () => (
  <div>
    <h2>About</h2>
  </div>
);

const VendorLanding = () => (
  <div>
    <h2>About</h2>
  </div>
);

const VendorSignup = () => (
  <div>
    <h2>About</h2>
  </div>
);

const VendorInfo = () => (
  <div>
    <h2>About</h2>
  </div>
);

export default BasicExample;
