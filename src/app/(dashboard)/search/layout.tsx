import SearchHeader from '@/components/Navigations/headers/SearchHeader';
import React from 'react';

const SearchLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className='  bg-primary/3'>
      <SearchHeader />
      {children}
    </div>
  );
}

export default SearchLayout;
