import React from "react";

import Image from "next/image";

type IProps = {
  data: {
    title: string;
    id: string;
  };
  icon?: string;
};

function SidebarItem({ data, icon }: IProps) {
  return (
    <div className="flex flex-row items-start gap-2 py-[10px] px-[20px] hover:bg-dark-light cursor-pointer">
      {icon && <Image width={20} height={20} src={icon} alt="icon" />}
      <div className="text-gray-400 font-semibold">{data.title}</div>
    </div>
  );
}

export default SidebarItem;
