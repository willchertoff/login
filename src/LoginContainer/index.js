import React from 'react';
import LoginForm from '../LoginForm';
import bg from './bg.png';

export default class LoginContainer extends React.Component {
  static propTypes = {
    name: React.PropTypes.string,
  };

  constructor(props) {
    super(props);
    this.state = {
      login: true,
    }
  }

  toggleSignUp = (e) => {
    this.setState({
      login: !this.state.login,
    })
  }

  submitAction = (e) => {
    this.props.queueNotification({
      text: 'Our Services Are Down, Please Try again later'
    })
  }

  render() {
    return (
      <div
        style={{
          background: `url(${bg}) no-repeat, linear-gradient(-180deg, #EB5322 0%, #000000 100%)`,
          backgroundSize: 'cover',
          width: '100vw',
          height: '100vh',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <LoginForm 
          queueNotification={this.props.queueNotification}
          login={this.state.login}
          toggleSignUp={this.toggleSignUp}
          submitAction={this.submitAction}
        />
      </div>
    );
  }
}
