import { ISearchParams } from "@/dashboard/articles/page";

export const getArticles = async (queryString: string): Promise<void> => {
  console.info(queryString);

  const baseUrl = process.env.BASE_URL;

  const url = new URL(`articles/?search=${queryString}&new_site=${queryString}&limit=5`, baseUrl);

  const data = await fetch(url);
  const res = await data.json();

  return res;
};
