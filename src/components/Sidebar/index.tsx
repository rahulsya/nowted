import React from "react";
import Image from "next/image";
import { NowtedLogo } from "@/assets/logo";
import Button from "@/components/Button";
import Space from "@/components/Space";
import {
  fileIC,
  folderIC,
  favoritesIC,
  trashIC,
  archiveIC,
} from "@/assets/icons/index";
import SidebarItem from "@/components/SidebarItem";
import SectionTitle from "../SectionTitle";

function Sidebar() {
  const recentItems = [
    {
      id: "1",
      title: "Reflection on the Month of June",
    },
    {
      id: "2",
      title: "My Favorite Memories from Childhood",
    },
    {
      id: "3",
      title: "My Goals for the Next Year",
    },
  ];

  const folderProjects = [
    {
      id: "1",
      title: "Personal",
    },
    {
      id: "2",
      title: "Work",
    },
    {
      id: "3",
      title: "Travel",
    },
    {
      id: "4",
      title: "Events",
    },
    {
      id: "5",
      title: "Finances",
    },
  ];

  return (
    <div className="flex flex-col py-[30px]">
      <div className="flex flex-row px-[20px]">
        <Image src={NowtedLogo} width={100} height={38} alt="nowted_logo" />
      </div>
      <Space spaces={{ x: 20, t: 30 }}>
        <Button text="+ Add new" />
      </Space>
      <Space spaces={{ t: 30 }}>
        <Space spaces={{ x: 20, y: 5 }}>
          <SectionTitle title="Recents" />
        </Space>
        {recentItems.map((item, index) => {
          return <SidebarItem data={item} key={index} icon={fileIC} />;
        })}
      </Space>
      <Space spaces={{ t: 30 }}>
        <Space spaces={{ x: 20, y: 5 }}>
          <SectionTitle title="Folder" />
        </Space>
        {folderProjects.map((item, index) => {
          return <SidebarItem data={item} key={index} icon={folderIC} />;
        })}
      </Space>
      <Space spaces={{ t: 30 }}>
        <Space spaces={{ x: 20, y: 5 }}>
          <SectionTitle title="More" />
        </Space>
        <div>
          <SidebarItem
            data={{ id: "del", title: "Favorites" }}
            icon={favoritesIC}
          />
          <SidebarItem data={{ id: "trash", title: "Trash" }} icon={trashIC} />
          <SidebarItem
            data={{ id: "archive", title: "Archived Notes" }}
            icon={archiveIC}
          />
        </div>
      </Space>
    </div>
  );
}

export default Sidebar;
