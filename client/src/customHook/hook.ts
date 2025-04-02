import { useDispatch } from "react-redux";
import type { AppDispatch } from "../app/store";

// Custom hook to use typed dispatch
export const useAppDispatch: () => AppDispatch = useDispatch;
