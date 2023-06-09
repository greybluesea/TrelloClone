import React from "react";
import Image from "next/image";

type Props = {};

function Bot({}: Props) {
  return (
    <div className="flex items-center justify-center py-3">
      <p className="text-sm font-light shadow-md px-5 py-2 md:py-3 rounded-md bg-gray-100 max-w-3xl">
        <Image
          src="/openai-2.svg"
          /*  src="https://links.papareact.com/c2cdd5" */
          alt="openAI logo"
          width={120}
          height={40}
          className="w-10 h-10 text-blue inline mx-2 "
        />
        GPT is summarizing your tasks for the day...
      </p>
    </div>
  );
}

export default Bot;
