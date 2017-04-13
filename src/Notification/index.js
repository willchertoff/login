import React, { Component } from 'react';


const notificationStyle = {
  boxShadow: '0 20px 50px 0 rgba(0,0,0,0.20)',
  background: 'white',
  padding: '20px 30px',
  borderRadius: '50px',
  fontSize: '12px',
  marginTop: '20px',
}

export default class Notification extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div
        style={notificationStyle}
      >
        {this.props.text}
      </div>
    );
  }
}
