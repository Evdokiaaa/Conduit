import "./style.scss";
interface FormBtn {
  text?: string;
  additionalClass?: string;
}
const FormBtn = ({ text = "Sign in", additionalClass }: FormBtn) => {
  return (
    <button className={`form__btn ${additionalClass} `} type="submit">
      {text}
    </button>
  );
};

export default FormBtn;
