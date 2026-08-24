import DocumentsHeader from '@/components/Navigations/headers/DocumentsHeader';
import React from 'react';

const DocumentsLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className='  bg-primary/3'>
      <DocumentsHeader />
      {children}
    </div>
  );
}

export default DocumentsLayout;
