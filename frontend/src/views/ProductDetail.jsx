import { useState, useCallback, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { User, Mail, Phone, X, Maximize, ChevronLeft, ChevronRight } from "lucide-react";
import useEmblaCarousel from "embla-carousel-react";
import mockData from "../data/mockups.json";

const ProductDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const allProducts = [
    ...mockData.catalog, 
    ...mockData.userPosts, 
    ...mockData.userFavorites
  ];
  
  const foundProduct = allProducts.find(p => String(p.id) === String(id));

  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });
  const [emblaRefFullscreen, emblaApiFullscreen] = useEmblaCarousel({ loop: true });
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [isFullscreen, setIsFullscreen] = useState(false);

  if (!foundProduct) {
    return (
      <div className="container" style={{ textAlign: 'center', padding: '6rem 2rem' }}>
        <article className="card">
          <h2>Producto no encontrado</h2>
          <p>Lo sentimos, no pudimos encontrar el artículo que buscas.</p>
          <button onClick={() => navigate('/catalogo')}>Volver al Catálogo</button>
        </article>
      </div>
    );
  }

  const product = {
    ...foundProduct,
    seller: {
      name: foundProduct.seller_name || "Vendedor Independiente",
      email: "test@mail.com",
      phone: "+1 2 3456 7890"
    }
  };

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  const scrollPrevFullscreen = useCallback(() => {
    if (emblaApiFullscreen) emblaApiFullscreen.scrollPrev();
  }, [emblaApiFullscreen]);

  const scrollNextFullscreen = useCallback(() => {
    if (emblaApiFullscreen) emblaApiFullscreen.scrollNext();
  }, [emblaApiFullscreen]);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi, setSelectedIndex]);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    emblaApi.on("select", onSelect);
    emblaApi.on("reInit", onSelect);
  }, [emblaApi, onSelect]);

  useEffect(() => {
    if (isFullscreen && emblaApiFullscreen) {
      emblaApiFullscreen.scrollTo(selectedIndex, true);
    }
  }, [isFullscreen, emblaApiFullscreen, selectedIndex]);

  return (
    <>
      <article className="card">
        <button onClick={() => navigate(-1)}>
          <X size={24} />
        </button>

        <figure>
          <div className="embla" ref={emblaRef}>
            <div className="embla__container">
              {product.images.map((img, index) => (
                <div className="embla__slide" key={index}>
                  <img 
                    src={img.url} 
                    alt={`${product.name} - ${index + 1}`} 
                  />
                </div>
              ))}
            </div>
            {product.images.length > 1 && (
              <>
                <button onClick={scrollPrev}>
                  <ChevronLeft size={24} />
                </button>
                <button onClick={scrollNext}>
                  <ChevronRight size={24} />
                </button>
              </>
            )}
          </div>

          <button onClick={() => setIsFullscreen(true)}>
            <Maximize size={20} />
          </button>
          
          <nav>
            {product.images.map((_, idx) => (
              <div 
                key={idx} 
                aria-selected={idx === selectedIndex}
                onClick={() => emblaApi && emblaApi.scrollTo(idx)}
              />
            ))}
          </nav>
        </figure>

        <section>
          <h1>{product.name}</h1>
          <h2>$ {product.price.toLocaleString('es-CL')}</h2>

          <div>
            <h3>Descripción</h3>
            <p>{product.description}</p>
          </div>

          <div>
            <h3>Contacto del Vendedor</h3>
            <ul>
              <li>
                <User size={18} color="var(--pink-color)" /> <span>{product.seller.name}</span>
              </li>
              <li>
                <Mail size={18} color="var(--pink-color)" />
                <strong>Email:</strong> {product.seller.email}
              </li>
              <li>
                <Phone size={18} color="var(--pink-color)" />
                <strong>Teléfono:</strong> {product.seller.phone}
              </li>
            </ul>

            <button className="secondary">
              Contactar al Vendedor
            </button>
          </div>
        </section>
      </article>

      {isFullscreen && (
        <dialog open>
          <article className="card">
            <button onClick={() => setIsFullscreen(false)}>
              <X size={24} />
            </button>
            
            <div className="embla" ref={emblaRefFullscreen}>
              <div className="embla__container">
                {product.images.map((img, index) => (
                  <div className="embla__slide" key={index}>
                    <img 
                      src={img.url} 
                      alt={`${product.name} - ${index + 1}`} 
                    />
                  </div>
                ))}
              </div>
              {product.images.length > 1 && (
                <>
                  <button onClick={scrollPrevFullscreen}>
                    <ChevronLeft size={32} />
                  </button>
                  <button onClick={scrollNextFullscreen}>
                    <ChevronRight size={32} />
                  </button>
                </>
              )}
            </div>
          </article>
        </dialog>
      )}
    </>
  );
};

export default ProductDetail;
