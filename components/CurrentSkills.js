import React from 'react';

import StarIcon from '@material-ui/icons/Star';
import StarBorderIcon from '@material-ui/icons/StarBorder';
import Divider from '@material-ui/core/Divider';

function CurrentSkills() {

  return (
    <div className="container">
      <h1 className="section-title">Current Skills</h1>
      <Divider />
      <h1 className="section-title">Languages</h1>       
      <div className="section-container">
        <div className="card-container">
          <img className="card-image" src="/javascript.svg" alt="Javascript Badge"/>
          <div className="card-content">
            <div className="card-title">Javascript</div>
            <div>Proficiency:</div>
            <div className="card-proficiency">
              <StarIcon />
              <StarIcon />
              <StarIcon />
              <StarBorderIcon />
              <StarBorderIcon />
            </div>
          </div>
        </div>

        <div className="card-container">
          <img className="card-image" src="/html5.svg" alt="HTML Badge"/>
          <div className="card-content">
            <div className="card-title">HTML</div>
            <div>Proficiency:</div>
            <div className="card-proficiency">
              <StarIcon />
              <StarIcon />
              <StarIcon />
              <StarIcon />
              <StarBorderIcon />
            </div>
          </div>
        </div>

        <div className="card-container">
          <img className="card-image" src="/css3.svg" alt="CSS Badge"/>
          <div className="card-content">
            <div className="card-title">CSS</div>
            <div>Proficiency:</div>
            <div className="card-proficiency">
              <StarIcon />
              <StarIcon />
              <StarBorderIcon />
              <StarBorderIcon />
              <StarBorderIcon />
            </div>
          </div>
        </div>

        <div className="card-container">
          <img className="card-image" src="/python.svg" alt="Python Badge"/>
          <div className="card-content">
            <div className="card-title">Python</div>
            <div>Proficiency:</div>
            <div className="card-proficiency">
              <StarIcon />
              <StarIcon />
              <StarBorderIcon />
              <StarBorderIcon />
              <StarBorderIcon />
            </div>
          </div>
        </div>

        <div className="card-container">
          <img className="card-image" src="/jsx.png" alt="JSX Badge"/>
          <div className="card-content">
            <div className="card-title">JSX</div>
            <div>Proficiency:</div>
            <div className="card-proficiency">
              <StarIcon />
              <StarIcon />
              <StarIcon />
              <StarIcon />
              <StarBorderIcon />
            </div>
          </div>
        </div>

        <div className="card-container">
          <img className="card-image" src="/sql2.png" alt="SQL Badge"/>
          <div className="card-content">
            <div className="card-title">SQL</div>
            <div>Proficiency:</div>
            <div className="card-proficiency">
              <StarIcon />
              <StarBorderIcon />
              <StarBorderIcon />
              <StarBorderIcon />
              <StarBorderIcon />
            </div>
          </div>
        </div>

        <div className="card-container">
          <img className="card-image" src="sass.svg" alt="SASS Badge"/>
          <div className="card-content">
            <div className="card-title">SASS</div>
            <div>Proficiency:</div>
            <div className="card-proficiency">
              <StarIcon />
              <StarIcon />
              <StarBorderIcon />
              <StarBorderIcon />
              <StarBorderIcon />
            </div>
          </div>
        </div>
      </div>

      <div>
        <h1 className="section-title">Frontend Framework</h1>
        <div className="section-container">
          <div className="card-container">
            <img className="card-image" src="react.svg" alt="React Badge"/>
            <div className="card-content">
              <div className="card-title">React</div>
              <div>Proficiency:</div>
              <div className="card-proficiency">
                <StarIcon />
                <StarIcon />
                <StarIcon />
                <StarBorderIcon />
                <StarBorderIcon />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div>
        <h1 className="section-title">Backend Framework</h1>
        <div className="section-container">
          <div className="card-container">
            <img className="card-image" src="nodejs.svg" alt="Node Badge"/>
            <div className="card-content">
              <div className="card-title">Node.js</div>
              <div>Proficiency:</div>
              <div className="card-proficiency">
                <StarIcon />
                <StarBorderIcon />
                <StarBorderIcon />
                <StarBorderIcon />
                <StarBorderIcon />
              </div>
            </div>
          </div>
          <div className="card-container">
            <img className="card-image" src="express-js.svg" alt="Express.js Badge"/>
            <div className="card-content">
              <div className="card-title">Express</div>
              <div>Proficiency:</div>
              <div className="card-proficiency">
                <StarIcon />
                <StarBorderIcon />
                <StarBorderIcon />
                <StarBorderIcon />
                <StarBorderIcon />
              </div>
            </div>
          </div>
          <div className="card-container">
            <img className="card-image" src="next-js.svg" alt="Next.js Badge"/>
            <div className="card-content">
              <div className="card-title">Next.js</div>
              <div>Proficiency:</div>
              <div className="card-proficiency">
                <StarIcon />
                <StarBorderIcon />
                <StarBorderIcon />
                <StarBorderIcon />
                <StarBorderIcon />
              </div>
            </div>
          </div>

          <div className="card-container">
            <img className="card-image" src="flask.svg" alt="Flask Badge"/>
            <div className="card-content">
              <div className="card-title">Flask</div>
              <div>Proficiency:</div>
              <div className="card-proficiency">
                <StarIcon />
                <StarBorderIcon />
                <StarBorderIcon />
                <StarBorderIcon />
                <StarBorderIcon />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div>
        <h1 className="section-title">Version Control</h1>
        <div className="section-container">
          <div className="card-container">
            <img className="card-image" src="git.svg" alt="Git Badge"/>
            <div className="card-content">
              <div className="card-title">Git</div>
              <div>Proficiency:</div>
              <div className="card-proficiency">
                <StarIcon />
                <StarIcon />
                <StarIcon />
                <StarBorderIcon />
                <StarBorderIcon />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div>
        <h1 className="section-title">Module bundler</h1>
        <div className="section-container">
          <div className="card-container">
            <img className="card-image" src="webpack.svg" alt="Webpack Badge"/>
            <div className="card-content">
              <div className="card-title">Webpack</div>
              <div>Proficiency:</div>
              <div className="card-proficiency">
                <StarIcon />
                <StarIcon />
                <StarBorderIcon />
                <StarBorderIcon />
                <StarBorderIcon />
              </div>
            </div>
          </div>
          <div className="card-container">
            <img className="card-image" src="npm.svg" alt="NPM Badge"/>
            <div className="card-content">
              <div className="card-title">NPM</div>
              <div>Proficiency:</div>
              <div className="card-proficiency">
                <StarIcon />
                <StarIcon />
                <StarIcon />
                <StarBorderIcon />
                <StarBorderIcon />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div>
        <h1 className="section-title">Databases</h1>
        <div className="section-container">
          <div className="card-container">
            <img className="card-image" src="sqlite.svg" alt="SQLite Badge"/>
            <div className="card-content">
              <div className="card-title">SQLite</div>
              <div>Proficiency:</div>
              <div className="card-proficiency">
                <StarIcon />
                <StarBorderIcon />
                <StarBorderIcon />
                <StarBorderIcon />
                <StarBorderIcon />
              </div>
            </div>
          </div>
          <div className="card-container">
            <img className="card-image" src="mongodb.svg" alt="MongoDb Badge"/>
            <div className="card-content">
              <div className="card-title">MongoDB</div>
              <div>Proficiency:</div>
              <div className="card-proficiency">
                <StarIcon />
                <StarBorderIcon />
                <StarBorderIcon />
                <StarBorderIcon />
                <StarBorderIcon />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div>
        <h1 className="section-title">Local Storage</h1>
        <div className="section-container">
          <div className="card-container">
            <img className="card-image" src="localstorage.png" alt="localStorage Badge"/>
            <div className="card-content">
              <div className="card-title">localStorage</div>
              <div>Proficiency:</div>
              <div className="card-proficiency">
                <StarIcon />
                <StarIcon />
                <StarIcon />
                <StarBorderIcon />
                <StarBorderIcon />
              </div>
            </div>
          </div>
          <div className="card-container">
            <img className="card-image" src="indexeddb.jpg" alt="IndexedDb Badge"/>
            <div className="card-content">
              <div className="card-title">IndexedDb</div>
              <div>Proficiency:</div>
              <div className="card-proficiency">
                <StarIcon />
                <StarIcon />
                <StarIcon />
                <StarBorderIcon />
                <StarBorderIcon />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div>
        <h1 className="section-title">Troubleshooting</h1>
        <div className="section-container">
          <div className="card-container">
            <img className="card-image" src="google3.svg" alt="Google Badge"/>
            <div className="card-content">
              <div className="card-title">Google</div>
              <div>Proficiency:</div>
              <div className="card-proficiency">
                <StarIcon />
                <StarIcon />
                <StarIcon />
                <StarIcon />
                <StarBorderIcon />
              </div>
            </div>
          </div>
          <div className="card-container">
            <img className="card-image" src="stack-overflow.svg" alt="Stack Overflow Badge"/>
            <div className="card-content">
              <div className="card-title">Stack Overflow</div>
              <div>Proficiency:</div>
              <div className="card-proficiency">
                <StarIcon />
                <StarIcon />
                <StarIcon />
                <StarBorderIcon />
                <StarBorderIcon />
              </div>
            </div>
          </div>
          <div className="card-container">
            <img className="card-image" src="MyCartoonDuck.png" alt="Rubber duck debugging Badge" style={{ borderRadius: "50%" }}/>
            <div className="card-content">
              <div className="card-title" style={{ fontSize: "1.5rem"}}>Rubber duck debugging</div>
              <div>Proficiency:</div>
              <div className="card-proficiency">
                <StarIcon />
                <StarIcon />
                <StarIcon />
                <StarIcon />
                <StarBorderIcon />
              </div>
            </div>
          </div>
        </div>
      </div>

      

      <style jsx>{`
        .container {
          width: 90vw;
          display: flex;
          flex-flow: column;
          justify-content: space-evenly;
        }

        .section-title {
          display: flex;
          justify-content: center;
          align-items: center;
          color: #001325;
          font-size: 2rem;
        }
        .section-container {
          display: grid;
          grid-template-columns: 40vw 40vw;
          justify-content: center;
          align-items: center;
          width: 100%;
          gap: 15px 10px;
        }

        .card-container {
          background-color: white;
          display: flex;
          flex-direction: row;
          height: 250px;
          min-width: 40vw;
          box-shadow: 0px 2px 1px -1px rgba(0,0,0,0.2), 0px 1px 1px 0px rgba(0,0,0,0.14), 0px 1px 3px 0px rgba(0,0,0,0.12);
          border-radius: 4px;
        }

        .card-image{
          height: 100%;
          width: 200px;
          margin: 10px; 
          padding: 20px;
        }

        .card-content {
          display: flex;
          flex-flow: column;
          align-items: center;
          justify-content: center;
        }

        .card-title {
          font-size: 2rem;
        }

        .card-proficiency {
          color: gold;
        }


        @media (max-width: 600px) {
          .section-container {
            grid-template-columns: 90vw;
          }
          .card-container{
            flex-direction: column;
          }
          
        }
        @media (max-width: 1001px) {
          .card-container {
            flex-direction: column;
            justify-content: center;
            align-items: center;
          }
          .card-image{
            height: 100px;
            width: 100px;
            margin: 5px; 
            padding: 5px;
          }
        }
      `}</style>
    </div>
  )
}

export default CurrentSkills
