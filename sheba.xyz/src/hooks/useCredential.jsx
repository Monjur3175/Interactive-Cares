import { useEffect, useState } from "react";
const useCredential = () => {
  const id = localStorage.getItem("uId");
  const [user, setUser] = useState({});
  const [services, setServices] = useState([]);
  const [categories, setCategories] = useState([]);

  const userData = async () => {
    try {
      const response = await fetch(`http://localhost:3000/users/${id}`);
      const result = await response.json();
      result.status && setUser(result.user);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`http://localhost:3000/categories`);
        const result = await response.json();
        setCategories(result);
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
  }, []);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`http://localhost:3000/services`);
        const result = await response.json();
        setServices(result);
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
  }, []);

  const logout = () => {
    localStorage.removeItem("uId");
    setUser({});
  };
  return {
    user,
    setUser,
    userData,
    logout,
    services,
    setServices,
    categories,
    setCategories,
  };
};
export default useCredential;
