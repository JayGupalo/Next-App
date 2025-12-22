import { useState } from "react";
import SearchBar from "./search-bar";
import { getArticles } from "data/loaders";

const SearchSection = async () => {
  const [query, setQuery] = useState<string | null>(null);

  const data = await getArticles();

  console.info(data);

  const onQueryUpdate = (val: string) => {
    setQuery(val);
  };

  console.info(query);

  return (
    <>
      <SearchBar retrieveQuery={onQueryUpdate} />
    </>
  );
};

export default SearchSection;
