import { useNavigate } from "react-router-dom";
import "./style.scss";
import { LuPlus } from "react-icons/lu";

const EditSettingsBtn = () => {
  const navigate = useNavigate();
  const settingsNavigate = () => {
    navigate("/settings");
  };
  return (
    <button className="edit-settings__btn" onClick={settingsNavigate}>
      <LuPlus className="edit-settings__btn-icon" />
      Edit Profile Settings
    </button>
  );
};

export default EditSettingsBtn;
