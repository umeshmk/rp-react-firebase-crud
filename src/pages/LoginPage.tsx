import { LoginOrRegister } from "../components/loginOrRegister";
import { LoginOrRegisterOption } from "../types";
import { useTitleEffect, Notification } from "../utility";

interface IProps {
  option: LoginOrRegisterOption;
}

// Login page which is also Landing page if not auth
export const LoginPage = ({ option }: IProps) => {
  useTitleEffect(option === "login" ? "Login" : "Register");

  return (
    <>
      <LoginOrRegister option={option} />
    </>
  );
};
