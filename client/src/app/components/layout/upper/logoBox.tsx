import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import logoImg from '@asset/img/logo.svg';

const LogoBox = () => {
  return (
    <div className="justify-items-center overflow-visible">
      <Link href="/">
        <Image src={logoImg} alt="logo" className="mx-auto " width={90} height={60} />
      </Link>
    </div>
  );
};

export default LogoBox;
