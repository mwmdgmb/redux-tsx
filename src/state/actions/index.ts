import { ActionType } from "../action-types";

interface SearchRepositoriesStart {
  type: ActionType.RESPOSITORIES_START;
}

interface SearchRepositoriesSuccess {
  type: ActionType.RESPOSITORIES_SUCCESS;
  payload: string[];
}

interface SearchRepositoriesFailed {
  type: ActionType.RESPOSITORIES_FAILED;
  payload: string;
}

interface removedAllPackage {
  type: ActionType.REMOVE_ALL_PACKAGE;
}

export type Action =
  | SearchRepositoriesStart
  | SearchRepositoriesSuccess
  | SearchRepositoriesFailed
  | removedAllPackage;
