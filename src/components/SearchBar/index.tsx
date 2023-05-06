import Image from 'next/image';
import { FC, useEffect, useRef } from 'react';
import Button from './Button';

const SearchBar: FC = () => {
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    const input = inputRef.current;
    const placeholder = input?.placeholder;
    if (input !== null && placeholder !== undefined) {
      input.setAttribute('size', placeholder.length.toString());
    }
  }, []);

  return (
    <form className="flex items-center justify-between rounded-2xl bg-white py-2 pl-4 pr-2">
      <div className="flex gap-x-2">
        <label htmlFor="search">
          <Image
            src="/assets/icon-search.svg"
            alt="magnifying-glass"
            width={20}
            height={20}
          />
        </label>
        <input
          id="search"
          type="text"
          placeholder="Search GitHub username…"
          ref={inputRef}
          className="placeholder-grayishBlue"
        />
      </div>
      <Button />
    </form>
  );
};

export default SearchBar;
