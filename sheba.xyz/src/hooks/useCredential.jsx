import { useEffect, useState } from "react";
const useCredential = () => {
  const id = localStorage.getItem("uId");
  const [user, setUser] = useState({});
  const userData = async () => {
    try {
      const response = await fetch(`https://sheba-xyz.onrender.com/users/${id}`);
      const result = await response.json();
      result.status && setUser(result.user);
    } catch (error) {
      console.error(error);
    }
  };
  useEffect(() => {
    if (id) {
      userData();
    } else {
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
