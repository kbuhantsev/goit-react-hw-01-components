import { Box } from 'components/Box';
import PropTypes from 'prop-types';
import { useTheme } from 'styled-components';
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
  const theme = useTheme();
  const { followers, views, likes } = stats;

  return (
    <ProfileDiv>
      <Box
        flexDirection="column"
        alignItems="center"
        gridGap={theme.space[4]}
        pt={theme.space[5]}
        pb={theme.space[5]}
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
