import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { PlusCircle, Trash2 } from "lucide-react";

const CreatePublication = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    price: "",
    category: "",
    description: ""
  });
  const [images, setImages] = useState([""]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleImageChange = (index, value) => {
    const newImages = [...images];
    newImages[index] = value;
    setImages(newImages);
  };

  const addImageInput = () => {
    setImages([...images, ""]);
  };

  const removeImageInput = (index) => {
    const newImages = images.filter((_, i) => i !== index);
    setImages(newImages.length ? newImages : [""]);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate("/perfil");
  };

  return (
    <>
      <hgroup>
        <h1>Nueva Publicación</h1>
        <p>Completa los datos para vender un artículo</p>
      </hgroup>

      <form onSubmit={handleSubmit} className="card">
        <div className="form-group">
          <label htmlFor="name">
            Título del Artículo
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </label>
        </div>

        <fieldset className="form-group">
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
        </fieldset>

        <div className="form-group">
          <label>URLs de Imágenes</label>
          {images.map((imgUrl, index) => (
            <div key={index} style={{ display: 'flex', gap: '0.5rem', marginBottom: '0.5rem' }}>
              <input
                type="url"
                placeholder="https://..."
                value={imgUrl}
                onChange={(e) => handleImageChange(index, e.target.value)}
                required
              />
              <button 
                type="button"
                className="icon-only"
                onClick={() => removeImageInput(index)}
                style={{ background: 'transparent', border: 'none' }}
              >
                <Trash2 size={20} color="#ef4444" />
              </button>
            </div>
          ))}
          <button 
            type="button" 
            onClick={addImageInput}
            style={{ background: 'transparent', color: 'var(--pink-color)', padding: '0.5rem 0', border: 'none' }}
          >
            <PlusCircle size={16} /> Añadir otra imagen
          </button>
        </div>

        <div className="form-group">
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
        </div>

        <nav>
          <button type="button" onClick={() => navigate(-1)}>
            Cancelar
          </button>
          <button type="submit" className="secondary">
            Publicar Artículo
          </button>
        </nav>
      </form>
    </>
  );
};

export default CreatePublication;
