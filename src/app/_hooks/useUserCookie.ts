"use client";
import Cookies from "js-cookie";
import { useAppDispatch, useAppSelector } from "../_redux";
import { selectUser } from "../_redux/user";

const useUserCookie = () => {
  const getUserCookie = () => {
    const userCookie = Cookies.get("user");
    if (!userCookie) return;
    return JSON.parse(userCookie);
  };

  const setUserCookie = ({
    userId,
    token,
  }: {
    userId: string;
    token: string;
  }) => {
    Cookies.set("user", JSON.stringify({ userId, token }), { path: "/" });
  };

  const getUserToken = () => {
    return getUserCookie()?.token;
  };

  const removeUserCookie = () => {
    Cookies.remove("user", { path: "/" });
  };
  const isAuthenticated = () => {};
  return { getUserCookie, setUserCookie, removeUserCookie, getUserToken };
};

export default useUserCookie;
