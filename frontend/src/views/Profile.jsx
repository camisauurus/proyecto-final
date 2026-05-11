import { useState } from "react";
import { Link } from "react-router-dom";
import { User, PlusCircle, Edit, Trash2, Heart, X } from "lucide-react";
import { useSession } from "../context/SessionContext";
import mockData from "../data/mockups.json";

const Profile = () => {
  const { user } = useSession();
  const [activeTab, setActiveTab] = useState("publicaciones");
  const [posts, setPosts] = useState(mockData.userPosts);
  const [favorites, setFavorites] = useState(mockData.userFavorites);

  const [editingPost, setEditingPost] = useState(null);

  const handleRemoveFavorite = (id) => {
    setFavorites(favorites.filter(f => f.id !== id));
  };

  const handleEditClick = (post) => {
    setEditingPost({ ...post, title: post.name }); // Mapear name a title para el estado del formulario o simplemente usar name
  };

  const handleUpdate = (e) => {
    e.preventDefault();
    setPosts(posts.map(p => p.id === editingPost.id ? editingPost : p));
    setEditingPost(null);
  };

  const handleDelete = (id) => {
    if (window.confirm("¿Estás seguro de eliminar esta publicación?")) {
      setPosts(posts.filter(p => p.id !== id));
    }
  };

  return (
    <>
      <header>
        <hgroup>
          <h1>Mi Perfil</h1>
          <p>Gestiona tu cuenta y tus publicaciones</p>
        </hgroup>
      </header>

      <div>
        <aside>
          <article className="card">
            <div>
              <User size={64} color="var(--text-muted)" />
            </div>
            <h2>{user?.name || "Usuario Demo"}</h2>
            <p>{user?.email || "usuario@ejemplo.com"}</p>
            <button>
              <Edit size={16} color="var(--pink-color)" /> 
              <span>Editar Perfil</span>
            </button>
          </article>

          <article className="card">
            <ul>
              <li>
                <strong><User size={18} color="var(--pink-color)" /> {user?.name || "Usuario Demo"}</strong>
              </li>
              <li>
                <span>Publicaciones activas</span>
                <strong style={{ color: 'var(--text-main)' }}>3</strong>
              </li>
              <li>
                <span>Artículos vendidos</span>
                <strong style={{ color: 'var(--text-main)' }}>13</strong>
              </li>
            </ul>
            
            <Link to="/publicar" role="button" className="secondary">
              <PlusCircle size={18} /> Nueva Publicación
            </Link>
          </article>
        </aside>

        <section>
          <nav>
            <button 
              aria-selected={activeTab === 'publicaciones'}
              onClick={() => setActiveTab('publicaciones')}
            >
              Mis Publicaciones
            </button>
            <button 
              aria-selected={activeTab === 'favoritos'}
              onClick={() => setActiveTab('favoritos')}
            >
              Mis Favoritos
            </button>
          </nav>

          <div>
            {activeTab === 'publicaciones' ? (
              posts.map((post) => (
                <article key={post.id} className="card">
                  <figure>
                    <img src={post.images[0].url} alt={post.name} />
                    
                    <header>
                      <strong>{post.name}</strong>
                      <button className="icon-only" onClick={() => handleEditClick(post)}>
                        <Edit size={20} />
                      </button>
                    </header>
                    
                    <mark>$ {post.price.toLocaleString('es-CL')}</mark>
                    
                    <nav>
                      <button className="icon-only" onClick={() => handleDelete(post.id)}>
                        <Trash2 size={20} />
                      </button>
                    </nav>
                  </figure>
                </article>
              ))
            ) : (
              favorites.map((fav) => (
                <Link to={`/publicacion/${fav.id}`} key={fav.id}>
                  <article className="card">
                    <figure>
                      <img src={fav.images[0].url} alt={fav.name} />
                      <nav style={{ position: 'absolute', top: '10px', right: '10px', display: 'flex', gap: '0.5rem' }}>
                        <button 
                          className="icon-only" 
                          style={{ background: 'rgba(255,255,255,0.2)', backdropFilter: 'blur(4px)' }}
                          onClick={(e) => {
                            e.preventDefault();
                            handleRemoveFavorite(fav.id);
                          }}
                        >
                          <Heart size={20} fill="#ff4d4d" color="#ff4d4d" />
                        </button>
                      </nav>
                      <mark>$ {fav.price.toLocaleString('es-CL')}</mark>
                    </figure>
                    <div>
                      <strong>{fav.name}</strong>
                      <small>{fav.location || "Ubicación no disponible"}</small>
                      <footer>
                        <div>
                          <User size={14} color="var(--text-muted)" />
                        </div>
                        {fav.seller_name || "Vendedor"}
                      </footer>
                    </div>
                  </article>
                </Link>
              ))
            )}
            {((activeTab === 'publicaciones' && posts.length === 0) || 
               (activeTab === 'favoritos' && favorites.length === 0)) && (
              <div style={{ gridColumn: '1 / -1', textAlign: 'center', padding: '4rem' }}>
                <p style={{ color: 'var(--text-muted)' }}>Aún no tienes elementos en esta sección.</p>
              </div>
            )}
          </div>
        </section>
      </div>

      {editingPost && (
        <dialog open>
          <article className="card">
            <button 
              className="icon-only"
              onClick={() => setEditingPost(null)}
              style={{ 
                position: 'absolute', 
                top: '1rem', 
                right: '1rem', 
                color: 'var(--text-muted)',
                background: 'transparent',
                border: 'none'
              }}
            >
              <X size={24} />
            </button>
            <hgroup>
              <h2>Editar Publicación</h2>
              <p>Modifica los datos de tu artículo</p>
            </hgroup>

            <form onSubmit={handleUpdate}>
              <div className="form-group">
                <label htmlFor="edit-title">Título</label>
                <input
                  type="text"
                  id="edit-title"
                  value={editingPost.title || editingPost.name}
                  onChange={(e) => setEditingPost({...editingPost, title: e.target.value, name: e.target.value})}
                  required
                />
              </div>

              <fieldset className="form-group">
                <div>
                  <label htmlFor="edit-price">Precio ($)</label>
                  <input
                    type="number"
                    id="edit-price"
                    value={editingPost.price}
                    onChange={(e) => setEditingPost({...editingPost, price: parseInt(e.target.value)})}
                    required
                  />
                </div>

                <div>
                  <label htmlFor="edit-category">Categoría</label>
                  <select
                    id="edit-category"
                    value={editingPost.category}
                    onChange={(e) => setEditingPost({...editingPost, category: e.target.value})}
                    required
                  >
                    <option value="muebles">Muebles</option>
                    <option value="tecnologia">Tecnología</option>
                    <option value="decoracion">Decoración</option>
                  </select>
                </div>
              </fieldset>

              <div className="form-group">
                <label>URLs de Imágenes</label>
                {editingPost.images.map((img, index) => (
                  <div key={index} style={{ display: 'flex', gap: '0.5rem', marginBottom: '0.5rem' }}>
                    <input
                      type="url"
                      placeholder="https://..."
                      value={img.url || img}
                      onChange={(e) => {
                        const newImgs = [...editingPost.images];
                        if (typeof newImgs[index] === 'object') {
                          newImgs[index] = { ...newImgs[index], url: e.target.value };
                        } else {
                          newImgs[index] = e.target.value;
                        }
                        setEditingPost({ ...editingPost, images: newImgs });
                      }}
                      required
                    />
                    <button 
                      type="button"
                      className="icon-only"
                      onClick={() => {
                        const newImgs = editingPost.images.filter((_, i) => i !== index);
                        setEditingPost({ ...editingPost, images: newImgs.length ? newImgs : [{ url: "", position: 1 }] });
                      }}
                    >
                      <Trash2 size={20} color="#ef4444" />
                    </button>
                  </div>
                ))}
                <button 
                  type="button" 
                  onClick={() => setEditingPost({ ...editingPost, images: [...editingPost.images, { url: "", position: editingPost.images.length + 1 }] })}
                  style={{ background: 'transparent', color: 'var(--pink-color)', padding: '0.5rem 0', border: 'none' }}
                >
                  <PlusCircle size={16} /> Añadir otra imagen
                </button>
              </div>

              <div className="form-group">
                <label htmlFor="edit-description">Descripción</label>
                <textarea
                  id="edit-description"
                  rows="4"
                  value={editingPost.description}
                  onChange={(e) => setEditingPost({...editingPost, description: e.target.value})}
                  required
                ></textarea>
              </div>

              <nav>
                <button type="button" onClick={() => setEditingPost(null)}>
                  Cancelar
                </button>
                <button type="submit" className="secondary">
                  Guardar Cambios
                </button>
              </nav>
            </form>
          </article>
        </dialog>
      )}
    </>
  );
};

export default Profile;
