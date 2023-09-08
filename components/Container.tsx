type Props = {
  children: React.ReactNode;
};

export const Container: React.FC<Props> = ({ children }) => {
  return <div className='mx-auto max-w-7xl'>{children}</div>;
};
