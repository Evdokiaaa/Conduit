import { useSearchParams } from "react-router-dom";
import { serializeSearchParams } from "../utils";

export const usePageParams = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const page = searchParams.get("page") ? Number(searchParams.get("page")) : 0;
  const setPage = (page: number) => {
    setSearchParams(serializeSearchParams({ page: String(page + 1) }));
  };
  return { page, setPage };
};
