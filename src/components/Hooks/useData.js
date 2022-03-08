import { useContext } from "react";
import { AuthContext } from "../../context/AuthProvider";

const useData = () => {
  const auth = useContext(AuthContext);
  return auth;
};
export default useData;
