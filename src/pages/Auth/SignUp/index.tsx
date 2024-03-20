import "./style.scss";
import Container from "../../../components/Container";
import { Link, useNavigate } from "react-router-dom";
import Input from "../../../components/UI/Input";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { ValidationError } from "../../../types/ValidationErrors";
import { toast } from "react-toastify";
import { useAuth } from "../../../hooks/useAuth";
import FormBtn from "../../../components/UI/AuthBtn";

interface SignUpInputs {
  username: string;
  email: string;
  password: string;
}
const validationSchema = yup.object({
  username: yup.string().required().min(2),
  email: yup.string().required().email(),
  password: yup.string().required().min(6),
});

const SignUp = () => {
  const { registerUser } = useAuth();
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SignUpInputs>({
    defaultValues: {
      password: "",
      email: "",
      username: "",
    },
    resolver: yupResolver(validationSchema),
  });
  const onSubmit = async (values: SignUpInputs) => {
    try {
      await registerUser(values);
      navigate("/");
    } catch (e) {
      toast.error("An Error Occurred");
    }
  };
  return (
    <div className="register">
      <Container>
        <div className="register__container">
          <h1 className="register__title">Sign Up</h1>
          <p className="register__question">
            <Link to="/login">Have an account?</Link>
          </p>
          <ul className="register__errors">
            {Object.keys(errors).map((key) => (
              <li className="register__error" key={key + "1"}>
                {(errors as Record<typeof key, ValidationError>)[key].message}
              </li>
            ))}
          </ul>
          <form
            method="POST"
            className="register__form"
            onSubmit={handleSubmit(onSubmit)}
          >
            <Input
              className="register__form-input form__input"
              placeholder="Username"
              type="text"
              {...register("username")}
            />
            <Input
              className="register__form-input form__input"
              placeholder="Email"
              type="email"
              {...register("email")}
            />
            <Input
              className="register__form-input form__input"
              placeholder="Password"
              type="password"
              {...register("password")}
            />
            <FormBtn />
          </form>
        </div>
      </Container>
    </div>
  );
};

export default SignUp;
