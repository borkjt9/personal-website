import React, {Component} from 'react';
import './partner-apps.scss';

class PartnerApps extends Component {
  summaryBody = "\n\nDuring this partnership, John was responsible for negotiating contracts, designing and developing O'Shares' iOS application, and managing the project timeline.";
  osharesCaption = "OShares ETF Investment"
  osharesBody = "OShares is a company run by Kevin O'Leary that manages over $1 billion in assets. These assets are invested in O'Shares custom ETFs.\n\nFor the OShares application, John designed a custom user signup process which incorporated OShares' investment methodology and over 100 assets."
  astorCaption = "Astor Investment Management"
  astorBody = "Astor is a registered investment advisor that provides client services to over $2 billion in client assets.\n\nAstor served as the pilot project for Boon's white label applications after John brokered a deal that brought in over $50,000 in annual revenue."

  skillsDictionary = {
    "Development": ["Swift",],
    "Technology": ["Xcode", "Sketch"],
    "General": ["Product Management", "Design", "Partnerships", "Contracts"]
  }

  renderOsharesSection() {
    return (
      <div>

      </div>
    )
  }

  renderOsharesSection() {
    return (
      <div className="portfolio-page__section">
        <h1 className="portfolio-page__section__title ">O'Shares ETF Investments</h1>
        <div className="portfolio-page__section__body">
          <img className="oshares__product__iphone-image" src={require('../../../assets/images/iphone-investment-history.png')}/>
          <div className="oshares__product__text">
            <p>{this.osharesBody}</p>
          </div>
        </div>
      </div>
    )
  }

  renderAstorSection() {
    return (
      <div>
        {this.renderOsharesSection()}
      </div>
    )
  }

  render() {
    return(
      <div>
        OShares section
      </div>
    )
  }
}

export default PartnerApps
