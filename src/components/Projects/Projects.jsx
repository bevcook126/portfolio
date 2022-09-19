import './Projects.css';

export default function Projects() {
    return (
        <>
            <h1 id="projects">PROJECTS</h1>
            <div className="projects">
                <div className="project-card" style={{backgroundImage: `url("https://i.imgur.com/k4HqLKF.png")` }}>
                    <h2>CONNECT 4</h2>
                    <p>A fun and campy pizza-themed 2-player browser game</p>
                </div>
                <div className="project-card"  style={{backgroundImage: `url("https://i.imgur.com/Q55hEjk.png")` }}>
                    <p>A social site</p>
                </div>
                <div className="project-card"  style={{backgroundImage: `url("https://i.imgur.com/nBquvAB.png")` }}>
                    <p>project</p>
                </div>
                <div className="project-card"  style={{backgroundImage: `url("https://i.imgur.com/blxTuqF.png")` }}>
                    <p>project</p>
                </div>
            </div>
        </>
    )
}