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
    // Simulate API call
    if (email && password) {
      login({ email, name: "Usuario Demo" });
      navigate("/");
    }
  };

  return (
    <div className="container">
      <div className="auth-container">
        <h1 style={{ marginBottom: '0.5rem' }}>Inicio de Sesión</h1>
        <p style={{ color: 'var(--text-muted)', marginBottom: '2rem' }}>
          Ingresa tus credenciales para acceder a la galería privada
        </p>

        <form onSubmit={handleSubmit} className="card" style={{ textAlign: 'left' }}>
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

          <button type="submit" className="primary" style={{ width: '100%', marginTop: '1rem' }}>
            Iniciar Sesión
          </button>
          
          <div style={{ textAlign: 'center', marginTop: '1rem', color: 'var(--text-muted)' }}>
            ¿Aún no tienes cuenta? <Link to="/registro" style={{ color: 'var(--primary)' }}>Registro</Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
