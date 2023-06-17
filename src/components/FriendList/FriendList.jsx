import PropTypes from 'prop-types';
import { FriendlistItem } from 'components/FriendList/FriendListItem';

export const FriendList = ({ friends }) => {
  return (
    <ul className="friendList">
      {friends.map(({ id, isOnline, avatar, name }) => (
        <FriendlistItem
          id={id}
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
