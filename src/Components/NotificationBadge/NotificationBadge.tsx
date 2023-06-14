import React, { ReactElement } from "react";
import "./NotificationBadge.scss";

interface NotificationBadgeProps {
  icon: ReactElement;
  number: number;
}

const NotificationBadge: React.FC<NotificationBadgeProps> = ({
  icon,
  number,
}) => {
  return (
    <div className="notification-badge">
      <div className="notification-icon">{icon}</div>
      {number > 0 && <div className="notification-number">{number}</div>}
    </div>
  );
};

export default NotificationBadge;
