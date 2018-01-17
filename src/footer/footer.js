import React, {Component} from 'react';

import './footer.scss';

class Footer extends Component {
  render() {
    return (

      <div className="footer">
        <div className="footer-links">
        <span className="footer-link">
          <a  className="email-link" href="mailto:borkjt9@gmail.com">
            <img className="email-img" src={require('../assets/images/email-light.png')}/>
          </a>

        </span>
          <span className="footer-link">
          <a  href="https://www.linkedin.com/in/john-borkowski-cfa-8533bb25/">
            <img className="linkedin-img" src={require('../assets/images/linkedin-light.png')}/>
          </a>

        </span>
        <span className="footer-link">
          <a  href="https://www.linkedin.com/in/john-borkowski-cfa-8533bb25/">
            <img className="pdf-img" src={require('../assets/images/pdf-light.png')}/>
          </a>

        </span>
        </div>
      </div>
    )
  }
}

export default Footer
