import EntryConfirmation from "./components/EntryConfirmation";


import Navbar from "./components/Navbar";

export default function Home() {
  return (
    <main style={{ background: "#340303", color: "#fff", minHeight: "100vh" }}>

      <EntryConfirmation />
      

      <Navbar />
      
      

      {/* Premium Hero Section */}
<section
  style={{
    minHeight: "92vh",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    padding: "95px 60px 60px",
    background:
      "radial-gradient(circle at 75% 45%, rgba(3, 3, 3, 0.95), transparent 32%), #100202",
    color: "white",
    gap: "70px",
    flexWrap: "wrap",
    boxSizing: "border-box"
  }}
>

  {/* LEFT SIDE */}
  <div
    style={{
      flex: 1,
      minWidth: "320px",
      maxWidth: "650px",
    }}
  >

    <p
      style={{
        color: "#D4AF37",
        letterSpacing: "5px",
        fontSize: "14px",
        fontWeight: "600",
        marginBottom: "22px",
      }}
    >
      PREMIUM ROLLING PAPERS
    </p>

    <h1
      style={{
        fontSize: "clamp(55px, 7vw, 92px)",
        lineHeight: "0.95",
        margin: "0",
        fontWeight: "800",
        letterSpacing: "-3px",
      }}
    >
      BIG{" "}
      <span style={{ color: "#B81E2D" }}>
        BULL
      </span>
    </h1>

    <div
      style={{
        width: "70px",
        height: "3px",
        background: "#D4AF37",
        margin: "30px 0",
      }}
    />

    <h2
      style={{
        color: "#D4AF37",
        fontSize: "22px",
        letterSpacing: "4px",
        fontWeight: "500",
        marginBottom: "25px",
      }}
    >
      POWER OF LIFE
    </h2>

    <p
      style={{
        fontSize: "19px",
        lineHeight: "1.8",
        color: "#cfcfcf",
        maxWidth: "590px",
        marginBottom: "40px",
      }}
    >
      Premium Brown Rolling Papers and Pre-Rolled Filter Cones,
      crafted for quality, consistency and performance.
    </p>

    {/* BUTTONS */}
<div
  style={{
    display: "flex",
    gap: "16px",
    flexWrap: "wrap",
  }}
>
  <a href="#products" className="premium-btn shop-btn">
    SHOP NOW <span className="arrow">→</span>
  </a>

  <a href="#contact" className="premium-btn dealer-btn">
    BECOME A DEALER
  </a>
</div>



    {/* TRUST POINTS */}
    <div
      style={{
        display: "flex",
        gap: "30px",
        marginTop: "55px",
        flexWrap: "wrap",
        color: "#999",
        fontSize: "13px",
        letterSpacing: "1px",
      }}
    >
      <span>✦ PREMIUM QUALITY</span>
      <span>✦ MADE IN INDIA</span>
      <span>✦ BUILT FOR CONSISTENCY</span>
    </div>
  </div>


  {/* RIGHT SIDE */}
  <div
    style={{
      flex: 1,
      minWidth: "320px",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
    }}
  >

    <div
      style={{
        position: "relative",
        width: "100%",
        maxWidth: "560px",
        padding: "25px",
        border: "1px solid rgba(212,175,55,0.25)",
        background: "rgba(255,255,255,0.025)",
        borderRadius: "18px",
        boxShadow:
          "0 30px 80px rgba(0,0,0,0.7), inset 0 0 40px rgba(184,30,45,0.05)",
      }}
    >

      <div
      
        style={{
          position: "absolute",
          top: "10px",
          right: "25px",
          color: "#D4AF37",
          fontSize: "11px",
          letterSpacing: "3px",
        }}
        
      >
        
        BIG BULL™
        
      </div>

      <img
  src="/hero.jpg.png"
  alt="BIG BULL Premium Rolling Papers"
  className="hero-product-image"
  style={{
    width: "100%",
    display: "block",
    borderRadius: "10px",
    objectFit: "contain",
  }}
/>


      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          marginTop: "15px",
          padding: "0 5px",
        }}
      >
        <span
          style={{
            color: "#D4AF37",
            fontSize: "12px",
            letterSpacing: "2px",
          }}
        >
          PREMIUM COLLECTION
        </span>

        <span
          style={{
            color: "#777",
            fontSize: "12px",
          }}
        >
          EST. INDIA
        </span>
      </div>
    </div>
  </div>
