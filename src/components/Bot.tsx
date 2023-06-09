import React from "react";
import Image from "next/image";

type Props = {};

function Bot({}: Props) {
  return (
    <div>
      <Image
        src="/openai-2.svg"
        /*  src="https://links.papareact.com/c2cdd5" */
        alt="Trello logo"
        width={120}
        height={40}
        className="w-10 h-10 text-blue inline "
      />
    </div>
  );
}

export default Bot;
