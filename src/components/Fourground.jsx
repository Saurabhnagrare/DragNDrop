import React, { useRef } from "react";
import Card from "./Card";

function Fourground() {
  const ref = useRef(null);

  const data = [
    { 
      desc: "Lorem ipsum sit amet rovident similique amet consectetur adipisicing elit consectetur adipisicing elit. eaque rerum! Provident similique amet consectetur adipisicing elit. eaque rerum! Provident similique",
      filesize: "0.6mb",
      close: true,
      tag: {
        isOpen: false,
        tagTitle: "Download Now",
        tagColor: "green",
      },
    },
    {
      desc: "Lorem ipsum sit amet rovident similique amet consectetur adipisicing elit consectetur adipisicing elit.",
      filesize: "0.9mb",
      close: false,
      tag: {
        isOpen: true,
        tagTitle: "Upload",
        tagColor: "blue",
      },
    },
    
    {
      desc: "Lorem ipsum sit amet rovident similique amet consectetur Lorem ipsum sit amet rovident similique amet consectetur",
      filesize: "12.mb",
      close: false,
      tag: {
        isOpen: true,
        tagTitle: "Download Now",
        tagColor: "green",
      },
    },
  ];

  return (
    <div
      ref={ref}
      className="p-10 flex gap-8 flex-wrap fixed top-0 left-0 z-[3] w-full h-full"
    >
      {data.map((item, index) => (
        <Card data={item} reference={ref} />
      ))}
    </div>
  );
}

export default Fourground;
