"use client";
import React, { useEffect, useState } from "react";
import Space from "@/components/Space";
import NoteCard from "../NoteCard";
import { useRouter, useSearchParams } from "next/navigation";
import { getNotesByFolder } from "@/firebase/store";
import { Note } from "@/types/types";

function SidebarNotes() {
  const router = useRouter();
  const params = useSearchParams();
  const [folder, setFolder] = useState("");
  const [notes, setNotes] = useState<Note[]>([]);

  useEffect(() => {
    if (params.get("folder")) {
      const folderQry = params.get("folder");
      setFolder(folderQry as string);
      getNotes(folderQry as string);
    }
  }, [params]);

  const getNotes = async (folder: string) => {
    const data = await getNotesByFolder(folder);
    if (data) {
      setNotes(data);
    }
  };
  return (
    <Space spaces={{ x: 20, y: 30 }}>
      <div className="pb-[20px] text-[22px] font-semibold text-white">
        {folder}
      </div>
      <div className="flex flex-col gap-4">
        {notes.map((data, index) => {
          const note = {
            title: data.title ? data.title : "Untitle",
            desc: data.content.substring(0, 100) + "...",
            date: data.date,
          };
          return (
            <NoteCard
              onClick={() => router.push(`/?folder=${folder}&id=${data.id}`)}
              item={note}
              key={index}
            />
          );
        })}
      </div>
    </Space>
  );
}

export default SidebarNotes;
