import React from 'react';
import Navigation from './navigation';
import SearchBar from './searchbar';

const BelowDiv = () => {
  return (
    <div>
      <div
        className={
          'relative grid grid-cols-[10fr_1fr] justify-items-center right-1/2 translate-x-[62.8%]'
        }
      >
        <Navigation className="" />
        <SearchBar className="w-[12vw] mr-[12vw]" />
      </div>
    </div>
  );
};

export default BelowDiv;
