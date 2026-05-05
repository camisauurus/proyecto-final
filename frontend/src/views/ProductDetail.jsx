import { useParams, useNavigate } from "react-router-dom";
import { User, Mail, Phone, X, Maximize } from "lucide-react";

const ProductDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  // Mock data based on the ID for development
  const product = {
    id,
    title: "Mesa de Centro",
    price: 120000,
    description: "Mesa de madera maciza en excelente estado. Diseño minimalista escandinavo ideal para comedores modernos o estudios. Tiene 6 meses de uso y no presenta rayones.",
    image: "https://images.unsplash.com/photo-1533090481720-856c6e3c1fdc?auto=format&fit=crop&q=80&w=800",
    seller: {
      name: "Ana Gómez",
      email: "ana.g@example.com",
      phone: "+1 234 567 890"
    }
  };

  return (
    <div className="container" style={{ padding: '2rem 0', display: 'flex', justifyContent: 'center' }}>
      <div className="card" style={{ display: 'flex', flexDirection: 'row', gap: '2rem', maxWidth: '900px', width: '100%', position: 'relative' }}>
        <button 
          className="outline" 
          style={{ position: 'absolute', top: '1rem', right: '1rem', border: 'none', padding: '0.5rem' }}
          onClick={() => navigate(-1)}
        >
          <X size={24} />
        </button>

        <div style={{ flex: '1', position: 'relative' }}>
          <img 
            src={product.image} 
            alt={product.title} 
            style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: 'var(--border-radius)' }} 
          />
          <button className="outline" style={{ position: 'absolute', bottom: '1rem', right: '1rem', background: 'rgba(0,0,0,0.5)', border: 'none', color: 'white', padding: '0.5rem' }}>
            <Maximize size={20} />
          </button>
        </div>

        <div style={{ flex: '1', padding: '1rem 0', display: 'flex', flexDirection: 'column' }}>
          <h1 style={{ fontSize: '1.5rem', marginBottom: '1rem', paddingRight: '2rem' }}>{product.title}</h1>
          <h2 style={{ color: 'var(--primary)', fontSize: '1.5rem', marginBottom: '1.5rem' }}>
            $ {product.price.toLocaleString('es-CL')}
          </h2>

          <div style={{ marginBottom: '2rem' }}>
            <h3 style={{ fontSize: '0.875rem', textTransform: 'uppercase', letterSpacing: '1px', marginBottom: '0.5rem' }}>Descripción</h3>
            <p style={{ color: 'var(--text-muted)', lineHeight: '1.6' }}>{product.description}</p>
          </div>

          <div style={{ marginTop: 'auto' }}>
            <h3 style={{ fontSize: '0.875rem', textTransform: 'uppercase', letterSpacing: '1px', marginBottom: '1rem' }}>Contacto del Vendedor</h3>
            
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem', marginBottom: '2rem' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', color: 'var(--text-muted)' }}>
                <User size={18} /> <span>{product.seller.name}</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', color: 'var(--primary)' }}>
                <Mail size={18} /> <span>{product.seller.email}</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', color: 'var(--text-muted)' }}>
                <Phone size={18} /> <span>{product.seller.phone}</span>
              </div>
            </div>

            <button className="primary" style={{ width: '100%' }}>
              Contactar al Vendedor
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
