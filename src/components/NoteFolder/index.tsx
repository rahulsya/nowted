"use client";
import React, { useEffect, useState } from "react";
import SectionTitle from "../SectionTitle";
import Image from "next/image";
import { folderIC, folderNewIC, folderOpenIC } from "@/assets/icons";
import SidebarItem from "../SidebarItem";
import {
  newFolder as createNewFolder,
  setFolder as saveUpdateFolder,
  getNoteFolder,
} from "@/firebase/store";
import { Folder } from "@/types/types";
import { useRouter, useSearchParams } from "next/navigation";

function NoteFolder() {
  const params = useSearchParams();
  const router = useRouter();
  const [folders, setFolders] = useState<Folder[]>([]);
  const [newFolder, setNewFolder] = useState<
    {
      id: string;
      name: string;
    }[]
  >([]);

  const onCreateNewFolder = async () => {
    if (newFolder.length >= 1) return;
    const folder = await createNewFolder();
    if (folder) {
      setNewFolder((state) => [folder, ...state]);
    }
  };

  const onChangeFolderName = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
    index: number
  ) => {
    const { target } = event;

    setNewFolder((prevState) => {
      const newState = prevState.map((state, i) => {
        if (i == index) {
          return { ...state, name: target.value };
        }
        return state;
      });
      return newState;
    });
  };

  const handleUpdateNewFolder = async (index: number) => {
    const updateFolder = await saveUpdateFolder(newFolder[index]);
    if (updateFolder) {
      setNewFolder([]);
      setFolders((state) => [updateFolder, ...state]);
    }
  };

  const getFolder = async () => {
    const data = await getNoteFolder();
    if (data) {
      setFolders(data);
    }
  };

  useEffect(() => {
    getFolder();
  }, []);

  return (
    <div>
      <div className="px-[20px] py-[5px]">
        <SectionTitle title="Folder">
          <button onClick={() => onCreateNewFolder()}>
            <Image src={folderNewIC} width={20} height={20} alt="new folder" />
          </button>
        </SectionTitle>
      </div>

      {newFolder.map((item, index) => {
        return (
          <div
            key={index}
            className="flex flex-row items-start gap-2 px-[20px] py-[10px] hover:bg-dark-light"
          >
            <div>
              <Image src={folderIC} width={20} height={20} alt="folder" />
            </div>
            <input
              type="text"
              name="folder"
              className="bg-transparent font-semibold text-white"
              value={item.name}
              onChange={(e) => onChangeFolderName(e, index)}
              onBlur={(e) => handleUpdateNewFolder(index)}
            />
          </div>
        );
      })}

      {folders.map((item, index) => {
        const folder = {
          id: item.id,
          title: item.name,
        };
        return (
          <SidebarItem
            active={params.get("folder") == item.name}
            activeClass="text-white"
            onClick={() => router.push(`/?folder=${item.name}`)}
            data={folder}
            key={index}
            icon={params.get("folder") == item.name ? folderOpenIC : folderIC}
          />
        );
      })}
    </div>
  );
}

export default NoteFolder;
