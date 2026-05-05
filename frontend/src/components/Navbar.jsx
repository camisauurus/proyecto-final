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
    <nav className="container">
      <ul>
        <li>
          <Link to="/" style={{ textDecoration: 'none', color: 'inherit' }}>
            <strong>
              <Package color="var(--primary)" />
              MinimalStore
            </strong>
          </Link>
        </li>
      </ul>
      <ul>
        {user ? (
          <>
            <li>
              <Link to="/catalogo" className="secondary">Catálogo</Link>
            </li>
            <li>
              <Link to="/perfil" className="secondary" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <User size={18} /> Mi Perfil
              </Link>
            </li>
            <li>
              <button className="outline" onClick={handleLogout} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', padding: '0.5rem 1rem' }}>
                <LogOut size={18} /> Salir
              </button>
            </li>
          </>
        ) : (
          <>
            <li>
              <Link to="/login" className="secondary">Iniciar Sesión</Link>
            </li>
            <li>
              <Link to="/registro" role="button" className="primary">Registro</Link>
            </li>
          </>
        )}
      </ul>
    </nav>
  );
};

export default Navbar;
