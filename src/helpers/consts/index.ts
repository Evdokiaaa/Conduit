export const ARTICLES_PER_PAGE = 10;
export const serializeSearchParams = (params: Record<string, string>) => {
  return new URLSearchParams(params).toString();
};
