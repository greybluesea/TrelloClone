import { create } from "zustand";

interface ModalState {
  isOpen: boolean;
  openModal: () => void;
  closeModal: () => void;
  newTaskTitle: string;
  setNewTaskTitle: (title: string) => void;
  newTaskStatus: Status;
  setNewTaskStatus: (status: Status) => void;
  image: File | null;
  setImage: (image: File | null) => void;
}
const useModalStore = create<ModalState>()((set) => ({
  isOpen: false,

  openModal: () => set({ isOpen: true }),
  closeModal: () => set({ isOpen: false }),
  newTaskTitle: "",
  setNewTaskTitle: (title) => set({ newTaskTitle: title }),
  newTaskStatus: "todo",
  setNewTaskStatus: (status) => set({ newTaskStatus: status }),
  image: null,
  setImage: (image) => set({ image }),
}));

export default useModalStore;
