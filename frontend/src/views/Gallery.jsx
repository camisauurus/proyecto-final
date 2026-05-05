import { useState } from "react";
import { Link } from "react-router-dom";
import { PlusCircle, User } from "lucide-react";

// Dummy data for initial dev
const DUMMY_PRODUCTS = Array(6).fill().map((_, i) => ({
  id: i + 1,
  title: "Mesa de Centro",
  price: 50000,
  seller: "Gaspacho",
  location: "Muebles - Las Condes",
  image: "https://images.unsplash.com/photo-1533090481720-856c6e3c1fdc?auto=format&fit=crop&q=80&w=800",
}));

const Gallery = () => {
  const [products] = useState(DUMMY_PRODUCTS);

  return (
    <div className="container" style={{ padding: '2rem 0' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '2rem' }}>
        <div>
          <h1 style={{ marginBottom: '0.25rem' }}>Catálogo</h1>
          <p style={{ color: 'var(--text-muted)', margin: 0 }}>Explora las publicaciones de otros usuarios</p>
        </div>
        <Link to="/publicar" role="button" className="primary" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
          <PlusCircle size={18} /> Nueva Publicación
        </Link>
      </div>

      <div className="product-grid">
        {products.map((product) => (
          <Link to={`/publicacion/${product.id}`} key={product.id} style={{ textDecoration: 'none', color: 'inherit' }}>
            <div className="card product-card">
              <div style={{ position: 'relative' }}>
                <img src={product.image} alt={product.title} />
                <div style={{ position: 'absolute', bottom: '10px', left: '10px', background: 'rgba(0,0,0,0.7)', padding: '0.2rem 0.6rem', borderRadius: '4px', fontWeight: 'bold' }}>
                  $ {product.price.toLocaleString('es-CL')}
                </div>
              </div>
              <div className="product-card-body">
                <div className="product-card-title">{product.title}</div>
                <div style={{ fontSize: '0.875rem', color: 'var(--text-muted)', marginBottom: '0.5rem' }}>
                  {product.location}
                </div>
                <div className="product-card-seller">
                  <div style={{ width: '24px', height: '24px', borderRadius: '50%', backgroundColor: '#555', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <User size={14} color="white" />
                  </div>
                  {product.seller}
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Gallery;
