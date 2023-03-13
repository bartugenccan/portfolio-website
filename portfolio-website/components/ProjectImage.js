import React from "react";
import Image from "next/image";

export default function ProjectImage(props) {
  return (
    <div className="basis-1/3 shadow-lg flex-1 border-teal-500 border-2 rounded-xl">
      <Image
        src={props.image}
        className="rounded-lg object-cover"
        width={"100%"}
        height={"100%"}
        layout="responsive"
      />
    </div>
  );
}
