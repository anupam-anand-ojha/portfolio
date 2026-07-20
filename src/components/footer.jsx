import React from "react";

function Footer() {
  return (
    <footer className="footer footer-center bg-black-100/20 backdrop-blur-xl  p-10 text-base-content">

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