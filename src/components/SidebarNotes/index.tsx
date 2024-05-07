import React from "react";
import Space from "@/components/Space";
import NoteCard from "../NoteCard";

function SidebarNotes() {
  const data = [
    {
      title: "My Goals for the Next Year",
      desc: "As the year comes to a ...",
      date: "31/12/2022",
    },
    {
      title: "Reflection on the Month of June",
      desc: "It's hard to believe that ...",
      date: "21/06/2022",
    },
    {
      title: "My Favorite Memories from Childhood",
      desc: "I was reminiscing about ...",
      date: "11/04/2022",
    },
    {
      title: "Reflection on the Month of June",
      desc: "It's hard to believe that ...",
      date: "21/06/2022",
    },
    {
      title: "My Goals for the Next Year",
      desc: "As the year comes to a ...",
      date: "31/12/2022",
    },
    {
      title: "Reflection on the Month of June",
      desc: "It's hard to believe that ...",
      date: "21/06/2022",
    },
    {
      title: "My Favorite Memories from Childhood",
      desc: "I was reminiscing about ...",
      date: "11/04/2022",
    },
    {
      title: "My Favorite Memories from Childhood",
      desc: "I was reminiscing about ...",
      date: "11/04/2022",
    },
    {
      title: "My Favorite Memories from Childhood",
      desc: "I was reminiscing about ...",
      date: "11/04/2022",
    },
  ];
  return (
    <Space spaces={{ x: 20, y: 30 }}>
      <div className="text-white font-semibold text-[22px] pb-[20px]">
        Personal
      </div>
      <div className="flex flex-col gap-4">
        {data.map((data, index) => {
          return <NoteCard item={data} key={index} />;
        })}
      </div>
    </Space>
  );
}

export default SidebarNotes;
