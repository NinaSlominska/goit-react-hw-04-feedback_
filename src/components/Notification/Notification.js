import PropTypes from 'prop-types';
import { Message } from './Notification.style';
export const Notification = ({ message }) => {
  return <Message>{message}</Message>;
};
Notification.propTypes = {
  message: PropTypes.string.isRequired,
};
