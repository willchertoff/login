import React from 'react';
import NotificationStation from './NotificationStation';
import LoginContainer from './LoginContainer';

import './style.css';

export default () =>
  <div 
    className="app"
  >
    <NotificationStation>
      <LoginContainer />
    </NotificationStation>
  </div>
