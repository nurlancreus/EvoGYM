import { ReactNode } from "react";

type HeadingProps = {
  children: ReactNode;
};

function Heading({ children }: HeadingProps) {
  return (
    <h2
      className="basis-3/5
       font-montserrat text-2xl font-bold uppercase md:text-3xl"
    >
      {children}
    </h2>
  );
}

export default Heading;
