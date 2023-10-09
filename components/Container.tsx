type Props = {
  children: React.ReactNode;
};

export const Container: React.FC<Props> = ({ children }) => {
  return <div className='mx-auto max-w-7xl'>{children}</div>;
};

export const MainContainer: React.FC<Props> = ({ children }) => {
  return (
    <main>
      <Container>
        <div className='flex flex-col gap-y-8 p-4 sm:p-6 lg:p-8 space-y-20'>
          {children}
        </div>
      </Container>
    </main>
  );
};
