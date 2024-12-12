// import { useRecoilValue } from "recoil";
import { useAtomValue } from "jotai";
import { balanceAtom } from "../atoms/balance";

export const useBalance = () => {
    // const value = useRecoilValue(balanceAtom);
    const value = useAtomValue(balanceAtom);
    return value;
}