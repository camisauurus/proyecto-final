import { useState } from "react";
import { Link } from "react-router-dom";
import { User, PlusCircle, Edit, Trash2, Heart } from "lucide-react";
import { useSession } from "../context/SessionContext";

const DUMMY_USER_POSTS = Array(3).fill().map((_, i) => ({
  id: i + 1,
  title: "Mesa de Centro",
  price: 50000,
  image: "https://images.unsplash.com/photo-1533090481720-856c6e3c1fdc?auto=format&fit=crop&q=80&w=800",
}));

const Profile = () => {
  const { user } = useSession();
  const [activeTab, setActiveTab] = useState("publicaciones");

  return (
    <div className="container" style={{ padding: '2rem 0' }}>
      <div style={{ marginBottom: '2rem' }}>
        <h1 style={{ marginBottom: '0.25rem' }}>Mi Perfil</h1>
        <p style={{ color: 'var(--text-muted)' }}>Gestiona tu cuenta y tus publicaciones</p>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 2fr', gap: '2rem' }}>
        {/* User Sidebar */}
        <div>
          <div className="card" style={{ textAlign: 'center', marginBottom: '1.5rem' }}>
            <div style={{ width: '120px', height: '120px', borderRadius: '50%', backgroundColor: 'var(--surface-color)', margin: '0 auto 1.5rem', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <User size={64} color="var(--text-muted)" />
            </div>
            <h2 style={{ fontSize: '1.25rem', marginBottom: '0.5rem' }}>{user?.name || "Usuario Demo"}</h2>
            <p style={{ color: 'var(--text-muted)', fontSize: '0.875rem', marginBottom: '1.5rem' }}>{user?.email || "usuario@ejemplo.com"}</p>
            <button className="outline" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem', width: '100%', padding: '0.5rem' }}>
              <Edit size={16} color="var(--primary)" /> <span style={{ color: 'var(--primary)' }}>Editar Perfil</span>
            </button>
          </div>

          <div className="card">
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1.5rem', fontSize: '1.125rem' }}>
              <User size={20} color="var(--primary)" /> <strong>{user?.name || "Usuario Demo"}</strong>
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '1rem', color: 'var(--text-muted)', fontSize: '0.875rem' }}>
              <span>Publicaciones activas</span>
              <strong style={{ color: 'var(--text-main)' }}>3</strong>
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between', color: 'var(--text-muted)', fontSize: '0.875rem' }}>
              <span>Artículos vendidos</span>
              <strong style={{ color: 'var(--text-main)' }}>13</strong>
            </div>
            
            <Link to="/publicar" role="button" className="primary" style={{ width: '100%', marginTop: '2rem', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem' }}>
              <PlusCircle size={18} /> Nueva Publicación
            </Link>
          </div>
        </div>

        {/* Content Area */}
        <div>
          <div style={{ display: 'flex', gap: '2rem', borderBottom: '1px solid var(--border-color)', marginBottom: '1.5rem' }}>
            <button 
              style={{ background: 'transparent', border: 'none', padding: '0.5rem 1rem', color: activeTab === 'publicaciones' ? 'var(--text-main)' : 'var(--text-muted)', borderBottom: activeTab === 'publicaciones' ? '2px solid var(--primary)' : '2px solid transparent', cursor: 'pointer', borderRadius: '0' }}
              onClick={() => setActiveTab('publicaciones')}
            >
              Mis Publicaciones
            </button>
            <button 
              style={{ background: 'transparent', border: 'none', padding: '0.5rem 1rem', color: activeTab === 'favoritos' ? 'var(--text-main)' : 'var(--text-muted)', borderBottom: activeTab === 'favoritos' ? '2px solid var(--primary)' : '2px solid transparent', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '0.5rem', borderRadius: '0' }}
              onClick={() => setActiveTab('favoritos')}
            >
              <Heart size={16} /> Favoritos
            </button>
          </div>

          <div className="product-grid" style={{ gridTemplateColumns: 'repeat(auto-fill, minmax(220px, 1fr))' }}>
            {DUMMY_USER_POSTS.map((post) => (
              <div key={post.id} className="card product-card" style={{ position: 'relative' }}>
                <img src={post.image} alt={post.title} style={{ height: '160px' }} />
                <div style={{ position: 'absolute', top: '10px', right: '10px', display: 'flex', gap: '0.5rem' }}>
                  <button className="outline" style={{ background: 'rgba(0,0,0,0.6)', border: 'none', padding: '0.4rem', borderRadius: '4px', color: 'white' }}>
                    <Edit size={14} />
                  </button>
                </div>
                <div style={{ position: 'absolute', bottom: '80px', left: '10px', background: 'rgba(0,0,0,0.7)', padding: '0.2rem 0.6rem', borderRadius: '4px', fontWeight: 'bold', fontSize: '0.875rem' }}>
                  $ {post.price.toLocaleString('es-CL')}
                </div>
                <div className="product-card-body" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '0.75rem 1rem' }}>
                  <div className="product-card-title" style={{ margin: 0, fontSize: '0.875rem' }}>{post.title}</div>
                  <button style={{ background: 'transparent', border: 'none', padding: 0, color: 'var(--text-muted)' }}>
                    <Trash2 size={16} color="#ef4444" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
