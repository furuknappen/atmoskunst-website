import { useState } from "react";
import '../styles/productsGallery.css'
import products from "../data/gallery-products.json";

/*
  =============================================
  ATMOS KUNST — Products Gallery Page (Bento)
  =============================================
  To add/remove products, edit the PRODUCTS array.
  "span" controls the bento size:
    - "normal"   → 1×1 square
    - "wide"     → 2×1 (spans 2 columns)
    - "tall"     → 1×2 (spans 2 rows)
    - "big"      → 2×2 (spans 2 cols + 2 rows)

  Tip: avoid putting two "wide" items next to each other
  on the same row, or the layout may break on narrow screens.
  =============================================
*/

const CATEGORIES = ["Alle", "Keramikk", "Glass", "Foto", "Tekstil", "Smykker", "papir", "Parfyme",];

const spanClass = (span) => {
  switch (span) {
    case "wide": return "pg-card--wide";
    case "tall": return "pg-card--tall";
    case "big": return "pg-card--big";
    default: return "";
  }
};

export default function ProductGallery() {
  const [activeCategory, setActiveCategory] = useState("Alle");
  const [lightbox, setLightbox] = useState(null);


  const filtered =
    activeCategory === "Alle"
      ? products
      : products.filter((p) => p.category === activeCategory);

  return (
    <>
      <div className="pg-page">

        <header className="pg-header">
          {/* <span className="pg-eyebrow">Atmos Kunst</span> */}
          <h1 className="pg-title">Våre produkter</h1>
        </header>

        <div className="pg-filters">
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              className={`pg-filter-btn${activeCategory === cat ? " active" : ""}`}
              onClick={() => setActiveCategory(cat)}
            >
              {cat}
            </button>
          ))}
        </div>

        <p className="pg-count">{filtered.length} produkter</p>

        <div className="pg-grid">
          {filtered.map((product) => {
            return (

              <div
                key={product.id}
                className={`pg-card ${spanClass(product.span)}`}
                onClick={() => setLightbox(product)}
                role="button"
                tabIndex={0}
                aria-label={`${product.title} av ${product.artist}`}
                onKeyDown={(e) => e.key === "Enter" && setLightbox(product)}
              >
                <img src={`images/galleryproducts/${product.img}`} alt={product.title} loading="lazy" style={{ objectPosition: product.objectPosition || "center center" }} />
                {/* <span className="pg-card-cat-badge">{product.category}</span> */}
                <div className="pg-card-overlay">
                  {/* <span className="pg-card-title">{product.title}</span> */}
                  <span className="pg-card-artist">{product.artist}</span>
                </div>
              </div>
            )
          })}
        </div>

        {lightbox && (
          <div
            className="pg-lightbox-backdrop"
            onClick={() => setLightbox(null)}
            role="dialog"
            aria-modal="true"
          >
            <div className="pg-lightbox" onClick={(e) => e.stopPropagation()}>
              <img src={`images/galleryproducts/${lightbox.img}`} alt={lightbox.title} />
              <button
                className="pg-lightbox-close"
                onClick={() => setLightbox(null)}
                aria-label="Lukk"
              >✕</button>
              <div className="pg-lightbox-info">
                <div>
                  <div className="pg-lightbox-title">{lightbox.title}</div>
                  <div className="pg-lightbox-artist">{lightbox.artist}</div>
                </div>
                <span className="pg-lightbox-category">{lightbox.category}</span>
              </div>
            </div>
          </div>
        )}

      </div>
    </>
  );
}
