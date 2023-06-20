import PropTypes from 'prop-types';
import styles from 'components/FriendList/FriendList.module.css';
export const FriendlistItem = ({ isOnline, avatar, name }) => {
  return (
    <li className={styles.item}>
      <span className={isOnline ? styles.isOnline : styles.isOfline}>
        {isOnline}
      </span>
      <img
        className={styles.avatar}
        src={avatar}
        alt="User avatar"
        width="48"
      />
      <p className="name">{name}</p>
    </li>
  );
};

FriendlistItem.propTypes = {
  isOnline: PropTypes.bool.isRequired,
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
};
