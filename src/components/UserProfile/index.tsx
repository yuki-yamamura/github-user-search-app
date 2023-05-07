import dayjs from 'dayjs';
import Image from 'next/image';
import { FC } from 'react';
import { User } from '@/types/User';
import OptionalInfoList from './OptionalInfoList';

type Props = {
  user: User;
};

const UserProfile: FC<Props> = ({ user }) => {
  const formattedDate = dayjs(user.created_at).format('D MMM YYYY');

  return (
    <div className="rounded-2xl bg-white px-6 pb-12 pt-8">
      <div className="mb-8 flex items-center gap-x-4">
        <Image
          src={`${user.avatar_url}.svg`}
          alt="avatar"
          width={70}
          height={70}
          className="rounded-full"
        />
        <div className="flex flex-col">
          <div className="text-base font-bold text-black">{user.name}</div>
          <div className="text-blue">@{user.login}</div>
          <div className="text-gray">Joined {formattedDate}</div>
        </div>
      </div>
      <div className="mb-6">{user.bio}</div>
      <div className="mb-6 flex justify-evenly rounded-lg bg-lightBlue px-4 py-5">
        <div className="flex flex-col items-center gap-y-2">
          <label htmlFor="repos" className="text-[11px] ">
            Repos
          </label>
          <div id="repos" className="text-base font-bold text-black">
            {user.public_repos}
          </div>
        </div>
        <div className="flex flex-col items-center gap-y-2">
          <label htmlFor="followers" className="text-[11px] ">
            Followers
          </label>
          <div id="followers" className="text-base font-bold text-black">
            {user.followers}
          </div>
        </div>
        <div className="flex flex-col items-center gap-y-2">
          <label htmlFor="following" className="text-[11px] ">
            Following
          </label>
          <div id="following" className="text-base font-bold text-black">
            {user.following}
          </div>
        </div>
      </div>
      <OptionalInfoList user={user} />
    </div>
  );
};

export default UserProfile;