</section>

{/* Products Section */}
<section
  id="products"
  style={{
    padding: "80px 60px",
    background: "#0b0b0b",
    color: "white",
  }}
>
  <div style={{ textAlign: "center", marginBottom: "50px" }}>
    <p
      style={{
        color: "#D4AF37",
        letterSpacing: "4px",
        fontSize: "14px",
        fontWeight: "bold",
      }}
    >
      OUR PRODUCTS
    </p>

    <h2
      style={{
        fontSize: "42px",
        margin: "10px 0",
      }}
    >
      Premium BIG BULL Products
    </h2>

    <p
      style={{
        color: "#cccccc",
        fontSize: "18px",
      }}
    >
      Quality products designed for a smooth and premium experience.
    </p>
  </div>

  <div
    style={{
      display: "grid",
      gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
      gap: "30px",
      maxWidth: "1100px",
      margin: "0 auto",
    }}
  >

    {/* Product 1 */}
    <div
      style={{
        background: "#151515",
        borderRadius: "20px",
        padding: "25px",
        textAlign: "center",
        border: "1px solid #333",
      }}
    >
      <img
        src="/products/product1.jpg.PNG"
        alt="BIG BULL Premium Rolling Papers"
       style={{
  width: "100%",
  height: "240px",
  objectFit: "contain",
  borderRadius: "15px",
  background: "#ffffff",
}}
      />

      <h3
  style={{
    fontSize: "24px",
    marginTop: "22px",
    marginBottom: "10px",
    color: "#ffffff",
    fontWeight: "700",
  }}
>
        Premium Rolling Papers
      </h3>

      <p
  style={{
    color: "#bdbdbd",
    lineHeight: "1.7",
    fontSize: "15px",
    minHeight: "52px",
  }}
>
        Premium-quality rolling papers designed for a smooth and consistent
        experience.
      </p>

      <a
        href="#products"
        style={{
          display: "inline-block",
          marginTop: "15px",
          padding: "12px 25px",
          background: "#8B1E2D",
          color: "white",
          borderRadius: "30px",
          textDecoration: "none",
          fontWeight: "bold",
        }}
      >
        View Product
      </a>
    </div>

    {/* Product 2 */}
    <div
      style={{
        background: "#151515",
        borderRadius: "20px",
        padding: "25px",
        textAlign: "center",
        border: "1px solid #333",
      }}
    >
      <img
        src="/products/product2.jpg.PNG"
        alt="BIG BULL Rolling Paper"
        style={{
  width: "100%",
  height: "240px",
  objectFit: "contain",
  borderRadius: "15px",
  background: "#ffffff",
}}
      />

      <h3
  style={{
    fontSize: "24px",
    marginTop: "22px",
    marginBottom: "10px",
    color: "#ffffff",
    fontWeight: "700",
  }}
>
        BIG BULL Rolling Papers
      </h3>

      <p
  style={{
    color: "#bdbdbd",
    lineHeight: "1.7",
    fontSize: "15px",
    minHeight: "52px",
  }}
