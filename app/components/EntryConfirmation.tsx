"use client";

import { useEffect, useState } from "react";

export default function EntryConfirmation() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const confirmed = localStorage.getItem("bigbull-entry-confirmed");

    if (!confirmed) {
      setShow(true);
      document.body.style.overflow = "hidden";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, []);

  const enterWebsite = () => {
    localStorage.setItem("bigbull-entry-confirmed", "true");
    document.body.style.overflow = "";
    setShow(false);
  };

  const exitWebsite = () => {
    window.location.href = "https://www.google.com";
  };

  if (!show) return null;

  return (
    
    <div className="entry-overlay">
      <div className="entry-glow entry-glow-one" />
      <div className="entry-glow entry-glow-two" />

      <div className="entry-card">
        

        <div className="entry-logo">
          BIG <span>BULL</span>
          <sup>™</sup>
        </div>

        <div className="entry-line" />

        <p className="entry-tagline">
          POWER OF LIFE
        </p>

        <h1>Welcome to BIG BULL</h1>

        <p className="entry-message">
          The products on this site are intended for tobacco consumers 21 years of age or older.
          Please verify your age.
        </p>

        <div className="entry-buttons">

          <button
            onClick={enterWebsite}
            className="entry-enter"
          >
            I am 21+
            
          </button>

          <button
            onClick={exitWebsite}
            className="entry-exit"
          >
            I am under 21
          </button>

        </div>

        <p className="entry-note">
          By entering this website, you confirm that you are legally
          permitted to access its content in your location.
        </p>

      </div>
    </div>
  );
}