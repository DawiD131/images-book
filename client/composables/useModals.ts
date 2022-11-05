import {computed, ComputedRef} from "@vue/reactivity";
import {useModalsStore} from "../store/ModalsStore";
import {ModalKey} from "../models/modals";

interface IUseModal {
    modalState: ComputedRef<boolean>;
    setModalState: (state: boolean) => void;
}

export const useModal = (modalKey: ModalKey): IUseModal => {
    const modalsStore = useModalsStore();
    const setModalState = (state: boolean) => modalsStore.setModalState(modalKey, state);

    return {
        modalState: computed(() => modalsStore[modalKey]),
        setModalState
    };
};
