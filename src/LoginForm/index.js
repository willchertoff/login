import React from 'react';
import mark from './mark.svg';
import pass from './password-icon.svg';
import use from './user-icon.svg';

const buttonText = (login) => login ? 'Login Now' : 'Create Account';
const footText = (login) => login ? 'Create Account' : 'Login';

export default class LoginForm extends React.Component {
  static propTypes = {
    name: React.PropTypes.string,
  };

  constructor(props) {
    super(props);
  }

  render() {
    const { login } = this.props;
    return (
      <div
        style={{
          width: '326px',
          height: '500px',
        }}
      >
        <img 
          style={{
            display: 'block',
            margin: 'auto',
            marginBottom: '100px',
          }}
          src={mark} 
        />
          <div className="input-container">
            <img src={use} />
            <input 
              type="text"
              placeholder="Username"
              className='wc-input'
            />
          </div>
          <div className="input-container">
            <img src={pass} />
            <input 
              type="password"
              placeholder="Password" 
              className='wc-input'
            />
          </div>
          <button
            className='wc-button'
            onClick={this.props.submitAction}
          >
            {buttonText(login)}
          </button>
          <div className="form-row">
            <a onClick={this.props.toggleSignUp}>{footText(login)}</a>
            <a>Need Help?</a>
          </div>
      </div>
    );
  }
}
