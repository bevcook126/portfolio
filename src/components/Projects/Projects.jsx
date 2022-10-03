import './Projects.css';

export default function Projects() {
    return (
        <>
            <h1 id="projects">PROJECTS</h1>
            <div className="projects">
                <a href="https://bevcook126.github.io/connect4project/">
                    <div className="project-card" style={{backgroundImage: `url("https://i.imgur.com/k4HqLKF.png")` }}>
                        <h2>CONNECT 4</h2>
                        <p>A fun and campy pizza-themed 2-player browser game</p>
                        <p>Click to launch!</p>
                    </div>
                </a>
            <a href="https://oreo-fan-club.herokuapp.com/">
                <div className="project-card"  style={{backgroundImage: `url("https://i.imgur.com/Q55hEjk.png")` }}>
                    <h2>OREO FAN CLUB</h2>
                    <p>A social media site centered around the quest for Milk's Favorite Cookie</p>
                    <p>JavaScript | Express | Mongoose | Node.js | CSS | HTML</p>
                    <p>Click to launch!</p>
                </div>
            </a>
            <a href="https://impasta-p3.herokuapp.com/">
                <div className="project-card"  style={{backgroundImage: `url("https://i.imgur.com/nBquvAB.png")` }}>
                    <h2>IMPASTA</h2>
                    <p>An app designed to find "dupe recipes" of restaurant dishes (a group collaboration)</p>
                    <p>Python | Django | Mongoose | CSS | HTML</p>
                    <p>Click to launch!</p>
                </div>
            </a>
            <a href="https://smart-chart-seating.herokuapp.com/">
                <div className="project-card"  style={{backgroundImage: `url("https://i.imgur.com/blxTuqF.png")` }}>
                    <h2>SMART CHART</h2>
                    <p>A seating chart tool designed for teachers</p>
                    <p>JavaScript | React | Express | Mongoose | Node.js | CSS | HTML</p>
                    <p>Click to launch!</p>
                </div>
            </a>
            </div>
        </>
    )
}