import useModalStore from "@/store/modalStore";
import { PlusCircleIcon } from "@heroicons/react/24/solid";
import React from "react";

type Props = {
  status: Status;
};

const AddBtn = ({ status }: Props) => {
  const [openModal, setNewTaskStatus] = useModalStore((state) => [
    state.openModal,
    state.setNewTaskStatus,
  ]);

  const handleClick = () => {
    setNewTaskStatus(status);
    openModal();
  };

  return (
    <button onClick={handleClick}>
      <PlusCircleIcon className=" w-8 h-8 text-green-600/70 inline " />
    </button>
  );
};

export default AddBtn;
