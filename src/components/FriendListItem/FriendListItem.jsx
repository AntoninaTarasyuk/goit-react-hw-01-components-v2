import { PropTypes } from 'prop-types';
import {FWrap, FName, FStatus} from './FriendListItem.styled';

export default function FriendListItem ({ friend: { isOnline, avatar, name } }) {
  return (
    <FWrap>
      <FStatus isOnline={isOnline}/>
      <img src={avatar} alt={name} width="48" />
      <FName>{name}</FName>
    </FWrap>
  );
};

FriendListItem.propTypes = {
  friend: PropTypes.shape({
    isOnline: PropTypes.bool.isRequired,
    avatar: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
  }),
};