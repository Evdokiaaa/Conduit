import { feedData } from "../api/api";

export interface FeedProps {
  data?: feedData;
  isLoading: boolean;
  error: unknown;
  isFetching: boolean;
}
