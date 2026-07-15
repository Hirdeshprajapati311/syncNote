import DocumentsHeader from '@/components/Navigations/headers/DocumentsHeader';
import React from 'react';

const DocumentsLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className='py-2 px-6 border-b'>
      <DocumentsHeader />
      {children}
    </div>
  );
}

export default DocumentsLayout;
