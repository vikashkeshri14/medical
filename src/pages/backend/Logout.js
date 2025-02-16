import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function Logout() {
  const navigate = useNavigate();
  useEffect(() => {
    const LogoutUser = () => {
      localStorage.clear();
      return navigate("/admin/login");
    };
    LogoutUser();
  }, []);
  return <div>Logout</div>;
}
