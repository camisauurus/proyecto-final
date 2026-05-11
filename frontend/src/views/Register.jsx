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
    if (formData.name && formData.email && formData.password) {
      login({ email: formData.email, name: formData.name });
      navigate("/catalogo");
    }
  };

  return (
    <>
      <hgroup>
        <h1>Registro de Usuario</h1>
        <p>Crea una cuenta para empezar a publicar</p>
      </hgroup>

      <form onSubmit={handleSubmit} className="card">
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

        <button type="submit" className="secondary" style={{ width: '100%', marginTop: '1rem' }}>
          Crear cuenta y entrar
        </button>
        
        <footer>
          ¿Ya tienes cuenta? <Link to="/login">Inicia sesión</Link>
        </footer>
      </form>
    </>
  );
};

export default Register;
