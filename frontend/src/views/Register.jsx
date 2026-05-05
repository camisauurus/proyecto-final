import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useSession } from "../context/SessionContext";

const Register = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: ""
  });
  const { login } = useSession();
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulate API registration and login
    if (formData.name && formData.email && formData.password) {
      login({ email: formData.email, name: formData.name });
      navigate("/");
    }
  };

  return (
    <div className="container">
      <div className="auth-container">
        <h1 style={{ marginBottom: '0.5rem' }}>Registro de Usuario</h1>
        <p style={{ color: 'var(--text-muted)', marginBottom: '2rem' }}>
          Crea una cuenta para empezar a publicar
        </p>

        <form onSubmit={handleSubmit} className="card" style={{ textAlign: 'left' }}>
          <label htmlFor="name">
            Nombre Completo
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </label>

          <label htmlFor="email">
            Email
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </label>

          <label htmlFor="password">
            Contraseña
            <input
              type="password"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              required
            />
          </label>

          <button type="submit" className="primary" style={{ width: '100%', marginTop: '1rem' }}>
            Crear cuenta y entrar
          </button>
          
          <div style={{ textAlign: 'center', marginTop: '1rem', color: 'var(--text-muted)' }}>
            ¿Ya tienes cuenta? <Link to="/login" style={{ color: 'var(--primary)' }}>Inicia sesión</Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Register;
