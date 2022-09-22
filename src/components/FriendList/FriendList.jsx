import PropTypes from 'prop-types';
import FriendListItem from './FriendListItem';
import { FriendListUl } from './FriendList.styled';

function FriendList({ friends }) {
  return (
    <FriendListUl>
      {friends.map(item => (
        <FriendListItem key={item.id} item={item} />
      ))}
    </FriendListUl>
  );
}

FriendList.protoTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.exact({
      avatar: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      isOnline: PropTypes.bool.isRequired,
      id: PropTypes.number.isRequired,
    })
  ).isRequired,
};

export default FriendList;
