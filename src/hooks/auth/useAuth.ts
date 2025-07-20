import { signOut } from "next-auth/react";

const useAuth = () => {

  const handleSignOut = () => {
    signOut({ redirect: true });
  };

  return { handleSignOut };
}

export default useAuth;