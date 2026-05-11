import { useState } from "react";
import { Link } from "react-router-dom";
import { PlusCircle, User, Heart } from "lucide-react";

import mockData from "../data/mockups.json";

const Gallery = () => {
  const [products] = useState(mockData.catalog);

  return (
    <>
      <header>
        <hgroup>
          <h1>Catálogo</h1>
          <p>Explora las publicaciones de otros usuarios</p>
        </hgroup>
        <Link to="/publicar" role="button" className="secondary">
          <PlusCircle size={18} /> Nueva Publicación
        </Link>
      </header>

      <section>
        <div>
          {products.map((product) => (
            <Link to={`/publicacion/${product.id}`} key={product.id}>
              <article className="card">
                <figure>
                  <img src={product.images[0].url} alt={product.name} />
                  <nav style={{ position: 'absolute', top: '10px', right: '10px' }}>
                    <button 
                      className="icon-only" 
                      style={{ background: 'rgba(255,255,255,0.2)', backdropFilter: 'blur(4px)' }}
                      onClick={(e) => {
                        e.preventDefault();
                        // Espacio para alternar favorito
                      }}
                    >
                      <Heart size={20} color="white" />
                    </button>
                  </nav>
                  <mark>$ {product.price.toLocaleString('es-CL')}</mark>
                </figure>
                <div>
                  <strong>{product.name}</strong>
                  <small>{product.location}</small>
                  <footer>
                    <div>
                      <User size={14} color="var(--text-muted)" />
                    </div>
                    {product.seller_name}
                  </footer>
                </div>
              </article>
            </Link>
          ))}
        </div>
      </section>
    </>
  );
};

export default Gallery;
