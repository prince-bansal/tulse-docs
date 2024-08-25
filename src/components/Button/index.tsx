import { FC, PropsWithChildren } from "react";

type ButtonProps = {
  onClick: () => void;
};

const Button: FC<PropsWithChildren<ButtonProps>> = ({ children, onClick }) => {
  return (
    <button
      onClick={onClick}
      className="p-1.5 px-4 text-gray-700 !font-poppins rounded-md shadow-sm
    mr-1.5 my-2 border bg-gray-100 border-gray-200 hover:border-gray-300 text-sm"
    >
      {children}
    </button>
  );
};

export default Button;
