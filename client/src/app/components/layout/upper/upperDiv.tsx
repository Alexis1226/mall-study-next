import React from 'react';
import LogoBox from './logoBox';
import RightWing from './rightWing';

const UpperDiv = () => {
  return (
    <div className="grid grid-cols-[minmax(120px,_1fr)_1fr_minmax(120px,_1fr)] mb-[32px] h-[67px]">
      <div>a</div>
      <LogoBox />
      <RightWing />
    </div>
  );
};

export default UpperDiv;
