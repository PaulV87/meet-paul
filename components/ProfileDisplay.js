import React from 'react'

function ProfileDisplay() {
  return (
    <div className="container">
      <div className="text-container">
        <span className="maintitle">Meet Paul</span>
        <span className="subtitle">perpetually under construction</span>
      </div>
      <img className="imageContainer" src="/MyCartoonDuck.png" alt="Paul's duck" />

      <style jsx>{`
        .container {
          background-color: #292f31;
          width: 100%;
          height: 50vh;
          min-height: 50vh;
          display: flex;
          flex-flow: row;
          justify-content: space-between;
        }

        .text-container {
          min-width: 60vw;
          display: flex;
          flex-flow: column;          
          align-items: center;
          justify-content: center;
        }     
        .maintitle {
          font-size: 3rem;
          color: #f8f9fa;
        }

        .subtitle {
          font-size: 1rem;
          color: #f8f9fa;
        }

        .imageContainer {
          width: 300px;
        }

        @media (max-width: 600px) {
          .maintitle {
            font-size: 2.5rem;
          }
  
          .subtitle {
            font-size: 0.8rem;
          }

          .imageContainer {
            width: 150px; 
        }
        @media (max-width: 320px){
          .maintitle {
            font-size: 2.2rem;
          }
  
          .subtitle {
            font-size: 0.7rem;
          }

          .imageContainer {
            width: 120px; 
        }
        }
      `}</style>
    </div>
  )
}

export default ProfileDisplay
