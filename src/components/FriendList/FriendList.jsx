import PropTypes from 'prop-types';
import { FriendlistItem } from 'components/FriendList/FriendListItem';
import styles from 'components/FriendList/FriendList.module.css';

export const FriendList = ({ friends }) => {
  return (
    <ul className={styles.friendList}>
      {friends.map(({ id, isOnline, avatar, name }) => (
        <FriendlistItem
          key={id}
          isOnline={isOnline}
          avatar={avatar}
          name={name}
        />
      ))}
    </ul>
  );
};

FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      isOnline: PropTypes.bool.isRequired,
      avatar: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
    })
  ),
};
