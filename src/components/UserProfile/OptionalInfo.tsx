/* eslint-disable @next/next/no-img-element */
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
  const isOpaque = userInfo === null;
  const displayText = userInfo === null ? 'Not Available' : userInfo;

  return (
    <li className={`flex gap-x-2 ${isOpaque ? 'opacity-50' : ''}`}>
      <label htmlFor={info}>{icon}</label>
      {/http(s):\/\//.test(displayText) ? (
        <a id={info} href={displayText}>
          {displayText}
        </a>
      ) : (
        <div id={info} aria-label={info}>
          {displayText}
        </div>
      )}
    </li>
  );
};

export default OptionalInfo;
