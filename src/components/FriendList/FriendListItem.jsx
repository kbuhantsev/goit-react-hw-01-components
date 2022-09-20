import clsx from 'clsx';
import css from './FriendListItem.module.css';

function FriendListItem({ item }) {
  const { avatar, name, isOnline } = item;
  return (
    <li className={css.item}>
      <span
        className={clsx(css.status, {
          [css.online]: isOnline,
          [css.offline]: !isOnline,
        })}
      ></span>
      <img className={css.avatar} src={avatar} alt={name} width="48" />
      <p className={css.name}>{name}</p>
    </li>
  );
}

export default FriendListItem;
