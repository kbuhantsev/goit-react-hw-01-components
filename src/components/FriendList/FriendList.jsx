import css from './FriendList.module.css';
import FriendListItem from './FriendListItem';

function FriendList({ friends }) {
  return (
    <ul className={css.friendList}>
      {friends.map(item => (
        <FriendListItem key={item.id} item={item} />
      ))}
    </ul>
  );
}

export default FriendList;
