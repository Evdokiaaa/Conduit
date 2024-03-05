import "./style.scss";
import Container from "../../../components/Container";
import { Link } from "react-router-dom";
import Input from "../../../components/UI/Input";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
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
  const { register } = useForm<SignUInputs>({
    defaultValues: {
      password: "",
      email: "",
      username: "",
    },
    resolver: yupResolver(validationSchema),
  });
  return (
    <div className="register">
      <Container>
        <div className="register__container">
          <h1 className="register__title">Sign Up</h1>
          <p className="register__question">
            <Link to="/login">Have an account?</Link>
          </p>
          <form action="#">
            <Input
              placeholder="Username"
              type="text"
              {...register("username")}
            />
            <Input placeholder="Email" name="email" type="email" />
            <Input placeholder="Password" name="password" type="password" />
          </form>
        </div>
      </Container>
    </div>
  );
};

export default SignUp;
