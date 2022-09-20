import css from './FriendList.module.css';

function FriendList({ friends }) {
  return (
    <ul className={css.frienList}>
      {friends.map(({ avatar, name, isOnline, id }) => (
        <li key={id} className={css.item}>
          <span className={css.status}></span>
          <img className={css.avatar} src={avatar} alt={name} width="48" />
          <p className={css.name}>{name}</p>
        </li>
      ))}
    </ul>
  );
}

export default FriendList;
