import React from 'react';
import NotificationStation from './NotificationStation';
import LoginContainer from './LoginContainer';

export default () =>
  <div className="app">
    <NotificationStation>
      <LoginContainer />
    </NotificationStation>
  </div>

