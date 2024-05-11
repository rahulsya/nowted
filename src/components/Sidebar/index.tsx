"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { NowtedLogo } from "@/assets/logo";
import Button from "@/components/Button";
import { fileIC, favoritesIC, trashIC, archiveIC } from "@/assets/icons/index";
import { useRouter, useSearchParams } from "next/navigation";
import SidebarItem from "@/components/SidebarItem";
import SectionTitle from "@/components/SectionTitle";
import useLoading from "@/hooks/useLoading";
import { newNote, getRecentNotes } from "@/firebase/store";
import { Note } from "@/types/types";
import NoteFolder from "../NoteFolder";
import { dateNow } from "@/utils/date";

function Sidebar() {
  const router = useRouter();
  const params = useSearchParams();
  const { isLoading, startLoading, stopLoading } = useLoading();
  const [recentNotes, setRecentNotes] = useState<Note[]>([]);

  useEffect(() => {
    getNotes();
  }, []);

  const handleNewNote = async () => {
    try {
      startLoading();
      const folder = params.get("folder")
        ? (params.get("folder") as string)
        : "";
      const data = await newNote({
        id: "",
        content: "",
        date: dateNow(),
        folder: folder,
        title: "",
      });
      if (folder) {
        router.push(`/?folder=${folder}&id=${data?.id}`);
      } else {
        router.push(`/?id=${data?.id}`);
      }
      stopLoading();
    } catch (error) {
      stopLoading();
      console.log(error);
    }
  };

  // recent note
  const getNotes = async () => {
    try {
      startLoading();
      const data = await getRecentNotes();
      if (data) {
        setRecentNotes(data);
      }
      stopLoading();
    } catch (error) {}
  };

  return (
    <div className="flex flex-col py-[30px]">
      <div className="flex flex-row px-[20px]">
        <Image src={NowtedLogo} width={100} height={38} alt="nowted_logo" />
      </div>
      <div className="px-[20px] pt-[30px]">
        <Button
          disabled={isLoading}
          onClick={() => handleNewNote()}
          text="+ Add new"
        />
      </div>
      <div className="mt-[30px]">
        <div className="px-[20px] py-[5px]">
          <SectionTitle title="Recents" />
        </div>
        {recentNotes.map((item, index) => {
          return (
            <SidebarItem
              onClick={() => router.push(`/?id=${item.id}`)}
              data={item}
              key={index}
              icon={fileIC}
            />
          );
        })}
      </div>

      <div className="pt-[30px]">
        <NoteFolder />
      </div>

      <div className="pt-[30px]">
        <div className="px-[20px] py-[5px]">
          <SectionTitle title="More" />
        </div>
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
      </div>
    </div>
  );
}

export default Sidebar;
