import React from "react";

function Space({
  children,
  spaces,
  typeSpace = "padding",
}: Readonly<{
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
}>) {
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
  return <div className={classes()}>{children}</div>;
}

export default Space;
