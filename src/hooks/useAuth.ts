import { useLazyLoginQuery, useLazyRegisterQuery } from "../api/auth";
import { selectedUser, setUser } from "../store/authSlice";
import { useAppDispatch, useAppSelector } from "../store/store";
import { LoginUser } from "../types/Login";
import { RegisterUser } from "../types/Register";

export const useAuth = () => {
  const dispatch = useAppDispatch();

  const user = useAppSelector(selectedUser);
  const isLoggedIn = Boolean(user);
  
  const [triggerLogin] = useLazyLoginQuery();
  const loginUser = async (values: LoginUser["user"]) => {
    const { data } = await triggerLogin(values, false);
    if (!data) {
      throw new Error("No Data");
    }
    dispatch(setUser(data.user));
  };

  const [triggerRegister] = useLazyRegisterQuery();
  const registerUser = async (values: RegisterUser["user"]) => {
    const { data } = await triggerRegister(values, false);
    if (!data) {
      throw new Error("No Data");
    }
    dispatch(setUser(data.user));
  };
  const logOut = () => {
    dispatch(setUser(null));
  };
  return { isLoggedIn, loginUser, registerUser, logOut, user };
};
