import { PropTypes } from 'prop-types';
import { FList, FItem } from './FriendList.styled';
import FriendListItem from '../FriendListItem/FriendListItem';

export default function FriendList({ friends }) {
  return <FList>
    {friends.map(friend => (
      <FItem key={friend.id} >
        <FriendListItem friend={friend}/>
      </FItem>
    ))}
  </FList>
}

FriendList.propTypes = {
  friends: PropTypes.arrayOf(PropTypes.object).isRequired,
};