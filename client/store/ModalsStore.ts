import { defineStore } from "pinia";
import { ModalKey, ModalsState } from "~/models/modals";

export const useModalsStore = defineStore("ModalsStore", {
    state: () => (({
        albumsModal: false
    }) as ModalsState),
    actions: {
        setModalState(modalKey: ModalKey, state: boolean) {
            this[modalKey] = state;
        }
    },
});


