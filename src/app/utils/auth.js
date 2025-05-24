import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';

export async function protectRoute() {
  const cookieStore = await cookies();
  const token = cookieStore.get('accessToken')?.value;

  if (!token) {
    redirect('/sign-in');
  }

  return token;
};
