import {api} from "./api";
import {setListIllnesses} from "../actions/list";

export const illnesses = () => async (dispatch) => {
    const response = await api.get('info/ilness_list');
    dispatch(setListIllnesses(response.data));
};