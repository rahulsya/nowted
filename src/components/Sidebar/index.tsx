import React from "react";
import Image from "next/image";
import { NowtedLogo } from "@/assets/logo";
import Button from "@/components/Button";
import Space from "@/components/Space";

function Sidebar() {
  return (
    <div className="flex flex-col py-[30px]">
      <div className="flex flex-row px-[20px]">
        <Image src={NowtedLogo} width={100} height={38} alt="nowted_logo" />
      </div>
      <Space x={20} y={30}>
        <Button text="+ Add new" />
      </Space>
    </div>
  );
}

export default Sidebar;
