import "./style.scss";
import Container from "../../../components/Container";
import { Link } from "react-router-dom";
import Input from "../../../components/UI/Input";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import AuthBtn from "../../../components/UI/AuthBtn";
import { ValidationError } from "../../../types/ValidationErrors";
interface SignUInputs {
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
  console.log(validationSchema);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SignUInputs>({
    defaultValues: {
      password: "",
      email: "",
      username: "",
    },
    resolver: yupResolver(validationSchema),
  });
  console.log("sssss", errors);
  console.log("IDIOT", Object.keys(errors));
  const onSubmit = (values: SignUInputs) => {
    console.log("SUMBITED", values);
  };
  return (
    <div className="register">
      <Container>
        <div className="register__container">
          <h1 className="register__title">Sign Up</h1>
          <p className="register__question">
            <Link to="/login">Have an account?</Link>
          </p>
          <ul>
            {Object.keys(errors).map((key) => (
              <li className="register__error" key={key + "1"}>
                {(errors as Record<typeof key, ValidationError>)[key].message}
              </li>
            ))}
          </ul>
          <form
            action="#"
            className="register__form"
            onSubmit={handleSubmit(onSubmit)}
          >
            <Input
              className="register__form-input"
              placeholder="Username"
              type="text"
              {...register("username")}
            />
            <Input
              className="register__form-input"
              placeholder="Email"
              type="email"
              {...register("email")}
            />
            <Input
              className="register__form-input"
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

export default SignUp;
