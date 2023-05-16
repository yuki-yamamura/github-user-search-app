/* eslint-disable @next/next/no-img-element */
import dayjs from 'dayjs';
import { FC } from 'react';
import { User } from '@/types/User';
import OptionalInfoList from './OptionalInfoList';

type Props = {
  user: User;
};

const UserProfile: FC<Props> = ({ user }) => {
  const formattedDate = dayjs(user.created_at).format('D MMM YYYY');

  return (
    <div className="grid grid-cols-12 items-center rounded-2xl bg-card px-6 pb-12 pt-8 md:p-12">
      <img
        src={`${user.avatar_url}.svg`}
        alt="avatar"
        className="col-span-3 rounded-full md:col-span-2"
      />
      <div className="col-span-8 col-start-5 grid gap-y-1 md:col-span-9 md:col-start-4 md:grid-flow-col md:grid-rows-2 md:gap-y-2">
        <div className="text-base font-bold leading-none text-bold xs:text-[26px]">
          {user.name}
        </div>
        <div className="text-primary">@{user.login}</div>
        <div className="md:justify-self-end">Joined {formattedDate}</div>
      </div>
      <div className="col-span-full mb-6 mt-6 md:col-start-4 md:mb-8 md:mt-0">
        {user.bio}
      </div>
      <div className="col-span-full mb-6 flex justify-evenly rounded-lg bg-background px-4 py-5 md:col-start-4 md:mb-9 md:justify-between md:px-8">
        <div className="flex flex-col items-center gap-y-2 xs:items-start">
          <label htmlFor="repos" className="text-[11px] xs:text-[13px]">
            Repos
          </label>
          <div
            id="repos"
            className="text-base font-bold text-bold xs:text-[22px]"
          >
            {user.public_repos}
          </div>
        </div>
        <div className="flex flex-col items-center gap-y-2 xs:items-start">
          <label htmlFor="followers" className="text-[11px] xs:text-[13px]">
            Followers
          </label>
          <div
            id="followers"
            className="text-base font-bold text-bold xs:text-[22px]"
          >
            {user.followers}
          </div>
        </div>
        <div className="flex flex-col items-center gap-y-2 xs:items-start">
          <label htmlFor="following" className="text-[11px] xs:text-[13px]">
            Following
          </label>
          <div
            id="following"
            className="text-base font-bold text-bold xs:text-[22px]"
          >
            {user.following}
          </div>
        </div>
      </div>
      <div className="col-span-full md:col-start-4">
        <OptionalInfoList user={user} />
      </div>
    </div>
  );
};

export default UserProfile;
