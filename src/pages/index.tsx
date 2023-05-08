import axios from 'axios';
import { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import SearchBar from '@/components/SearchBar';
import UserProfile from '@/components/UserProfile';
import { User } from '@/types/User';

const Home: NextPage = () => {
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    // fetch octocat's information as initial rendering showing it to user as an example.
    void axios
      .get<User>('https://api.github.com/users/octocat')
      .then((res) => setUser(res.data));
  }, []);

  return (
    <>
      <Head>
        <title>GitHub User Search App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="mx-auto flex max-w-xl flex-col justify-center md:max-w-3xl">
        <div className="mb-9 mt-8 flex items-center justify-between">
          {/* TODO: implement dark mode */}
          <h1 className="text-[26px] text-black">devfinder</h1>
          <div className="flex gap-x-5">
            <label htmlFor="theme" className="uppercase">
              dark
            </label>
            <button id="theme" type="button">
              <Image
                src="/assets/icon-moon.svg"
                alt="moon"
                width={20}
                height={20}
              />
            </button>
          </div>
        </div>
        <div className="mb-4">
          <SearchBar />
        </div>
        {user && (
          <div className="mb-20">
            <UserProfile user={user} />
          </div>
        )}
      </main>
    </>
  );
};

export default Home;
