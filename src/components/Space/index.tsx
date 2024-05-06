import React from "react";

function Space({
  children,
  x,
  y,
}: Readonly<{
  children: React.ReactNode;
  x?: number | 0;
  y?: number | 0;
}>) {
  return <div className={`px-[${x}px] py-[${y}px]`}>{children}</div>;
}

export default Space;
