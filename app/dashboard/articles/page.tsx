import SearchBar from "@/components/search-bar";
import { getArticles } from "data/loaders";
import ArticleList from "./components/artcile-list";

export interface ISearchParams {
  searchParams?: {
    page?: string;
    query?: string;
  };
}

const ArticlesRoute = async ({ searchParams }: ISearchParams) => {
  const resolvedSearchParams = await searchParams;

  const query = resolvedSearchParams?.query ?? "";
  const page = Number(resolvedSearchParams?.page) || 1;

  const data = await getArticles(query);

  console.info("data", data);

  return (
    <div className="grid grid-cols-1 gap-4 p-4 ">
      <SearchBar />
      <ArticleList />
    </div>
  );
};

export default ArticlesRoute;
