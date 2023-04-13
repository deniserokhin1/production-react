import { AppDispatch } from "01_app/providers/StoreProvider"
import { useDispatch } from "react-redux"

export const useAppDispatch = () => useDispatch<AppDispatch>()