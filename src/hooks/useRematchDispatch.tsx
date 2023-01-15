import { useDispatch } from "react-redux";
import { Dispatch } from "../store";

// eslint-disable-next-line @typescript-eslint/no-unused-vars,@typescript-eslint/ban-types,no-unused-vars
const useRematchDispatch = <_ extends {}, MD>(
    selector: (dispatch: Dispatch) => MD
) => {
    const dispatch = useDispatch<Dispatch>();
    return selector(dispatch);
};
export default useRematchDispatch;
