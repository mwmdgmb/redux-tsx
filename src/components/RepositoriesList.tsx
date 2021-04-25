import { useState } from "react";
import { useActions } from "../hooks/useActions";
import { useTypedSelector } from "../hooks/useTypedSelector";
import { PushSpinner } from "react-spinners-kit";

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
        <input value={term} onChange={(e) => setTerm(e.target.value)} />
        <button>Search</button>
      </form>

      <button onClick={handleRemovePackage}>Removed All Package</button>
      <hr />

      {error && <h3>{error}</h3>}

      {isLoading && <PushSpinner />}

      {!error && !isLoading && !data?.length && "not found package"}

      {!error && !isLoading && data.map((name) => <div key={name}>{name}</div>)}
    </div>
  );
};

export default RepositoriesList;
