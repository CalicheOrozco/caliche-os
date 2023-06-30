import React from "react";

function WindowSection({ title, children }) {
  const Separator = () => (
    <div className="flex items-center my-4">
      <div className="mx-4 text-gray-500">{title}</div>
      <div className="h-px bg-gray-300 flex-1"></div>
    </div>
  );

  const IconList = () => (
    <div>
      <ul className="flex flex-wrap gap-4">{children}</ul>
    </div>
  );
  return (
    <>
      <Separator />
      <IconList />
    </>
  );
}

export default WindowSection;
