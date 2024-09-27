type Props = {
  title: string;
};

const Heading = ({ title }: Props) => {
  return (
    <h1 className="relative text-3xl font-extrabold uppercase text-[#4d4d4d] after:absolute after:left-0 after:top-9 after:h-1 after:w-20 after:bg-borderColor">
      {title}
    </h1>
  );
};

export default Heading;
