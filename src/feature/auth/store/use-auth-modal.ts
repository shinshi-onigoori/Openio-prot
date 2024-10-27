import { atom, useAtom } from "jotai";

const authModalState = atom(false);

export const useAuthModal = () => {
    return useAtom(authModalState);
};