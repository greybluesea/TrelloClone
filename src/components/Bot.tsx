"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import useBoardStore from "@/store/boardStore";
import fetchSummary from "@/lib/fetchSummary";

type Props = {};

function Bot({}: Props) {
  const board = useBoardStore((state) => state.board);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [summary, setSummary] = useState<string>(
    "Click to fetch a summary from ChatGPT"
  );

  /*  useEffect(() => {
    if (board.lists.size === 0) return;
    setIsLoading(true);

    const BotFetchingSummary = async () => {
      const summary = await fetchSummary(board);
      setSummary(summary);
      setIsLoading(false);
    };

    BotFetchingSummary();
  }, []); */

  const BotFetchingSummary = async () => {
    setIsLoading(true);
    const summary = await fetchSummary(board);
    setSummary(summary);
    setIsLoading(false);
  };

  return (
    <div className="flex items-center justify-center py-3 ">
      <div className="shadow-md px-5 py-2 md:py-3 rounded-md bg-gray-200/90 max-w-3xl">
        <div></div>
        <Image
          src="/openai-2.svg"
          alt="openAI logo"
          width={40}
          height={40}
          className={
            "w-10 h-10 inline mx-2 float-left cursor-pointer " +
            (isLoading && "animate-spin")
          }
          onClick={() => setIsLoading(!isLoading)}
          //  onClick={() => BotFetchingSummary()}
        />
        <p className="text-sm  min-w-min ">
          {/*  {summary && !isLoading
            ? summary
            : "GPT is summarizing your tasks for the day..."} */}
          GPT is currently not in use, because of cost.
          {/* Click to fetch a summary from ChatGPT */}
        </p>
      </div>
    </div>
  );
}

export default Bot;
