import React from "react";
import { FaRegFileAlt } from "react-icons/fa";
import { LuDownload } from "react-icons/lu";
import { IoCloseSharp } from "react-icons/io5";
import { motion } from "framer-motion"
function Card({ data, reference }) {
  return (
    <motion.div drag dragConstraints={reference} whileDrag={{scale: 1.1}} dragElastic={0.2} dragTransition={{ bounceStiffness: 600, bounceDamping: 10 }} className="relative w-48 rounded-[45px] h-60 bg-zinc-900 text-white px-5 py-10 overflow-hidden">
      <FaRegFileAlt />
      <p className="py-2 text-xs leading-tight ">{data.desc}</p>
      <div className="footer w-full absolute bottom-0 left-0  ">
        <div className="px-7 py-0.5 text-xs flex items-center justify-between mb-5">
          <h5>{data.filesize}</h5>
          {data.close ? <LuDownload /> : <IoCloseSharp />}
        </div>
        {data.tag.isOpen && (
          <div className={`tag py-3 w-full flex items-center justify-center  ${data.tag.tagColor=== "blue" ? "bg-blue-600" : "bg-green-600"}`}>
            <h3 className="text-sm font-senibold">{data.tag.text}</h3>
          </div>
        )}
      </div>
    </motion.div>
  );
}

export default Card;
