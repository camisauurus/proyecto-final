import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useSession } from "../context/SessionContext";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { login } = useSession();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email && password) {
      login({ email, name: "Usuario Demo" });
      navigate("/catalogo");
    }
  };

  return (
    <>
      <hgroup>
        <h1>Inicio de Sesión</h1>
        <p>Ingresa tus credenciales para acceder a la galería privada</p>
      </hgroup>

      <form onSubmit={handleSubmit} className="card">
        <label htmlFor="email">
          Email
          <input
            type="email"
            id="email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </label>

        <label htmlFor="password">
          Contraseña
          <input
            type="password"
            id="password"
            name="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </label>

        <button type="submit" className="secondary" style={{ width: '100%', marginTop: '1rem' }}>
          Iniciar Sesión
        </button>
        
        <footer>
          ¿Aún no tienes cuenta? <Link to="/registro">Registro</Link>
        </footer>
      </form>
    </>
  );
};

export default Login;
