import Container from "../../components/Container";
import Input from "../../components/UI/Input";
import { useAuth } from "../../hooks/useAuth";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import "./style.scss";
import FormBtn from "../../components/UI/AuthBtn";
interface SettingsFormValues {
  avatar: string;
  username: string;
  email: string;
  bio?: string;
  newPassword?: string;
}

const settingsScheme = yup.object({
  avatar: yup.string().url().required(),
  username: yup.string().min(3).required(),
  bio: yup.string(),
  email: yup.string().email().required(),
  newPassword: yup.string(),
});
const Settings = () => {
  const { user } = useAuth();

  console.log(user);
  const { register } = useForm<SettingsFormValues>({
    defaultValues: {
      avatar: user?.image,
      username: user?.username,
      bio: "",
      email: user?.email,
      newPassword: "",
    },
    resolver: yupResolver(settingsScheme),
  });
  return (
    <section className="settings">
      <Container>
        <div className="settings__container">
          <h1 className="settings__title">Your Settings</h1>
          <form className="settings__form">
            <Input
              {...register("avatar")}
              className="settings__form-input"
              placeholder="URL of profile picture"
            />
            <Input
              {...register("username")}
              className="settings__form-input"
              placeholder="Username"
            />
            <textarea
              {...register("bio")}
              placeholder="Short bio about you"
              className="settings__form-input settings__form-textarea"
            />
            <Input
              {...register("email")}
              className="settings__form-input"
              placeholder="Email"
            />
            <Input
              {...register("newPassword")}
              className="settings__form-input"
              placeholder="New Password"
            />
            <div className="settings__form-btn-container">
              <FormBtn text="Update Settings" />
              {/* <button type="submit">Update Settings</button> */}
            </div>
          </form>
          <div className="settings__logout-container">
            <button>Click here to logout</button>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Settings;
