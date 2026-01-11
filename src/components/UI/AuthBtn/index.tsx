
interface FormBtnProps {
  text?: string;
  isLoading?: boolean;
  additionalClass?: string;
}
const FormBtn = ({
  text = "Sign in",
  additionalClass,
  isLoading,
}: FormBtnProps) => {

  return (
    <button
      className={`form__btn ${additionalClass} ${
        isLoading ? "form__btn-loading" : ""
      } `}
      disabled={isLoading}
      type="submit"
    >
      {text}
    </button>
  );
};

export default FormBtn;
