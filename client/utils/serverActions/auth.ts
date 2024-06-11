'use server';
import { auth, signIn, signOut } from 'client/auth';

export const serverSignIn = async (name: string) => {
  await signIn(name.toLowerCase(), { redirectTo: '/' });
};

export const signOutWithForm = async (formData: FormData) => {
  await signOut();
};

export { auth as getSession };
