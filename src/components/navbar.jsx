import React from 'react'

function Navbar() {
  return (
    <div className="navbar bg-base-100 shadow-sm">
  <div className="flex-1">
    <a className="btn btn-ghost text-xl font-bold">Anupam.dev</a>
  </div>

  <div className="flex-none">
    <ul className="menu menu-horizontal px-1">
      <li><a>Home</a></li>

      <li><a>About</a></li>

      <li><a>Projects</a></li>

      <li>
        <details>
          <summary>More</summary>
          <ul className="bg-base-100 rounded-t-none p-2">
            <li><a>Skills</a></li>
            <li><a>Contact</a></li>
          </ul>
        </details>
      </li>
    </ul>
  </div>
</div>
  )
}

export default Navbar