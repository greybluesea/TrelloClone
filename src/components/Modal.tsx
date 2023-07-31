import useModalStore from "@/store/modalStore";
import { Dialog, Transition } from "@headlessui/react";
import { FormEvent, Fragment, useRef } from "react";
import TaskStatusRadioGroup from "./TaskStatusRadioGroup";
import { CheckIcon } from "@heroicons/react/24/outline";
import Image from "next/image";
import { PhotoIcon } from "@heroicons/react/24/solid";
import callAddTask from "@/lib/callAddTask";
import useBoardStore from "@/store/boardStore";

export default function Modal() {
  const [
    isOpen,
    closeModal,
    newTaskTitle,
    setNewTaskTitle,
    newTaskFile,
    setNewTaskFile,
    newTaskStatus,
  ] = useModalStore((state) => [
    state.isOpen,
    state.closeModal,
    state.newTaskTitle,
    state.setNewTaskTitle,
    state.newTaskFile,
    state.setNewTaskFile,
    state.newTaskStatus,
  ]);

  const [addTask] = useBoardStore((state) => [state.addTask]);

  const imagePickerRef = useRef<HTMLInputElement>(null);

  /*   const newTaskInput: NewTaskInput = newTaskFile
    ? {
        title: newTaskTitle,
        status: newTaskStatus,
        file: newTaskFile,
      }
    : { title: newTaskTitle, status: newTaskStatus }; */
  const newTaskInput: NewTaskInput = {
    title: newTaskTitle,
    status: newTaskStatus,
    ...(newTaskFile && { file: newTaskFile }),
  };

  const handleAddTask = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!newTaskTitle) return;
    //callAddTask(newTaskInput);

    addTask(newTaskInput);
    setNewTaskFile(null);
    setNewTaskTitle("");
    closeModal();
  };

  return (
    // Use the `Transition` component at the root level
    <Transition appear show={isOpen} as={Fragment}>
      <Dialog
        as="form"
        className={"relative z-5  "}
        onClose={() => closeModal()}
        onSubmit={handleAddTask}
      >
        {/*
          Use one Transition.Child to apply one transition to the backdrop...
        */}
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-black/25" />
        </Transition.Child>

        {/*
          ...and another Transition.Child to apply a separate transition
          to the contents.
        */}
        <div className="fixed inset-0 overflow-y-auto">
          <div className=" flex min-h-full items-center justify-center p-4 text-center">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <Dialog.Panel
                className={
                  "w-full max-w-md transform overflow-hidden rounded-xl bg-gray-200 p-8  text-left align-middle shadow-lg transition-all "
                }
              >
                <Dialog.Title
                  as="h3"
                  className={
                    "text-lg font-medium leading-6 text-gray-800 pb-2 mt-3 text-center"
                  }
                >
                  Add a Task
                </Dialog.Title>
                <Dialog.Description>
                  <section id="wrapper" className="my-4 space-y-6">
                    <div
                      className={
                        "flex flex-row px-5 bg-gray-100 align-middle border border-gray-300 rounded-md ring-group shadow-md "
                      }
                    >
                      <input
                        type="text"
                        placeholder="Enter a title here..."
                        value={newTaskTitle}
                        onChange={(e) => setNewTaskTitle(e.target.value)}
                        className="w-full outline-none py-3 bg-gray-100 "
                      />
                      {newTaskTitle && (
                        <div className="shrink-0 grid content-center text-white bg-sky-300 rounded-full p-1 my-3">
                          <CheckIcon className="h-5 w-5 " />
                        </div>
                      )}
                    </div>
                    <TaskStatusRadioGroup />
                    <div>
                      <button
                        type="button"
                        onClick={() => {
                          imagePickerRef.current?.click();
                        }}
                        className="w-full bg-gray-100 text-gray-900 border border-gray-300 rounded-lg shadow-md outline-none p-5 ring-group"
                      >
                        <PhotoIcon className="h-6 w-6 mr-2  text-gray-800 inline-block" />
                        Upload Image
                      </button>
                      {newTaskFile && (
                        <Image
                          alt="uploaded image"
                          width={200}
                          height={160}
                          className="w-full h-44 object-cover mt-2 filter hover:grayscale transition-all duration-150 cursor-not-allowed"
                          src={URL.createObjectURL(newTaskFile)}
                          onClick={() => {
                            setNewTaskFile(null);
                          }}
                        />
                      )}
                      <input
                        type="file"
                        ref={imagePickerRef}
                        hidden
                        onChange={(e) => {
                          const file = e.currentTarget.files![0];
                          if (!file || !file.type.startsWith("image/")) return;
                          setNewTaskFile(file);
                        }}
                      />
                    </div>
                    <div className="flex justify-end">
                      <button
                        className={
                          "inline-flex   rounded-md border border-gray-300 bg-sky-400 px-4 py-2 text-md font-medium text-gray-200 hover:bg-sky-500 focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-300 focus-visible:ring-offset-2  disabled:text-gray-300 diabled:bg-gray-100 disabled:cursor-not-allowed disabled:grayscale-[50%] "
                        }
                        disabled={!newTaskTitle}
                      >
                        Submit
                      </button>
                    </div>
                  </section>
                </Dialog.Description>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  );
}
