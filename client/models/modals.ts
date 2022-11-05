export interface ModalsState {
    albumsModal: boolean;
    commentModal: boolean;
}

export type ModalKey = keyof ModalsState;
