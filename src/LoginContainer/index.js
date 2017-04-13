import React from 'react';
import LoginForm from '../LoginForm';

export default class LoginContainer extends React.Component {
  static propTypes = {
    name: React.PropTypes.string,
  };

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <LoginForm 
          queueNotification={this.props.queueNotification}
        />
      </div>
    );
  }
}
