import { useRouter } from "next/router";

import {useUserSettings } from "../store"
const withAuth = (WrappedComponent) => {
  return (props) => {
    if (typeof window !== "undefined") {
      const Router = useRouter();

      const isLogin = useUserSettings((state) => state.userData.isLogin)

      if (!isLogin) {
        Router.replace("/");
        return null;
      } 


      return <WrappedComponent {...props} />;
    }

    // If we are on server, return null
    return null;
  };
};

export default withAuth;