import { useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { useUserContext } from "../contexts/UserContext";

const RoleBasedRedirect = () => {
  const { user } = useUserContext();
  const navigate = useNavigate();
  const location = useLocation(); // This gives us the current route location

  useEffect(() => {
    // Only redirect if the user is not on a role-specific page already
    if (user && location.pathname === "/") {
      // Checks if on the root page, adjust as needed
      if (user.role === "Doctor") {
        navigate("/Doctorhomepage");
      } else {
        navigate("/home");
      }
    }
  }, [user, navigate, location]);

  return null; // This component does not render anything
};

export default RoleBasedRedirect;
