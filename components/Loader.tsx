'use client';

import { ClipLoader } from 'react-spinners';

export const Loader = ({
  color = '#3498db',
  size = 50,
}: {
  color?: string;
  size?: number;
}) => {
  return <ClipLoader color={color} size={size} />;
};
