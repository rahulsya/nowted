import React from "react";
type IProps = {
  item: {
    title: string;
    date: string;
    desc: string;
  };
  onClick: () => void;
};

function NoteCard({ item, onClick }: IProps) {
  return (
    <div
      className="flex cursor-pointer flex-col gap-2 rounded-[3px] bg-dark-third p-[20px] hover:bg-dark-light"
      onClick={onClick}
    >
      <div className="text-lg font-semibold text-white">{item.title}</div>
      <div className="flex flex-row gap-2 text-base text-base font-light text-gray-400">
        <div className="text-gray-500">{item.date}</div>
        <div>{item.desc}</div>
      </div>
    </div>
  );
}

export default NoteCard;
