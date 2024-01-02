import axios from "axios";
import useUserCookie from "./useUserCookie";
const useAuth = () => {
  const { getUserToken } = useUserCookie();
  const isAuthenticated = async () => {
    const userToken = getUserToken();
    if (!userToken) return false;
    try {
      const response = await axios.get("/api/auth", {
        headers: {
          Authorization: `Bearer ${userToken}`,
        },
      });
      const data = response.data;
      if (data.valid && !data.expired) return true;
      return false;
    } catch (error) {
      return false;
    }
  };
  return {};
};
