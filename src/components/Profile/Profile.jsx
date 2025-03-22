import s from './Profile.module.css';

const Profile = props => {
  return (
    <div className={s.wrapper}>
      <div className={s.iconWrapper}>
        <img className={s.icon} src={props.image} alt="User avatar" />
        <p className={s.name}>{props.name}</p>
        <p className={s.tag}>@{props.tag}</p>
        <p className={s.location}>{props.location}</p>
      </div>

      <ul className={s.userList}>
        <li className={s.userItem}>
          <span className={s.spanText}>Followers</span>
          <span className={s.spanNumber}>{props.stats.followers}</span>
        </li>
        <li className={s.userItem}>
          <span className={s.spanText}>Views</span>
          <span className={s.spanNumber}>{props.stats.views}</span>
        </li>
        <li className={s.userItem}>
          <span className={s.spanText}>Likes</span>
          <span className={s.spanNumber}>{props.stats.likes}</span>
        </li>
      </ul>
    </div>
  );
};

export default Profile;