>
        Carefully crafted paper with premium quality and reliable
        performance.
      </p>

      <a
        href="#products"
        style={{
          display: "inline-block",
          marginTop: "15px",
          padding: "12px 25px",
          background: "#8B1E2D",
          color: "white",
          borderRadius: "30px",
          textDecoration: "none",
          fontWeight: "bold",
        }}
      >
        View Product
      </a>
    </div>

    {/* Product 3 */}
    <div
      style={{
        background: "#151515",
        borderRadius: "20px",
        padding: "25px",
        textAlign: "center",
        border: "1px solid #333",
      }}
    >
      <img
        src="/products/product3.jpg.PNG"
        alt="BIG BULL Pre-Rolled Cones"
        style={{
  width: "100%",
  height: "240px",
  objectFit: "contain",
  borderRadius: "15px",
  background: "#ffffff",
}}
      />

      <h3
  style={{
    fontSize: "24px",
    marginTop: "22px",
    marginBottom: "10px",
    color: "#ffffff",
    fontWeight: "700",
  }}
>
        Pre-Rolled Cones
      </h3>

      <p
  style={{
    color: "#bdbdbd",
    lineHeight: "1.7",
    fontSize: "15px",
    minHeight: "52px",
  }}
>
        Ready-to-fill premium filter cones made for convenience and
        consistency.
      </p>

      <a
        href="#products"
        style={{
          display: "inline-block",
          marginTop: "15px",
          padding: "12px 25px",
          background: "#8B1E2D",
          color: "white",
          borderRadius: "30px",
          textDecoration: "none",
          fontWeight: "bold",
        }}
      >
        View Product
      </a>
    </div>

    {/* ABOUT BIG BULL */}
<section
  id="about"
  style={{
    padding: "100px 30px",
    background: "#0a0a0a",
    color: "white",
  }}
>
  <div
    style={{
      maxWidth: "1100px",
      margin: "0 auto",
      textAlign: "center",
    }}
  >
    <p
      style={{
        color: "#D4AF37",
        letterSpacing: "5px",
        fontSize: "14px",
        fontWeight: "700",
        marginBottom: "12px",
      }}
    >
      ABOUT BIG BULL
    </p>

    <h2
      style={{
        fontSize: "clamp(36px, 5vw, 56px)",
        margin: "0 0 20px",
        fontWeight: "800",
      }}
    >
      POWER OF LIFE
    </h2>

    <div
      style={{
        width: "70px",
        height: "3px",
        background: "#8B1E2D",
        margin: "0 auto 30px",
      }}
    />

    <p
      style={{
        maxWidth: "850px",
        margin: "0 auto",
        color: "#bdbdbd",
        fontSize: "18px",
        lineHeight: "1.8",
      }}
    >
      BIG BULL is a premium Indian brand focused on quality rolling papers
      and pre-rolled filter cones. Our focus is simple — premium materials,
      consistent quality and modern design that represents the BIG BULL
      standard.
    </p>

    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
        gap: "22px",
        marginTop: "55px",
      }}
    >
      <div
        style={{
          background: "#151515",
          border: "1px solid #292929",
          borderRadius: "18px",
          padding: "30px 20px",
        }}
      >
        <div style={{ fontSize: "32px", marginBottom: "12px" }}>★</div>
        <h3 style={{ fontSize: "21px", marginBottom: "10px" }}>
          Premium Quality
        </h3>
        <p style={{ color: "#999", lineHeight: "1.6" }}>
          Quality-focused products designed with attention to detail.
        </p>
      </div>

      <div
        style={{
          background: "#151515",
          border: "1px solid #292929",
          borderRadius: "18px",
          padding: "30px 20px",
        }}
      >
        <div style={{ fontSize: "32px", marginBottom: "12px" }}>🇮🇳</div>
        <h3 style={{ fontSize: "21px", marginBottom: "10px" }}>
          Made in India
        </h3>
        <p style={{ color: "#999", lineHeight: "1.6" }}>
          Proudly building a premium Indian brand.
        </p>
      </div>

      <div
        style={{
          background: "#151515",
          border: "1px solid #292929",
          borderRadius: "18px",
          padding: "30px 20px",
        }}
      >
        <div style={{ fontSize: "32px", marginBottom: "12px" }}>◆</div>
        <h3 style={{ fontSize: "21px", marginBottom: "10px" }}>
          Built for Quality
        </h3>
        <p style={{ color: "#999", lineHeight: "1.6" }}>
          Consistency and reliability at the heart of BIG BULL.
        </p>
      </div>
    </div>
  </div>
