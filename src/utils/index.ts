export const serializeSearchParams = (params: Record<string, string>) => {
  return new URLSearchParams(params).toString();
};
export const splitTags = (tags: string) => {
  return tags.split(/[\s,]+/);
};
