import PropTypes from 'prop-types';
import FriendListItem from './FriendListItem';
import { Box } from '../Box';

function FriendList({ friends }) {
  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="center"
      gridGap="20px"
    >
      {friends.map(item => (
        <FriendListItem key={item.id} item={item} />
      ))}
    </Box>
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
