export const getArticles = async () => {
  const baseUrl = process.env.BASE_URL;

  const url = new URL("articles", baseUrl);

  const data = await fetch(url);
  const res = await data.json();

  return res;
};

export const productLoader = () => {
  console.log("eRFERF");
};

export const onQueryUpdate = (value: string) => {

  console.info(value);

  return value;
};
