import { useState } from "react";
import { useNavigate } from "react-router-dom";

const CreatePublication = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    title: "",
    price: "",
    category: "",
    image: "",
    description: ""
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulate API call to create publication
    navigate("/perfil");
  };

  return (
    <div className="container" style={{ padding: '2rem 0' }}>
      <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
        <h1 style={{ marginBottom: '0.5rem' }}>Nueva Publicación</h1>
        <p style={{ color: 'var(--text-muted)' }}>Completa los datos para vender un artículo</p>
      </div>

      <div style={{ maxWidth: '800px', margin: '0 auto' }}>
        <form onSubmit={handleSubmit} className="card">
          <label htmlFor="title">
            Título del Artículo
            <input
              type="text"
              id="title"
              name="title"
              value={formData.title}
              onChange={handleChange}
              required
            />
          </label>

          <div className="grid">
            <label htmlFor="price">
              Precio ($)
              <input
                type="number"
                id="price"
                name="price"
                value={formData.price}
                onChange={handleChange}
                required
              />
            </label>

            <label htmlFor="category">
              Categoría
              <select
                id="category"
                name="category"
                value={formData.category}
                onChange={handleChange}
                required
              >
                <option value="" disabled>Seleccione una categoría...</option>
                <option value="muebles">Muebles</option>
                <option value="tecnologia">Tecnología</option>
                <option value="decoracion">Decoración</option>
              </select>
            </label>
          </div>

          <label htmlFor="image">
            URL de la Imagen
            <input
              type="url"
              id="image"
              name="image"
              value={formData.image}
              onChange={handleChange}
              required
            />
          </label>

          <label htmlFor="description">
            Descripción
            <textarea
              id="description"
              name="description"
              rows="5"
              value={formData.description}
              onChange={handleChange}
              required
            ></textarea>
          </label>

          <div style={{ display: 'flex', justifyContent: 'flex-end', gap: '1rem', marginTop: '2rem' }}>
            <button type="button" className="outline" onClick={() => navigate(-1)}>
              Cancelar
            </button>
            <button type="submit" className="primary">
              Publicar Artículo
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CreatePublication;
