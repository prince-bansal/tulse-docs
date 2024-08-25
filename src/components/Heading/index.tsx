import { FC, PropsWithChildren } from "react";

const Heading: FC<PropsWithChildren> = ({ children }) => {
  return <h2 className="font-semibold text-2xl">{children}</h2>;
};

export default Heading;