</section>
  </div>
</section>


<section
  style={{
    padding: "80px 60px",
    textAlign: "center",
    background: "#111",
  }}
>
  <h2 style={{ fontSize: "42px", marginBottom: "50px" }}>
    Why Choose BIG BULL?
  </h2>

  <div
    style={{
      display: "grid",
      gridTemplateColumns: "repeat(4, 1fr)",
      gap: "20px",
    }}
  >
    <div style={{ background: "#1a1a1a", padding: "30px", borderRadius: "15px" }}>
      <h3>🌿 Natural Gum</h3>
      <p>Premium natural gum for a smooth and consistent experience.</p>
    </div>

    <div style={{ background: "#1a1a1a", padding: "30px", borderRadius: "15px" }}>
      <h3>🔥 Slow Burn</h3>
      <p>Designed for an even and long-lasting burn.</p>
    </div>

    <div style={{ background: "#1a1a1a", padding: "30px", borderRadius: "15px" }}>
      <h3>⭐ Premium Quality</h3>
      <p>Crafted using high-quality paper for the best experience.</p>
    </div>

    <div style={{ background: "#1a1a1a", padding: "30px", borderRadius: "15px" }}>
      <h3> Made in India</h3>
      <p>Proudly manufactured in India with world-class quality.</p>
    </div>
  </div>
</section>




  <section style={{ textAlign: "center", padding: "60px 20px" }}>
  <h2>Order Online</h2>

  <p>Buy BIG BULL products from your favorite marketplace.</p>

  <div
    style={{
      display: "flex",
      justifyContent: "center",
      gap: "15px",
      flexWrap: "wrap",
      marginTop: "25px",
    }}
  >
    <a
      href="https://amzn.in/d/0fh5iIjR"
      target="_blank"
      rel="noopener noreferrer"
    className="online-order-btn amazon-order"
    >
      <span className="order-icon">🛒</span>
      Amazon
    </a>

    <a
      href="https://dl.flipkart.com/dl/bigbull-rolling-paper/p/itm26f6911508fa3?pid=RLPHP75VHZHYHNHH"
      target="_blank"
      rel="noopener noreferrer"
    className="online-order-btn flipkart-order"
  >
    <span className="order-icon">🛍️</span>
  
      Flipkart
    </a>

    <a
      href="https://www.meesho.com/BIGBULLPAPERINDUSTRIES"
      target="_blank"
      rel="noopener noreferrer"
    className="online-order-btn meesho-order"
  >
    <span className="order-icon">🛍️</span>
  
      Meesho
    </a>

    <a
      href="https://www.instagram.com/bigbullindustriesofficial"
      target="_blank"
    rel="noopener noreferrer"
    className="online-order-btn instagram-order"
  >
    <span className="order-icon">◎</span>

      Instagram
    </a>
  </div>
</section>


<section
  id="contact"
  style={{
    padding: "80px 20px",
    textAlign: "center",
    background: "#111",
    color: "white",
  }}
  
>
  
  <h2 style={{ fontSize: "42px", marginBottom: "15px" }}>
    Contact BIG BULL
  </h2>

  <p style={{ color: "#bbb", marginBottom: "35px" }}>
    Interested in BIG BULL products or becoming a dealer?
  </p>

  <div
    style={{
      display: "flex",
      justifyContent: "center",
      gap: "15px",
      flexWrap: "wrap",
    }}
  >
    {/* WhatsApp */}
    <a
      href="https://wa.me/919998337995"
      target="_blank"
      rel="noopener noreferrer"
      style={{
        background: "#25D366",
        color: "white",
        padding: "15px 28px",
        borderRadius: "30px",
        textDecoration: "none",
        fontWeight: "bold",
      }}
    >
      💬 WhatsApp
    </a>

    {/* Mobile */}
    <a
      href="tel:+919558822559"
      style={{
        background: "#8B1E2D",
        color: "white",
        padding: "15px 28px",
        borderRadius: "30px",
        textDecoration: "none",
        fontWeight: "bold",
      }}
    >
      📞 +91 9558822559
    </a>

    {/* Instagram */}
    <a
      href="https://www.instagram.com/bigbullindustriesofficial"
      target="_blank"
      rel="noopener noreferrer"
      style={{
        background: "#fa186b",
        color: "black",
        padding: "15px 28px",
        borderRadius: "30px",
        textDecoration: "none",
        fontWeight: "bold",
      }}
    >
        ◎ Instagram
    </a>
  </div>

  
