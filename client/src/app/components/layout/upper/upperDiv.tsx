'use client';

import LogoBox from './logoBox';
import Link from 'next/link';
import { getSession, signOutWithForm } from '@utils/serverActions/auth';
import { useUserStore } from '@utils/zustand/store';
import { Button } from '@shadcn/button';
import { Icons } from '@components/icons';
import { useCallback, useEffect } from 'react';
import { useRouter } from 'next/navigation';

const UpperDiv = () => {
  const router = useRouter();
  const user = useUserStore((state) => state.user);
  const updateUser = useUserStore((state) => state.updateUser);
  const removeUser = useUserStore((state) => state.removeUser);

  const getUser = useCallback(async () => {
    const session = await getSession();
    updateUser(session?.user);
    return session;
  }, [updateUser]);

  useEffect(() => {
    const session = getUser();
    console.log('session', session);
    console.log('user', user);
    console.log('Object.keys(user)', Object.keys(user));
  }, [getUser, user]);

  Object.keys(user).length === 0 && getUser();

  return (
    <div className="grid grid-cols-[minmax(120px,_1fr)_1fr_minmax(120px,_1fr)] mb-[32px] h-[67px]">
      <div className="flex h-fit text-sm">
        {Object.keys(user).length === 0 ? (
          <Button onClick={() => router.push('/login')} className="border-none" variant="outline">
            <Icons.user />
          </Button>
        ) : (
          <form
            action={async () => {
              await signOutWithForm();
              removeUser();
            }}
          >
            <Button className="border-none" variant="outline">
              Hi! {user.name}
              <Icons.out />
            </Button>
          </form>
        )}
      </div>
      <LogoBox />
      <div className="flex justify-end">
        <Button className="border-none" variant="outline">
          <Icons.cart />
        </Button>
      </div>
    </div>
  );
};

export default UpperDiv;
