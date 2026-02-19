import { useEffect, useState } from "react";
import userDetails from "../Data/FakeData.json";
const useCredential = () => {
  const id = localStorage.getItem("uId");
  const [user, setUser] = useState({});
  const userData = async () => {
    try {
      const tempUser = userDetails.find((user) => user._id === id);
      setUser(tempUser);
    } catch (error) {
      console.error(error);
    }
    userData();
  };
  useEffect(() => {
    if (id) {
      userData();
    }
    else {
      setUser({});
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  const logout = () => {
    localStorage.removeItem("uId");
    setUser({});
  };
  return { user, setUser, userData, logout };
};
export default useCredential;
