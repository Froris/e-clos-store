'use client';

import { useEffect, useState } from 'react';
import { PreviewModalContainer } from '@/components/PreviewModalContainer';

export const ModalProvider = () => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null;
  }

  return (
    <>
      <PreviewModalContainer />
    </>
  );
};
