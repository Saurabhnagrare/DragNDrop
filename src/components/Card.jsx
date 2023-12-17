import React from "react";
import { FaRegFileAlt } from "react-icons/fa";
import { LuDownload } from "react-icons/lu";
import { IoClose } from "react-icons/io5";
import { motion } from "framer-motion";
import "./card.css";

function Card({ data, reference }) {
  return (
    <motion.div
      drag
      dragConstraints={reference}
      whileDrag={{ scale: 1.2 }}
      className="card flex-shrink-0 overflow-hidden relative py-10 px-7 text-white w-60 h-72 rounded-[35px]  bg-zinc-900/90  "
    >
      <FaRegFileAlt  />
      <p className="text-sm leading-tight mt-5 font-semibold">{data.desc}</p>
      <div className="footer absolute bottom-0  w-full left-0">
        <diV className="flex items-center justify-between py-4 px-8 mb-2">
          <h5>{data.filesize}</h5>
          <span className="w-6 h-6 bg-zinc-600 rounded-full flex items-center justify-center">
            {data.close ? <IoClose /> : <LuDownload size=".8em" color="#fff" />}
          </span>
        </diV>
        {data.tag.isOpen && (
          <div
            className={`${
              data.tag.tagColor === "blue" ? "bg-blue-600" : "bg-green-600"
            } text-center tag w-full py-5 `}
          >
            <h3 className="text-sm font-semibold">{data.tag.tagTitle}</h3>
          </div>
        )}
      </div>
    </motion.div>
  );
}

export default Card;
