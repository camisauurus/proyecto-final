import { Link, useNavigate } from "react-router-dom";
import { Package, User, LogOut } from "lucide-react";
import { useSession } from "../context/SessionContext";

const Navbar = () => {
  const { user, logout } = useSession();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/");
  };

  return (
    <nav>
      <ul>
        <li>
          <Link to="/">
            <strong>
              <Package color="var(--pink-color)" />
              MinimalStore
            </strong>
          </Link>
        </li>
      </ul>
      <ul>
        {user ? (
          <>
            <li>
              <Link to="/catalogo" role="button">Catálogo</Link>
            </li>
            <li>
              <Link to="/perfil" role="button">
                <User size={18} /> Mi Perfil
              </Link>
            </li>
            <li>
              <button onClick={handleLogout}>
                <LogOut size={18} /> Salir
              </button>
            </li>
          </>
        ) : (
          <>
            <li>
              <Link to="/login" role="button">Iniciar Sesión</Link>
            </li>
            <li>
              <Link to="/registro" role="button" className="secondary">Registro</Link>
            </li>
          </>
        )}
      </ul>
    </nav>
  );
};

export default Navbar;
