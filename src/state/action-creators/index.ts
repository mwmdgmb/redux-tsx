import axios from "axios";
import { Dispatch } from "redux";
import { ActionType } from "../action-types";
import { Action } from "../actions";

export const searchRepositories = (term: string) => {
  return async (dispatch: Dispatch<Action>) => {
    dispatch({
      type: ActionType.RESPOSITORIES_START,
    });

    try {
      const URL = "https://registry.npmjs.org/-/v1/search";
      const { data } = await axios.get(URL, {
        params: {
          text: term,
        },
      });

      const names = data.objects.map((result: any) => {
        return result?.package?.name;
      });

      dispatch({
        type: ActionType.RESPOSITORIES_SUCCESS,
        payload: names,
      });
    } catch (error) {
      dispatch({
        type: ActionType.RESPOSITORIES_FAILED,
        payload: error.message,
      });
    }
  };
};
