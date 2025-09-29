'use client';
import { useEffect } from 'react';
import { useUser } from '@clerk/nextjs';
import { useRouter } from 'next/navigation';

export default function VerifyEmailPage() {
  const { user } = useUser();
  const router = useRouter();

  useEffect(() => {
    if (user) {
      const type = user?.unsafeMetadata?.userType;
      if (type === 'ngo') {
        router.push('/onboarding/ngo/step-1');
      } else {
        router.push('/onboarding/individual');
      }
    }
  }, [user]);

  return (
    <div className="min-h-screen flex items-center justify-center">
      <p className="text-gray-700 font-medium">Verifying email, please wait...</p>
    </div>
  );
}
