import { Link } from "react-router-dom";
import { ArrowRight, Box, Zap, ShieldCheck } from "lucide-react";

const Home = () => {
  return (
    <div className="container">
      <section className="hero">
        <h1>
          Descubre productos <span>Minimal</span>
        </h1>
        <p>
          La plataforma definitiva para artículos minimalistas. Conecta con
          vendedores, crea tu galería personal y muestra tus propias
          publicaciones sin complicaciones.
        </p>
        <div style={{ display: 'flex', justifyContent: 'center', gap: '1rem', marginTop: '2rem' }}>
          <Link to="/catalogo" role="button" className="primary" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            Comenzar a explorar <ArrowRight size={20} />
          </Link>
          <Link to="/login" role="button" className="outline">
            Iniciar Sesión
          </Link>
        </div>
      </section>

      <section style={{ padding: '4rem 0', textAlign: 'center' }}>
        <h2 style={{ marginBottom: '1rem' }}>¿Por qué unirte a MinimalStore?</h2>
        <p style={{ color: 'var(--text-muted)', marginBottom: '3rem' }}>
          Todo lo que necesitas para mostrar y descubrir piezas minimalistas de alta calidad.
        </p>
        
        <div className="grid">
          <div className="card">
            <Box size={32} color="var(--primary)" style={{ marginBottom: '1rem' }} />
            <h3>Galería Exclusiva</h3>
            <p style={{ color: 'var(--text-muted)' }}>
              Accede a una galería exclusiva de productos minimalistas seleccionados.
              Guarda tus favoritos y organiza tu espacio.
            </p>
          </div>
          <div className="card">
            <Zap size={32} color="var(--primary)" style={{ marginBottom: '1rem' }} />
            <h3>Publicación Instantánea</h3>
            <p style={{ color: 'var(--text-muted)' }}>
              Crea publicaciones para tus propios artículos en segundos. Nuestra
              interfaz simplificada hace que vender sea muy fácil.
            </p>
          </div>
          <div className="card">
            <ShieldCheck size={32} color="var(--primary)" style={{ marginBottom: '1rem' }} />
            <h3>Red Segura</h3>
            <p style={{ color: 'var(--text-muted)' }}>
              Conecta con vendedores y compradores verificados. Tu perfil privado
              funciona como tu panel de control seguro.
            </p>
          </div>
        </div>
      </section>
      
      <section style={{ backgroundColor: 'var(--surface-color)', padding: '4rem', borderRadius: 'var(--border-radius)', textAlign: 'center', margin: '4rem 0' }}>
        <h2 style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>¿Listo para comprar y vender?</h2>
        <p style={{ color: 'var(--text-muted)', marginBottom: '2rem' }}>
          Únete a nuestra comunidad de entusiastas del minimalismo hoy mismo.
        </p>
        <Link to="/registro" role="button" className="primary">
          Crear Cuenta Gratis
        </Link>
      </section>
    </div>
  );
};

export default Home;