</section>

<footer
  style={{
    background: "#050505",
    color: "white",
    padding: "50px 30px 25px",
    borderTop: "1px solid #8B1E2D",
  }}
>
  <div
    style={{
      maxWidth: "1200px",
      margin: "0 auto",
      display: "grid",
      gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
      gap: "40px",
    }}
  >
    {/* Brand */}
    <div>
      <h2 style={{ fontSize: "30px", marginBottom: "10px" }}>
        BIG <span style={{ color: "#E63946" }}>BULL</span>
      </h2>

      <p
        style={{
          color: "#D4AF37",
          letterSpacing: "3px",
          fontWeight: "bold",
        }}
      >
        POWER OF LIFE
      </p>

      <p style={{ color: "#999", marginTop: "15px" }}>
        Premium rolling papers and pre-rolled filter cones.
      </p>
    </div>

    {/* Quick Links */}
    <div>
      <h3>Quick Links</h3>

      <p><a href="#" style={{ color: "#bbb", textDecoration: "none" }}>Home</a></p>
      <p><a href="#products" style={{ color: "#bbb", textDecoration: "none" }}>Products</a></p>
      <p><a href="#contact" style={{ color: "#bbb", textDecoration: "none" }}>Contact</a></p>
    </div>

    {/* Order Online */}
    <div>
      <h3>Order Online</h3>

      <p>
        <a
          href="https://amzn.in/d/0fh5iIjR"
          target="_blank"
          rel="noopener noreferrer"
          style={{ color: "#c8b5b5", textDecoration: "none" }}
        >
          Amazon
        </a>
      </p>

      <p>
        <a
          href="https://www.meesho.com/BIGBULLPAPERINDUSTRIES"
          target="_blank"
          rel="noopener noreferrer"
          style={{ color: "#c6710a", textDecoration: "none" }}
        >
          Meesho
        </a>
      </p>

      <p>
        <a
          href="https://dl.flipkart.com/dl/bigbull-rolling-paper/p/itm26f6911508fa3?pid=RLPHP75VHZHYHNHH"
          target="_blank"
          rel="noopener noreferrer"
          style={{ color: "#331ef0", textDecoration: "none" }}
        >
          Flipkart
        </a>
      </p>
    </div>

    {/* Contact */}
    <div>
      <h3>Contact</h3>

      <p style={{ color: "#bbb" }}>
        📞 +91 9558822559
      </p>

      <p>
        <a
          href="https://wa.me/919998337995"
          target="_blank"
          rel="noopener noreferrer"
          style={{ color: "#25D366", textDecoration: "none" }}
        >
          💬 WhatsApp
        </a>
      </p>

      <p>
        <a
          href="https://www.instagram.com/bigbullindustriesofficial"
          target="_blank"
          rel="noopener noreferrer"
          style={{ color: "#bbb", textDecoration: "none" }}
        >
          📸 Instagram
        </a>
      </p>
    </div>
  </div>

  <div
    style={{
      marginTop: "45px",
      paddingTop: "20px",
      borderTop: "1px solid #222",
      textAlign: "center",
      color: "#666",
      fontSize: "14px",
    }}
  >
    © 2026 BIG BULL. All Rights Reserved.
  </div>
</footer>
    </main>
  );
}