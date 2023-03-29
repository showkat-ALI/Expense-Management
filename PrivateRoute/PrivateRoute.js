import React, { useContext, useEffect } from "react";
// import { AuthContext } from "../context/AuthContext";
import { useRouter } from "next/router";

const PrivateRoute = (Component) => {
  const Protected = (pageProps) => {
    const router = useRouter();

    if (typeof window !== "undefined") {
      const token = localStorage.getItem("user");

      if (!token) {
        router.replace("/signin");
        return null;
      }

      return <div><Component {...pageProps} /></div>;
    }
    return null;
  };
  return Protected;
};

export default PrivateRoute;