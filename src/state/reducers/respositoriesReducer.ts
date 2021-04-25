import { ActionType } from "../action-types";
import { Action } from "../actions";

interface RepositoriesState {
  isLoading: boolean;
  error: string | null;
  data: string[];
}

const initialState = {
  isLoading: false,
  error: null,
  data: [],
};

const reducer = (
  state: RepositoriesState = initialState,
  action: Action
): RepositoriesState => {
  switch (action.type) {
    case ActionType.RESPOSITORIES_START:
      return {
        ...state,
        isLoading: true,
        error: null,
        data: [],
      };
    case ActionType.RESPOSITORIES_SUCCESS:
      return {
        ...state,
        isLoading: false,
        error: null,
        data: action.payload,
      };
    case ActionType.RESPOSITORIES_FAILED:
      return {
        ...state,
        isLoading: false,
        error: action.payload,
        data: [],
      };

    case ActionType.REMOVE_ALL_PACKAGE:
      return {
        ...state,
        isLoading: false,
        error: null,
        data: [],
      };
    default:
      return state;
  }
};

export default reducer;
