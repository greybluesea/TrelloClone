import useModalStore from "@/store/modalStore";
import { PlusCircleIcon } from "@heroicons/react/24/solid";
import React from "react";

type Props = {};

const AddBtn = (props: Props) => {
  const openModal = useModalStore((state) => state.openModal);
  return (
    <button onClick={openModal}>
      <PlusCircleIcon className=" w-8 h-8 text-green-600/70 inline " />
    </button>
  );
};

export default AddBtn;
