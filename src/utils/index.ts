export const serializeSearchParams = (params: Record<string, string>) => {
  return new URLSearchParams(params).toString();
};
