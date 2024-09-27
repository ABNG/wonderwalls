type Props = {
  children: React.ReactNode;
};

const Container = ({ children }: Props) => {
  return <div className="mx-4 lg:mx-24">{children}</div>;
};

export default Container;
