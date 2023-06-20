import useModalStore from "@/store/modalStore";
import { RadioGroup } from "@headlessui/react";
import { CheckIcon } from "@heroicons/react/24/outline";
import React from "react";

const statuses = [
  {
    status: "todo",
    name: "To Do",
    description: "A new task planned to do",
    color: "bg-red-300",
    textColor: "text-red-300",
  },
  {
    status: "doing",
    name: "Doing",
    description: "A task currently working on",
    color: "bg-yellow-300",
    textColor: "text-yellow-400",
  },
  {
    status: "done",
    name: "Done",
    description: "A task already completed",
    color: "bg-green-300",
    textColor: "text-green-300",
  },
];

const TaskStatusRadioGroup = () => {
  const [newTaskStatus, setNewTaskStatus] = useModalStore((state) => [
    state.newTaskStatus,
    state.setNewTaskStatus,
  ]);
  return (
    <RadioGroup
      value={newTaskStatus}
      onChange={setNewTaskStatus}
      className={"w-full space-y-2 pt-2"}
    >
      {statuses.map((status) => (
        <RadioGroup.Option
          value={status.status}
          key={status.status}
          className={({ active, checked }) =>
            `${
              active
                ? "ring-2 ring-gray-100 ring-opacity-60 ring-offset-2 ring-offset-gray-100"
                : ""
            }
                  ${checked ? status.color + "  text-gray-800" : "bg-gray-100"}
                    relative flex cursor-pointer rounded-lg px-5 py-4 shadow-md focus:outline-none`
          }
        >
          {({ active, checked }) => (
            <>
              <div className="flex w-full items-center justify-between">
                <div className="flex items-center">
                  <div className="text-sm">
                    <RadioGroup.Label
                      as="p"
                      className={"text-gray-800 font-medium"}
                    >
                      {status.name}
                    </RadioGroup.Label>
                    <RadioGroup.Description
                      as="span"
                      className={"text-gray-500"}
                    >
                      <span>{status.description}</span>
                    </RadioGroup.Description>
                  </div>
                </div>
                {checked && (
                  <div
                    className={
                      "shrink-0 font-bold bg-gray-100 rounded-full p-1 " +
                      status.textColor
                    }
                  >
                    <CheckIcon className="h-5 w-5" />
                  </div>
                )}
              </div>
            </>
          )}
        </RadioGroup.Option>
      ))}
      {/* <RadioGroup.Option value="todo">
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
      </RadioGroup.Option> */}
    </RadioGroup>
  );
};

export default TaskStatusRadioGroup;
