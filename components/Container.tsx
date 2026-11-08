import { cn } from "@/lib/utils";

type Props = {
  children: React.ReactNode;
  className?: string;
};

const Container = ({ children, className }: Props) => {
  return (
    <div className={cn("mx-auto w-full max-w-6xl px-4 md:px-8", className)}>
      {children}
    </div>
  );
};

export default Container;
