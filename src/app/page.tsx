"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import { useSearchParams } from "next/navigation";
import { calenderIC, folderIC, loadingIC } from "@/assets/icons";
import { File } from "@/assets/images";

import useForm from "@/hooks/useForm";
import useLoading from "@/hooks/useLoading";
import { getNote, updateNote } from "@/firebase/store";

export default function Home() {
  const params = useSearchParams();
  const { form, setForm, changeForm, clearForm } = useForm();
  const { isLoading, startLoading, stopLoading } = useLoading();

  const [changeInput, setChangeInput] = useState(false);
  // const [timeoutId,setTimeoutId]=useState<NodeJS.Timeout>()

  const handleInputChance = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { target } = event;
    const newValue = target.value;
    setChangeInput(true);
    changeForm(target.name, newValue);
  };

  useEffect(() => {
    let timeoutId: NodeJS.Timeout;
    timeoutId = setTimeout(() => {
      if (changeInput && form.id) handleUpdateNote();
      setChangeInput(false);
    }, 500);
    return () => clearTimeout(timeoutId);
  }, [form]);

  useEffect(() => {
    if (params.get("id")) {
      startLoading();
      const id = params.get("id");
      getNoteById(id as string);
    } else {
      clearForm();
    }
  }, [params]);

  const getNoteById = async (id: string) => {
    try {
      const data = await getNote(id);
      if (data) {
        setForm({ ...data, id: `${id}` });
      }
      stopLoading();
    } catch (error) {
      stopLoading();
      console.log(error);
    }
  };

  const handleUpdateNote = async () => {
    await updateNote(form);
  };

  if (isLoading) {
    return (
      <div className="flex h-screen flex-col items-center justify-center gap-2 text-center">
        <Image
          className="animate-spin-slow"
          width={120}
          height={120}
          src={loadingIC}
          alt="icon_loading"
        />
        <div className="text-2xl font-semibold text-white">
          Proccessing Load Note ...
        </div>
        <div className="max-w-[460px] text-gray-400">
          {`
          "Writing is a way of thinking. To write well is to think clearly.
          That's why it's so hard." - David McCullough
          `}
        </div>
      </div>
    );
  }

  if (form.id == "") {
    return (
      <div className="flex h-screen flex-col items-center justify-center gap-2 text-center">
        <Image width={120} height={120} src={File} alt="icon_file" />
        <div className="text-2xl font-semibold text-white">
          Select a note to view
        </div>
        <div className="max-w-[460px] text-gray-400">
          Choose a note from the list on the left to view its contents, or
          create a new note to add to your collection.
        </div>
      </div>
    );
  }

  return (
    <div className="flex h-screen flex-col p-[50px]">
      <input
        type="text"
        placeholder="Untitled"
        className="bg-transparent text-[32px] font-semibold text-white focus:outline-none"
        value={form.title}
        name="title"
        onChange={(e) => handleInputChance(e)}
      />
      <div className="mt-4 flex gap-4 border-b border-gray-500 pb-4">
        <Image width={20} height={20} src={calenderIC} alt="icon" />
        <div className="font-semibold text-gray-400">Date</div>
        <div className="pl-4">
          <input
            type="date"
            name="date"
            className="bg-transparent font-semibold text-white focus:outline-none"
            value={form.date}
            onChange={(e) => handleInputChance(e)}
          />
        </div>
      </div>

      <div className="mt-4 flex gap-4 border-b border-gray-500 pb-4">
        <Image width={20} height={20} src={folderIC} alt="icon" />
        <div className="font-semibold text-gray-400">Folder</div>
        <div className="pl-4">
          <input
            type="text"
            name="folder"
            placeholder="Untitled Folder"
            value={form.folder}
            onChange={(e) => handleInputChance(e)}
            className="bg-transparent font-semibold text-white focus:outline-none"
          />
        </div>
      </div>
      <textarea
        rows={1}
        name="content"
        placeholder="Write Content Here..."
        className="m-0 h-full w-full resize-none border-0 bg-transparent py-[10px] text-white placeholder:text-gray-400 focus:outline-none"
        defaultValue={``}
        onChange={(e) => handleInputChance(e)}
        value={form.content}
      ></textarea>
    </div>
  );
}
