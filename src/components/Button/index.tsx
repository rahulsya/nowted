import React from "react";

type IProps = {
  text: string;
  icon?: string;
};

function Button({ text, icon }: IProps) {
  return (
    <button className="rounded-[3px] py-2.5 bg-dark-third flex flex-row justify-center gap-2 w-full">
      {icon && <img src={icon} alt={`icon_${text}`} />}
      <p className="text-white">{text}</p>
    </button>
  );
}

export default Button;
