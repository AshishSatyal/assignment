import { jwtDecode } from "jwt-decode";
import Cookies from "js-cookie";

export const getTokenData = () => {
  const token = Cookies.get("token");
  // console.log(token);
  if (token) {
    try {
      return jwtDecode(token);
    } catch (error) {
      console.error("Failed to decode token", error);
      return null;
    }
  }
  return null;
};
