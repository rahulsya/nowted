import Image from "next/image";
import React from "react";

type IProps = {
  title: string;
  icon?: string;
  children?: React.ReactNode;
};

export default function SectionTitle({ title, icon, children }: IProps) {
  return (
    <div className="flex flex-row items-center justify-between">
      <div className="font-semibold text-gray-400">{title}</div>
      <div>
        {icon && <Image width={20} height={20} src={icon} alt="icon" />}
      </div>
      <div>{children}</div>
    </div>
  );
}
