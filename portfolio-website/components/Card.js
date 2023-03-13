import React from "react";
import Image from "next/image";

export default function Card(props) {
  return (
    <div className="text-center shadow-lg p-10 rounded-xl my-10 md:w-96">
      <Image src={props.image} width={100} height={100} className="mx-auto" />
      <h3 className="text-lg font-semibold pt-8 pb-2">{props.header}</h3>
      <p className="py-2">{props.text}</p>
      <h4 className="py-4 text-teal-600">{props.toolsHeader}</h4>
      <p className="text-gray-800 py-1">{props.tools[0]}</p>
      <p className="text-gray-800 py-1">{props.tools[1]}</p>
      <p className="text-gray-800 py-1">{props.tools[2]}</p>
      <p className="text-gray-800 py-1">{props.tools[3]}</p>
    </div>
  );
}
