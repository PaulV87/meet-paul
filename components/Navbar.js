import React from 'react';
import Link from 'next/link'

function Navbar() {
  return (
      <ul className="navbar">
        <li>One</li>
        <li>Two</li>
        <li>Three</li>
     
      <style jsx>{`
        .navbar {
          display: flex;
          width: 100vw;
          background-color: grey;
          justify-content: space-between;
          align-items: space-between;
          flex-direction: row
          padding: 0.5rem 0;
        }

        a {
          color: inherit;
          text-decoration: none;
        }
      `}</style>
     </ul>

  )
}

export default Navbar
