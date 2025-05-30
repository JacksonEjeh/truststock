import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';

export async function protectRoute() {
  const cookieStore = await cookies();
  const token = cookieStore.get('accessToken')?.value;
  // console.log(token)
  if (!token) {
    redirect('/sign-in');
  }

  return token;
};
