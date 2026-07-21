import SettingsHeader from '@/components/Navigations/headers/SettingsHeader';
import React from 'react';

const SettingsLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className='bg-primary/3'>
      <SettingsHeader />
      {children}
    </div>
  );
}

export default SettingsLayout;
