import React, { Component, PropTypes } from 'react';

const styles = {}

const themeStyles = {}

const hasNotifications = (notifications) => notifications.length > 0;

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
    if (hasNotifications(notifications)) {
      return notifications.map(notification =>
        <div>{notification.text}</div>
      )
    }
  }

  render() {
    const childrenWithProps = React.Children.map(this.props.children,
      (child) => React.cloneElement(child, {
        queueNotification: this.queueNotification,
      }),
    );
    return (
      <div>
        <div
          style={themeStyles}
        >
          {this.renderNotifications()}
        </div>
        {childrenWithProps}
      </div>
    );
  }
}
