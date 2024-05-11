import React from "react";

import Image from "next/image";

type IProps = {
  data: {
    title: string;
    id: string;
  };
  icon?: string;
  onClick?: () => void;
  active?: boolean;
  activeClass?: string;
};

function SidebarItem({ data, icon, onClick, active, activeClass }: IProps) {
  const activeClasses = active && activeClass;
  return (
    <div
      onClick={onClick}
      className={`flex cursor-pointer flex-row items-start gap-2 px-[20px] py-[10px] hover:bg-dark-light ${activeClasses}`}
    >
      {icon && <Image width={20} height={20} src={icon} alt="icon" />}
      <div className={`font-semibold text-gray-400 ${active && "text-white"}`}>
        {data.title ? data.title : "Untitled"}
      </div>
    </div>
  );
}

export default SidebarItem;
