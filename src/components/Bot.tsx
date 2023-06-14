"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import useBoardStore from "@/store/boardStore";
import fetchSummary from "@/lib/fetchSummary";

type Props = {};

function Bot({}: Props) {
  const board = useBoardStore((state) => state.board);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [summary, setSummary] = useState<string>("");

  useEffect(() => {
    if (board.lists.size === 0) return;
    setIsLoading(true);

    const BotFetchingSummary = async () => {
      const summary = await fetchSummary(board);
      setSummary(summary);
      setIsLoading(false);
    };

    BotFetchingSummary();
  }, [board]);

  return (
    <div className="flex items-center justify-center py-3">
      <div className="shadow-md px-5 py-2 md:py-3 rounded-md bg-gray-200/90 max-w-3xl">
        <Image
          src="/openai-2.svg"
          /*  src="https://links.papareact.com/c2cdd5" */
          alt="openAI logo"
          width={120}
          height={40}
          className={
            "w-10 h-10 text-blue inline mx-2 float-left " +
            (isLoading && "animate-spin")
          }
        />
        <p className="text-sm font-light min-w-min  ">
          {summary && !isLoading
            ? summary
            : "GPT is summarizing your tasks for the day..."}
        </p>
      </div>
    </div>
  );
}

export default Bot;
