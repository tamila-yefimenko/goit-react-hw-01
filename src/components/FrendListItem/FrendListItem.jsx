import s from './FrendListItem.module.css';
import clsx from 'clsx';

const FriendListItem = ({ friend }) => {
  const onlineStatus = friend.isOnline ? 'Online' : 'Offline';
  return (
    <div className={s.itemContent}>
      <img
        className={s.friendImage}
        src={friend.avatar}
        alt="Avatar"
        width="80"
      />
      <p className={s.friendName}>{friend.name}</p>
      <p
        className={clsx(s.friendStatus, friend.isOnline ? s.online : s.offline)}
      >
        {onlineStatus}
      </p>
    </div>
  );
};

export default FriendListItem;
