import React from "react";
import Image from "next/image";

type Props = {};

function Bot({}: Props) {
  return (
    <div className="flex items-center justify-center py-3">
      <div className="shadow-md px-5 py-2 md:py-3 rounded-md bg-gray-200/90 max-w-3xl">
        <Image
          src="/openai-2.svg"
          /*  src="https://links.papareact.com/c2cdd5" */
          alt="openAI logo"
          width={120}
          height={40}
          className="w-10 h-10 text-blue inline mx-2 float-left"
        />
        <p className="text-sm font-light min-w-min  ">
          GPT4 is summarizing your tasks for the day...
        </p>
      </div>
    </div>
  );
}

export default Bot;
