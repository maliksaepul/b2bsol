import React from 'react'
import { useRouter } from "next/router";
const withAuth = (Component) => {
  return function EnchancedComponent(props){
    if (typeof window !== "undefined") {
      const Router = useRouter();

      const accessToken = localStorage.getItem("accessToken");
      if (!accessToken) {
        Router.replace("/");
        return null;
      }

      return <Component {...props} />;
    }
    return null;
  };
};

export default withAuth;