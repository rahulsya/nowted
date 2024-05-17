import React, {
  ButtonHTMLAttributes,
  useEffect,
  useRef,
  useState,
} from "react";
import {
  contextMenuActiveIC,
  contextMenuIC,
  archiveIC,
  favoritesIC,
  trashIC,
} from "@/assets/icons";
import Image from "next/image";

function ActionButton() {
  const [showMenu, setShowMenu] = useState(false);
  const menuRef = useRef<HTMLInputElement | null>(null);

  const handleCloseMenu = (event: any) => {
    if (menuRef.current && !menuRef.current.contains(event.target)) {
      setShowMenu(false);
    }
  };

  useEffect(() => {
    if (showMenu) {
      document.addEventListener("click", handleCloseMenu);
    } else {
      document.removeEventListener("click", handleCloseMenu);
    }

    return () => {
      document.removeEventListener("click", handleCloseMenu);
    };
  }, [showMenu]);

  const ActionMenu = ({
    icon,
    text,
    onClick,
  }: {
    icon: string;
    text: string;
    onClick: () => void;
  }) => {
    return (
      <button onClick={onClick} className="flex flex-row items-center gap-2">
        <Image width={20} height={20} src={icon} alt="" />
        {text}
      </button>
    );
  };

  return (
    <div className="relative flex flex-col">
      <button onClick={() => setShowMenu(!showMenu)}>
        <Image
          width={40}
          height={40}
          src={showMenu ? contextMenuActiveIC : contextMenuIC}
          alt="icon_loading"
        />
      </button>
      {showMenu && (
        <div
          ref={menuRef}
          className="animate-fade-in absolute right-0 top-[45px] flex w-[200px] flex-col gap-4 rounded-md bg-dark-light p-4 text-white"
        >
          <ActionMenu
            text="Add to favorites"
            icon={favoritesIC}
            onClick={() => {}}
          />
          <ActionMenu text="Archived" icon={archiveIC} onClick={() => {}} />
          <div className="border-t-[1px] pt-2">
            <ActionMenu text="Delete" icon={trashIC} onClick={() => {}} />
          </div>
        </div>
      )}
    </div>
  );
}

export default ActionButton;
