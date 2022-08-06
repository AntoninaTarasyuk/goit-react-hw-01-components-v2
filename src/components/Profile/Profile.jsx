import { PropTypes } from 'prop-types';
import { PWrap, PDescription, PAvatar, PName, PInfo, PStats, PStatsItem, PLabel } from './Profile.styled'

export default function Profile(props) {
  const { avatar, username, tag, location, stats } = props;

  return <PWrap>
    <PDescription>
      <PAvatar
        src={avatar}
        alt={username}
      />
      <PName><b>{username}</b></PName>
      <PInfo>@{tag}</PInfo>
      <PInfo>{location}</PInfo>
    </PDescription>

    <PStats>
      <PStatsItem>
        <PLabel>Followers</PLabel>
        <span><b>{stats.followers}</b></span>
      </PStatsItem>
      <PStatsItem>
        <PLabel>Views</PLabel>
        <span><b>{stats.views}</b></span>
      </PStatsItem>
      <PStatsItem>
        <PLabel>Likes</PLabel>
        <span><b>{stats.likes}</b></span>
      </PStatsItem>
    </PStats>
  </PWrap>
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
  })
}