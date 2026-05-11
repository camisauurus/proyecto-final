import { Link } from "react-router-dom";
import { ArrowRight, Box, Zap, ShieldCheck } from "lucide-react";
import heroImg from "../assets/hero.png";

const Home = () => {
  return (
    <>
      <header className="hero">
        <div>
          <h1>
            Descubre productos <span>Minimal</span>
          </h1>
          <p>
            La plataforma definitiva para artículos minimalistas. Conecta con
            vendedores, crea tu galería personal y muestra tus propias
            publicaciones sin complicaciones.
          </p>
          <nav>
            <ul>
              <li>
                <Link to="/catalogo" role="button" className="secondary">
                  Comenzar a explorar <ArrowRight size={20} />
                </Link>
              </li>
              <li>
                <Link to="/login" role="button">
                  Iniciar Sesión
                </Link>
              </li>
            </ul>
          </nav>
        </div>
        <figure>
          <img src={heroImg} alt="MinimalStore Preview" />
        </figure>
      </header>

      <section className="hero">
        <h2>¿Por qué unirte a MinimalStore?</h2>
        <p>
          Todo lo que necesitas para mostrar y descubrir piezas minimalistas de alta calidad.
        </p>
        
        <div>
          <article className="card">
            <Box size={32} color="var(--pink-color)" />
            <h3>Galería Exclusiva</h3>
            <p>
              Accede a una galería exclusiva de productos minimalistas seleccionados.
              Guarda tus favoritos y organiza tu espacio.
            </p>
          </article>
          <article className="card">
            <Zap size={32} color="var(--pink-color)" />
            <h3>Publicación Instantánea</h3>
            <p>
              Crea publicaciones para tus propios artículos en segundos. Nuestra
              interfaz simplificada hace que vender sea muy fácil.
            </p>
          </article>
          <article className="card">
            <ShieldCheck size={32} color="var(--pink-color)" />
            <h3>Red Segura</h3>
            <p>
              Conecta con vendedores y compradores verificados. Tu perfil privado
              funciona como tu panel de control seguro.
            </p>
          </article>
        </div>
      </section>
      
      <section className="card hero">
        <h2>¿Listo para comprar y vender?</h2>
        <p>
          Únete a nuestra comunidad de entusiastas del minimalismo hoy mismo.
        </p>
        <Link to="/registro" role="button" className="secondary">
          Crear Cuenta Gratis
        </Link>
      </section>
    </>
  );
};

export default Home;
