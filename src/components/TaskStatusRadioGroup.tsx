import useModalStore from "@/store/modalStore";
import { RadioGroup } from "@headlessui/react";
import React from "react";

type statuses = [
  {
    status: "todo";
    name: "Todo";
    description: "A new task planned to do";
    color: "bg-red-200";
  },
  {
    status: "doing";
    name: "Doing";
    description: "A task current worked on";
    color: "bg-yello-200";
  },
  {
    status: "done";
    name: "Done";
    description: "A task already completed";
    color: "bg-green-200";
  }
];

const TaskStatusRadioGroup = () => {
  const [newTaskStatus, setNewTaskStatus] = useModalStore((state) => [
    state.newTaskStatus,
    state.setNewTaskStatus,
  ]);
  return (
    <RadioGroup value={newTaskStatus} onChange={setNewTaskStatus}>
      <RadioGroup.Label>Status</RadioGroup.Label>
      <RadioGroup.Option value="todo">
        {({ checked }) => (
          <span className={checked ? "bg-red-200" : ""}>Todo</span>
        )}
      </RadioGroup.Option>
      <RadioGroup.Option value="business">
        {({ checked }) => (
          <span className={checked ? "bg-yellow-200" : ""}>Doing</span>
        )}
      </RadioGroup.Option>
      <RadioGroup.Option value="enterprise">
        {({ checked }) => (
          <span className={checked ? "bg-green-200" : ""}>Done</span>
        )}
      </RadioGroup.Option>
    </RadioGroup>
  );
};

export default TaskStatusRadioGroup;
