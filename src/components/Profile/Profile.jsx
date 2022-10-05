import { Box } from 'components/Box';
import PropTypes from 'prop-types';
import {
  ProfileDiv,
  Avatar,
  Name,
  UserContacts,
  Stats,
  Label,
  Quantity,
} from './Profile.styled';

function Profile({ username, tag, location, avatar, stats }) {
  const { followers, views, likes } = stats;

  return (
    <ProfileDiv>
      <Box
        display="flex"
        flexDirection="column"
        alignItems="center"
        gridGap="20px"
        pt="30px"
        pb="30px"
      >
        <Avatar src={avatar} alt={tag} />
        <Name>{username}</Name>
        <UserContacts>@{tag}</UserContacts>
        <UserContacts>{location}</UserContacts>
      </Box>

      <Stats>
        <li>
          <Label> Followers</Label>
          <Quantity>{followers}</Quantity>
        </li>
        <li>
          <Label>Views</Label>
          <Quantity>{views}</Quantity>
        </li>
        <li>
          <Label>Likes</Label>
          <Quantity>{likes}</Quantity>
        </li>
      </Stats>
    </ProfileDiv>
  );
}

Profile.propTypes = {
  username: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  stats: PropTypes.shape({
    followers: PropTypes.number.isRequired,
    views: PropTypes.number.isRequired,
    likes: PropTypes.number.isRequired,
  }).isRequired,
};

export default Profile;
