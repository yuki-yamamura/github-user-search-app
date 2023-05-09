/* eslint-disable @next/next/no-img-element */
import { FC, useEffect, useRef } from 'react';
import Button from './Button';

type Props = {
  handleSubmit: () => void;
  handleKeyDown: (e: React.KeyboardEvent<HTMLInputElement>) => void;
  handleType: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

const SearchBar: FC<Props> = ({ handleSubmit, handleType, handleKeyDown }) => {
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    const input = inputRef.current;
    const placeholder = input?.placeholder;
    if (input !== null && placeholder !== undefined) {
      input.setAttribute('size', placeholder.length.toString());
    }
  }, []);

  return (
    <div className="flex items-center justify-between rounded-2xl bg-white py-2 pl-4 pr-2">
      <div className="flex gap-x-2 xs:gap-x-6">
        <label htmlFor="search">
          <img
            src="/assets/icon-search.svg"
            alt="magnifying-glass"
            className="h-5 w-5 xs:h-6 xs:w-6"
          />
        </label>
        <input
          id="search"
          type="text"
          placeholder="Search GitHub username…"
          ref={inputRef}
          className="placeholder-grayishBlue xs:text-[18px]"
          onChange={handleType}
          onKeyDown={handleKeyDown}
        />
      </div>
      <Button handleClick={handleSubmit} />
    </div>
  );
};

export default SearchBar;
