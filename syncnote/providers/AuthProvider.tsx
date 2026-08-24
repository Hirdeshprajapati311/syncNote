"use client"
import { useGetUser } from '@/hooks/useAuth';
import { useRouter } from 'next/navigation'
import React, { useEffect } from 'react'

const AuthProvider = ({ children }: { children: React.ReactNode }) => {

  const router = useRouter();

  const { data: user, isLoading, isError } = useGetUser();

  useEffect(() => {
    if (!isLoading && (isError || !user)) {
      router.replace("/login");
    }
  }, [isLoading, isError, user, router]);

  if (isLoading) {
    return <div>Checking authentication...</div>;
  }

  if (isError || !user) {
    return null;
  }



  return children;
}

export default AuthProvider