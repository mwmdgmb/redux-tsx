import { useState } from "react";
import { useActions } from "../hooks/useActions";
import { useTypedSelector } from "../hooks/useTypedSelector";
import { PushSpinner } from "react-spinners-kit";
import { Button, TextField } from "@material-ui/core";

const RepositoriesList: React.FC = () => {
  const [term, setTerm] = useState<string>("");
  const { searchRepositories, removedAllPackage } = useActions();
  const { data, isLoading, error } = useTypedSelector(
    (state) => state.repositories
  );

  const handleFinish = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    term && searchRepositories(term);
  };

  const handleRemovePackage = () => {
    removedAllPackage();
    setTerm("");
  };

  return (
    <div>
      <form onSubmit={handleFinish}>
        <TextField
          label="Search"
          variant="outlined"
          value={term}
          error={false}
          id="outlined-error-helper-text"
          helperText="Incorrect entry."
          onChange={(e) => setTerm(e.target.value)}
        />

        <Button variant="contained" color="primary">
          Search
        </Button>
      </form>

      {!data.length ? null : (
        <Button
          onClick={handleRemovePackage}
          color="secondary"
          variant="contained"
        >
          Removed All Package
        </Button>
      )}
      <hr />

      {error && <h3>{error}</h3>}

      {isLoading && <PushSpinner />}

      {!error && !isLoading && !data?.length && "not found package"}

      {!error &&
        !isLoading &&
        data.map((result) => <div key={result?.name}>{result?.name}</div>)}
    </div>
  );
};

export default RepositoriesList;
