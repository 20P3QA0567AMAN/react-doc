import React, { useRef } from "react";
import Card from "./Card";
function Foreground() {
  const ref = useRef(null);
  const data = [
    {
      desc: "This is the background color of the card that will be displayed",
      filesize: ".9mb",
      close: true,
      tag: { isOpen: true, text: "Download Now", tagColor: "green" },
    },
    {
      desc: "This is the background color of the card that will be displayed",
      filesize: ".9mb",
      close: true,
      tag: { isOpen: true, text: "Download Now", tagColor: "blue" },
    },
    {
      desc: "This is the background color of the card that will be displayed",
      filesize: ".9mb",
      close: true,
      tag: { isOpen: true, text: "Download Now", tagColor: "green" },
    },
    {
      desc: "This is the background color of the card that will be displayed",
      filesize: ".9mb",
      close: true,
      tag: { isOpen: true, text: "Download Now", tagColor: "blue" },
    },
    {
      desc: "This is the background color of the card that will be displayed",
      filesize: ".9mb",
      close: true,
      tag: { isOpen: true, text: "Download Now", tagColor: "green" },
    }
  ];
  return (
    <div>
      <div ref={ref} className="fixed top-0 left-0 z-[3] w-full h-full p-6 ">
        <div className="flex items-center gap-3">
        {data.map((item, index) => (
          <Card key={index} data={item} reference={ref}/>
        ))}
        </div>
      </div>
    </div>
  );
}

export default Foreground;
