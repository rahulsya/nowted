import React from "react";
type IProps = {
  item: {
    title: string;
    date: string;
    desc: string;
  };
};

function NoteCard({ item }: IProps) {
  return (
    <div className="flex flex-col gap-2 p-[20px] bg-dark-third rounded-[3px]">
      <div className="font-semibold text-white text-lg">{item.title}</div>
      <div className="flex flex-row text-base font-light text-gray-400 gap-2 text-base">
        <div className="text-gray-500">{item.date}</div>
        <div>{item.desc}</div>
      </div>
    </div>
  );
}

export default NoteCard;
