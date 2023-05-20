import { FC } from 'react';
import BlogIcon from '@/components/icons/BlogIcon';
import CompanyIcon from '@/components/icons/CompanyIcon';
import LocationIcon from '@/components/icons/LocationIcon';
import TwitterIcon from '@/components/icons/TwitterIcon';
import { User } from '@/types/User';
import { infoList } from './OptionalInfoList';

type Props = {
  user: User;
  info: (typeof infoList)[number];
};

const OptionalInfo: FC<Props> = ({ user, info }) => {
  const getUserInfo = () => {
    switch (info) {
      case 'blog':
      case 'location':
      case 'company':
        return user[info];
      case 'twitter':
        return user.twitter_username;
      default: {
        const _check: never = info;
        return null;
      }
    }
  };

  const getIcon = () => {
    switch (info) {
      case 'blog':
        return <BlogIcon />;
      case 'location':
        return <LocationIcon />;
      case 'company':
        return <CompanyIcon />;
      case 'twitter':
        return <TwitterIcon />;
      default: {
        const _check: never = info;
      }
    }
  };

  const userInfo = getUserInfo();
  const icon = getIcon();
  // GitHub user profile may include an empty string. so it should be disabled also.
  const isOpaque = userInfo === null || userInfo?.trim() === '';
  const displayText =
    userInfo === null || userInfo?.trim() === '' ? 'Not Available' : userInfo;

  return (
    <li
      className={`group flex items-center gap-x-4 ${
        isOpaque ? 'opacity-50' : ''
      }`}
    >
      <label htmlFor={info}>{icon}</label>
      {/https?:\/\//.test(displayText) ? (
        <a
          id={info}
          href={displayText}
          className="block truncate focus:underline group-hover:underline"
        >
          {displayText}
        </a>
      ) : (
        <div id={info} aria-label={info} className="truncate">
          {displayText}
        </div>
      )}
    </li>
  );
};

export default OptionalInfo;
