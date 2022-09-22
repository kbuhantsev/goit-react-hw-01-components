import PropTypes from 'prop-types';
import {
  ListItem,
  AvatarImage,
  NamePar,
  StatusSpan,
} from './FriendListItem.styled';

function FriendListItem({ item }) {
  const { avatar, name, isOnline } = item;
  return (
    <ListItem>
      <StatusSpan userStatus={isOnline} />
      <AvatarImage src={avatar} alt={name} width="48" />
      <NamePar>{name}</NamePar>
    </ListItem>
  );
}

FriendListItem.propTypes = {
  item: PropTypes.exact({
    avatar: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    isOnline: PropTypes.bool.isRequired,
    id: PropTypes.number.isRequired,
  }),
};

export default FriendListItem;
