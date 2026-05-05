import { Navigate } from "react-router-dom";
import { useSession } from "../context/SessionContext";

const PrivateRoute = ({ children }) => {
  const { user } = useSession();

  if (!user) {
    return <Navigate to="/login" />;
  }

  return children;
};

export default PrivateRoute;
