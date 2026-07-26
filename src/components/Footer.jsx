import React from "react";

function Footer() {
  return (
    <footer className="footer footer-center bg-white/10 backdrop-blur-xl border border-white/10  p-10 text-white/60">

      <aside>

        <p className="font-bold text-lg">
          Anand Anupam
        </p>

        <p>
          Full Stack Developer
        </p>

        <p>
          Building AI-Powered & Real-Time Web Applications
        </p>

        <p>
          © {new Date().getFullYear()} All Rights Reserved
        </p>

      </aside>

    </footer>
  );
}

export default Footer;