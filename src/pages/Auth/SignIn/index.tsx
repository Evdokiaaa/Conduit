import "./style.scss";
import Container from "../../../components/Container";
import { Link, useNavigate } from "react-router-dom";
import Input from "../../../components/UI/Input";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import AuthBtn from "../../../components/UI/AuthBtn";
import { ValidationError } from "../../../types/ValidationErrors";
import { useLazyLoginQuery } from "../../../api/auth";
import { toast } from "react-toastify";
import { setUser } from "../../../store/authSlice";
import { useDispatch } from "react-redux";

interface SignInInputs {
  email: string;
  password: string;
}
const validationSchema = yup.object({
  email: yup.string().required().email(),
  password: yup.string().required().min(6),
});

const SignIn = () => {
  const [triggerLogin] = useLazyLoginQuery();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SignInInputs>({
    defaultValues: {
      email: "",
      password: "",
    },
    resolver: yupResolver(validationSchema),
  });
  const onSubmit = async (values: SignInInputs) => {
    try {
      const { data } = await triggerLogin(values, false);
      if (!data) {
        throw new Error("No Data");
      }
      dispatch(setUser(data.user));
      navigate("/");
    } catch (e) {
      toast.error("An Error Occurred");
    }
  };
  return (
    <div className="register">
      <Container>
        <div className="login__container">
          <h1 className="login__title">Sign In</h1>
          <p className="login__question">
            <Link to="/login">Need an account?</Link>
          </p>
          <ul className="login__errors">
            {Object.keys(errors).map((key) => (
              <li className="login__error" key={key + "1"}>
                {(errors as Record<typeof key, ValidationError>)[key].message}
              </li>
            ))}
          </ul>
          <form
            method="POST"
            className="login__form"
            onSubmit={handleSubmit(onSubmit)}
          >
            <Input
              className="login__form-input"
              placeholder="Email"
              type="email"
              {...register("email")}
            />
            <Input
              className="login__form-input"
              placeholder="Password"
              type="password"
              {...register("password")}
            />
            <AuthBtn />
          </form>
        </div>
      </Container>
    </div>
  );
};

export default SignIn;
