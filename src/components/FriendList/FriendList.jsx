import { PropTypes } from 'prop-types';
import {FList, FItem, FName, FStatus} from './FriendList.styled';

export default function FriendList({ items }) {
  return <FList>
    {items.map(({ id, isOnline, avatar, name }) => (
      <FItem key={id}>
        <FStatus style={{ backgroundColor: isOnline ? 'green' : 'red' }}></FStatus>
        <img src={avatar} alt={name} width="48" />
        <FName>{name}</FName>
      </FItem>
    ))}
  </FList>
}

FriendList.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      isOnline: PropTypes.bool.isRequired,
      avatar: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
    })
  ),
};