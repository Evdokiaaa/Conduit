export interface ValidationError {
  message: string;
  type: string;
  ref: React.RefObject<HTMLInputElement>;
}
