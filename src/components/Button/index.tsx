import React from "react";

type IProps = {
  text: string;
  icon?: string;
  onClick: () => void;
  disabled?: boolean;
};

function Button({ text, icon, onClick, disabled }: IProps) {
  return (
    <button
      disabled={disabled}
      onClick={onClick}
      className="flex w-full flex-row justify-center gap-2 rounded-[3px] bg-dark-third py-2.5 disabled:opacity-75 "
    >
      {icon && <img src={icon} alt={`icon_${text}`} />}
      <p className="text-white">{!disabled ? text : "Loading..."}</p>
    </button>
  );
}

export default Button;
