import { create } from "zustand";

interface ModalState {
  isOpen: boolean;
  openModal: () => void;
  closeModal: () => void;
  newTaskTitle: string;
  setNewTaskTitle: (title: string) => void;
  newTaskStatus: Status;
  setNewTaskStatus: (status: Status) => void;
  newTaskFile: File | null;
  setNewTaskFile: (newTaskFile: File | null) => void;
}
const useModalStore = create<ModalState>()((set) => ({
  isOpen: false,

  openModal: () => set({ isOpen: true }),
  closeModal: () => set({ isOpen: false }),
  newTaskTitle: "",
  setNewTaskTitle: (title) => set({ newTaskTitle: title }),
  newTaskStatus: "todo",
  setNewTaskStatus: (status) => set({ newTaskStatus: status }),
  newTaskFile: null,
  setNewTaskFile: (newTaskFile) => set({ newTaskFile }),
}));

export default useModalStore;
