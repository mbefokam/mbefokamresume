import React, {Component} from 'react';


class Experience extends Component {


	render() {
		const listOFdeailts = this.props.item.details.map((detail) =>
	        <li>{detail}</li>
	      );
		return (
			<div className="item">
          <div className="meta">
              <div className="upper-row">
                  <h3 className="job-title">{this.props.item.title}</h3>
                  <div className="time">{this.props.item.period}</div>
              </div>
              <div className="company"><a href={this.props.item.companyURL}>{this.props.item.company}</a></div>
          </div>
          <div className="details">
              <p>{listOFdeailts}</p>
          </div>
      </div>
		);
	}
}

export default Experience;
