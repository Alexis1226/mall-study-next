'use server';
import { auth, signIn, signOut } from 'client/auth';

// export const signInWithCredentials = async (formData: FormData) => {
//   await signIn('credentials', options);
//   // ...
// };
export const signInWithGoogle = async () => {
  await signIn('google');
  // ...
};
// export const signInWithGitHub = async () => {
//   await signIn('github', options);
//   // ...
// };
export const signOutWithForm = async (formData: FormData) => {
  await signOut();
};
export { auth as getSession };
