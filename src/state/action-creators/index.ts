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

      const result = data.objects.map((result: any) => {
        return result?.package;
      });

      dispatch({
        type: ActionType.RESPOSITORIES_SUCCESS,
        payload: result,
      });
    } catch (error) {
      dispatch({
        type: ActionType.RESPOSITORIES_FAILED,
        payload: error.message,
      });
    }
  };
};

export const removedAllPackage = () => {
  return (dispatch: Dispatch<Action>) => {
    dispatch({
      type: ActionType.REMOVE_ALL_PACKAGE,
    });
  };
};
