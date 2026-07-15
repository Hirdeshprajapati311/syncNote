import SearchHeader from '@/components/Navigations/headers/SearchHeader';
import React from 'react';

const SearchLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className='py-2 px-6 '>
      <SearchHeader />
      {children}
    </div>
  );
}

export default SearchLayout;
