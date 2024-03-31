import Container from "../../components/Container";
import Input from "../../components/UI/Input";
import { useAuth } from "../../hooks/useAuth";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import "./style.scss";
import FormBtn from "../../components/UI/AuthBtn";
import { useNavigate } from "react-router-dom";
import { useUpdateProfileMutation } from "../../api/ProfileApi";
import { toast } from "react-toastify";
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
  email: yup.string().email().required(),
  bio: yup.string(),
  newPassword: yup.string(),
});
const Settings = () => {
  const navigate = useNavigate();
  const { user, logOut } = useAuth();
  const [triggerUpdateProfile] = useUpdateProfileMutation();
  console.log(user);
  const { register, handleSubmit } = useForm<SettingsFormValues>({
    defaultValues: {
      avatar: user?.image,
      username: user?.username,
      email: user?.email,
      bio: user?.bio || "",
      newPassword: "",
    },
    resolver: yupResolver(settingsScheme),
  });
  const updateProfile = async (values: SettingsFormValues) => {
    try {
      await triggerUpdateProfile(values).unwrap();
      navigate(`/profile/${values.username}`);
    } catch (e) {
      toast.error("An error occurred, please try again");
    }
  };
  const onLogout = () => {
    logOut();
    navigate("/");
  };
  return (
    <section className="settings">
      <Container>
        <div className="settings__container">
          <h1 className="settings__title">Your Settings</h1>
          <form
            className="settings__form"
            onSubmit={handleSubmit(updateProfile)}
          >
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
            <button onClick={onLogout}>Click here to logout</button>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Settings;
