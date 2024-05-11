"use client";
import React, { useEffect, useState } from "react";

function Space({
  children,
  spaces,
  typeSpace = "padding",
}: {
  children: React.ReactNode;
  typeSpace?: "padding" | "margin";
  spaces: {
    x?: number;
    y?: number;
    r?: number;
    l?: number;
    t?: number;
    b?: number;
  };
}) {
  const [space, setSpace] = useState("");
  const classes = () => {
    let classname: string[] = [];
    if (spaces) {
      Object.entries(spaces).map(([key, value]) => {
        const spaceType = typeSpace == "padding" ? "p" : "m";
        classname.push(`${spaceType}${key}-[${value}px]`);
      });
    }
    return classname.join(" ");
  };

  useEffect(() => {
    setSpace(classes());
  }, [spaces]);

  return <div className={`${space}`}>{children}</div>;
}

export default Space;
