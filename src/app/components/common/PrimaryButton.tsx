import React from "react";

type PrimaryButtonProps = {
  children: React.ReactNode;
  onClick?: () => void; 
  type?: "button" | "submit" | "reset"; 
  className?: string; 
};

const PrimaryButton: React.FC<PrimaryButtonProps> = ({
  children,
  onClick,
  type = "button",
  className = "",
}) => {
  return (
    <button
      type={type}
      onClick={onClick}
      className={`ring-2 ring-primary py-4 px-5 w-fit text-primary cursor-pointer text-xl font-bold mt-5 hover:bg-amber-300 hover:text-black transition-all duration-400 ease-in-out ${className}`}
    >
      {children}
    </button>
  );
};

export default PrimaryButton;
