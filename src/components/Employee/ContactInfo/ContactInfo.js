import './ContactInfo.css';
import React from 'react';

import FontAwesome from 'react-fontawesome';

class ContactInfo extends React.Component {
  render() {
    if(!this.props.employee || !this.props.employee.connections){ return null; }

    return (
      <div className="contactContainer">
        <div>
          <h4> Contact information</h4>
          {this.renderEmail()}
          {this.renderPhone()}
          {this.renderGithub()}
          {this.renderSlack()}
        </div>
      </div>
    );
  }

  renderEmail(){
    if(!this.props.employee || !this.props.employee.connections.mail || !this.props.employee.connections.mail.id){return null;}
    return (<div className="contactInfo">
      <FontAwesome className="connection" name='envelope'/>
      <br/>
      {this.props.employee.connections.mail.id}
    </div>);
  }

  renderPhone(){
    if(!this.props.employee || !this.props.employee.connections.phone || !this.props.employee.connections.phone.id){return null;}
    return (<div className="contactInfo">
      <FontAwesome className="connection" name='phone'/>
      <br/>
      {this.props.employee.connections.phone.id}
    </div>);
  }

  renderGithub(){
    if(!this.props.employee || !this.props.employee.connections.github || !this.props.employee.connections.github.id){return null;}
    return (<div className="contactInfo">
      <FontAwesome className="connection" name='github'/>
      <br/>
      {this.props.employee.connections.github.id}
    </div>);
  }

  renderSlack(){
    if(!this.props.employee || !this.props.employee.connections.slack || !this.props.employee.connections.slack.id){return null;}
    return (<div className="contactInfo">
      <FontAwesome className="connection" name='slack'/>
      <br/>
      {this.props.employee.connections.slack.id}
    </div>);
  }
}

export default ContactInfo;
