import useModalStore from "@/store/modalStore";
import { Dialog, Transition } from "@headlessui/react";
import { Fragment } from "react";
import TaskStatusRadioGroup from "./TaskStatusRadioGroup";

export default function Modal() {
  const [isOpen, closeModal, newTaskTitle, setNewTaskTitle] = useModalStore(
    (state) => [
      state.isOpen,
      state.closeModal,
      state.newTaskTitle,
      state.setNewTaskTitle,
    ]
  );

  return (
    // Use the `Transition` component at the root level
    <Transition appear show={isOpen} as={Fragment}>
      <Dialog
        as="form"
        className={"relative z-5  "}
        onClose={() => closeModal()}
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
                  <div className="my-4 space-y-4">
                    <input
                      type="text"
                      placeholder="Enter a title here..."
                      value={newTaskTitle}
                      onChange={(e) => setNewTaskTitle(e.target.value)}
                      className="w-full border borger-gray-300 rounded-md outline-none py-3 px-5 bg-gray-100 "
                    />
                    <TaskStatusRadioGroup />
                  </div>
                </Dialog.Description>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  );
}
