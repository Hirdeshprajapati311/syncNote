import FavoritesHeader from '@/components/Navigations/headers/FavoritesHeader';
import React from 'react';

const FavoritesLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className='bg-primary/3'>
      <FavoritesHeader />
      {children}
    </div>
  );
}

export default FavoritesLayout;
