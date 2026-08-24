"use client";

import { useEffect, useState } from "react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
  // Always start the website at the top after refresh
  window.history.scrollRestoration = "manual";
  window.scrollTo(0, 0);

  const handleScroll = () => {
    setScrolled(window.scrollY > 40);
  };

  window.addEventListener("scroll", handleScroll);

  return () => {
    window.removeEventListener("scroll", handleScroll);
  };
}, []);

  return (
    <>
      <nav className={`navbar ${scrolled ? "navbar-scrolled" : ""}`}>
        <div className="navbar-bg"></div>

        <div className="navbar-inner">

          {/* LOGO */}
          <a href="/" className="brand">
            <div className="brand-name">
              BIG <span>BULL</span>
              <sup>™</sup>
            </div>

            <div className="brand-tagline">
              POWER OF LIFE
            </div>
          </a>

          {/* MENU */}
          <div className="menu">

            <a href="/" className="nav-link">
              HOME
            </a>

            <a href="/#products" className="nav-link">
              PRODUCTS
            </a>

            <a href="/#about" className="nav-link">
              ABOUT
            </a>

            <a href="/#contact" className="nav-link">
              CONTACT
            </a>

            <a href="/#products" className="shop-button">
              SHOP NOW
            </a>

          </div>
        </div>

        <div className="gold-line"></div>
      </nav>

      <style jsx>{`
        .navbar {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 92px;
          z-index: 1000;

          background: #050505;
          overflow: hidden;

          border-bottom: 1px solid rgba(212, 175, 55, 0.45);

          transition:
            height 0.4s ease,
            box-shadow 0.4s ease;
        }

        .navbar-scrolled {
          height: 76px;
          box-shadow:
            0 10px 35px rgba(0, 0, 0, 0.75);
        }

        /* NAVBAR IMAGE */
        .navbar-bg {
          position: absolute;
          inset: 0;

          background-image:
            linear-gradient(
              90deg,
              rgba(0, 0, 0, 0.94),
              rgba(0, 0, 0, 0.65),
              rgba(0, 0, 0, 0.9)
            ),
            url("/navbar-bg.png");

          background-size: cover;
          background-position: center;

          opacity: 0.95;

          animation: backgroundMove 15s ease-in-out infinite alternate;
        }

        @keyframes backgroundMove {
          from {
            background-position: 48% center;
          }

          to {
            background-position: 52% center;
          }
        }

        .navbar-inner {
          position: relative;
          z-index: 2;

          height: 100%;
          max-width: 1250px;
          margin: auto;

          padding: 0 30px;

          display: flex;
          align-items: center;
          justify-content: space-between;
        }

        /* BRAND */
        .brand {
          text-decoration: none;

          opacity: 0;
          transform: translateX(-30px);

          animation: brandIn 0.8s ease forwards;
        }

        @keyframes brandIn {
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        .brand-name {
          color: #ffffff;
          font-size: 26px;
          font-weight: 900;
          letter-spacing: 2px;
          line-height: 1;
        }

        .brand-name span {
          color: #e53935;
        }

        .brand-name sup {
          color: #d4af37;
          font-size: 8px;
          margin-left: 3px;
        }

        .brand-tagline {
          margin-top: 5px;

          color: #d4af37;
          font-size: 8px;
          font-weight: 700;
          letter-spacing: 3px;
        }

        /* MENU */
        .menu {
          display: flex;
          align-items: center;
          gap: 32px;
        }

        .nav-link {
          position: relative;

          color: #eeeeee;
          text-decoration: none;

          font-size: 13px;
          font-weight: 700;
          letter-spacing: 0.8px;

          padding: 10px 0;

          opacity: 0;
          transform: translateY(-15px);

          animation: menuIn 0.6s ease forwards;
        }

        .nav-link:nth-child(1) {
          animation-delay: 0.15s;
        }

        .nav-link:nth-child(2) {
          animation-delay: 0.25s;
        }

        .nav-link:nth-child(3) {
          animation-delay: 0.35s;
        }

        .nav-link:nth-child(4) {
          animation-delay: 0.45s;
        }

        @keyframes menuIn {
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .nav-link::after {
          content: "";

          position: absolute;
          left: 50%;
          bottom: 2px;

          width: 0;
          height: 2px;

          background: #d4af37;

          transform: translateX(-50%);

          transition: width 0.3s ease;
        }

        .nav-link:hover {
          color: #d4af37;
        }

        .nav-link:hover::after {
          width: 100%;
        }

        /* SHOP BUTTON */
        .shop-button {
          position: relative;

          color: #ffffff;
          text-decoration: none;

          padding: 12px 23px;

          font-size: 12px;
          font-weight: 900;
          letter-spacing: 1px;

          border: 1px solid #d4af37;
          border-radius: 5px;

          background: linear-gradient(
            135deg,
            #8b1e2d,
            #4b080f
          );

          box-shadow:
            0 0 0 rgba(212, 175, 55, 0);

          opacity: 0;
          transform: translateX(25px);

          animation:
            shopIn 0.7s ease 0.55s forwards,
            shopGlow 2.5s ease-in-out 1.5s infinite;
        }

        @keyframes shopIn {
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes shopGlow {
          0%,
          100% {
            box-shadow:
              0 0 0 rgba(212, 175, 55, 0);
          }

          50% {
            box-shadow:
              0 0 22px rgba(212, 175, 55, 0.35);
          }
        }

        .shop-button:hover {
          background: #d4af37;
          color: #080808;

          transform: translateY(-2px);

          box-shadow:
            0 8px 25px rgba(212, 175, 55, 0.4);
        }

        /* GOLD ANIMATED LINE */
        .gold-line {
          position: absolute;
          bottom: 0;
          left: 0;

          height: 2px;
          width: 100%;

          background:
            linear-gradient(
              90deg,
              transparent,
              #d4af37,
              #e53935,
              #d4af37,
              transparent
            );

          background-size: 200% 100%;

          animation: lineMove 3s linear infinite;
        }

        @keyframes lineMove {
          from {
            background-position: 200% 0;
          }

          to {
            background-position: -200% 0;
          }
        }

        /* MOBILE */
        @media (max-width: 800px) {
          .navbar {
            height: 75px;
          }

          .navbar-inner {
            padding: 0 15px;
          }

          .brand-name {
            font-size: 19px;
          }

          .brand-tagline {
            font-size: 6px;
          }

          .menu {
            gap: 13px;
          }

          .nav-link {
            font-size: 9px;
          }

          .shop-button {
            display: none;
          }
        }
      `}</style>
    </>
  );
}