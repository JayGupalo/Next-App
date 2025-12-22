import SearchSection from "./components/search-section";
import { getArticles } from "data/loaders";

const Pagination = async () => {
  const data = await getArticles();

  return (
    <>

    </>
  );
};

export default Pagination;
