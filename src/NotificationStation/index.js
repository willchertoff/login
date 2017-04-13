import React, { Component, PropTypes } from 'react';
import Notification from '../Notification';
import CSSTransitionGroup from 'react-transition-group/CSSTransitionGroup';

const styles = {
  position: 'fixed',
  top: '60px',
  right: '60px',
}

export default class NotificationStation extends Component {
  static propTypes = {
    notifications: PropTypes.array,
    timeout: PropTypes.number,
  };

  static defaultProps = {
    timeout: 3000,
  }

  constructor(props) {
    super(props);
    this.state = {
      notifications: [],
    }
  }

  deQueueNotification = () => {
    const notifications = this.state.notifications;
    notifications.shift();
    this.setState({
      notifications: notifications,
    })
  }
  queueNotification = (notification) => {
    const toAdd = this.state.notifications;
    toAdd.push(notification);
    this.setState({
      notifications: toAdd,
    })
    setTimeout(() => {
      this.deQueueNotification();
    }, this.props.timeout);
  }

  renderNotifications = () => {
    const { notifications } = this.state;
  }

  render() {
    const childrenWithProps = React.Children.map(this.props.children,
      (child) => React.cloneElement(child, {
        queueNotification: this.queueNotification,
      }),
    );
    const notifications = this.state.notifications.map(notification =>
        <Notification text={notification.text} />
      );
    return (
      <div>
        <div
          style={styles}
        >
          <CSSTransitionGroup
            transitionName="example"
            transitionEnterTimeout={500}
            transitionLeaveTimeout={300}>
            {notifications}
          </CSSTransitionGroup>
        </div>
        {childrenWithProps}
      </div>
    );
  }
}
