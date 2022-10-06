import './Projects.css';

export default function Projects() {
    return (
        <>
            <img id="projarrow" src="https://i.imgur.com/O2eUcDj.png" alt="arrow"/>
            <img id="projects" src="https://i.imgur.com/FaDcTCO.png" alt="PROJECTS"/>
                <div className="projects">
                    <a href="https://smart-chart-seating.herokuapp.com/">
                        <img className="img" id="smartchart" src="https://i.imgur.com/PkmErzP.png" alt="SMART CHART: a seating chart tool designed for teachers. Teachers can upload their rosters and visualize seating arrangements. Made using JavaScript, React, Express, CSS, HTML, Mongoose, Node.js, and Express."/>
                    </a>
                    <a href="https://bevcook126.github.io/connect4project/">
                        <img className="img" id="connect4" src="https://i.imgur.com/KhaeJx4.png" alt="CONNECT 4: a fun and campy 2-player browser game with a silly pizza theme! Made using JavaScript, CSS, and HTML."/>
                    </a>
                    <a href="https://oreo-fan-club.herokuapp.com/">
                        <img className="img" id="oreo" src="https://i.imgur.com/DsxzVxH.png" alt="OREO FAN CLUB: a social site for fans of Milk's Favorite Cookie! Fans can log in to this full-CRUD Express app via Google OAuth and browse international oreo flavors."/>    
                    </a>
                    <a href="https://impasta-p3.herokuapp.com/">
                        <img className="img" id="impasta" src="https://i.imgur.com/GWZCaeG.png" alt="A group collaboration with 2 other developers! A recipe app for 'dupe recipes' of restaurant dishes. Made using Pythgon, Django, Mongoose, CSS, HTML, and Yelp API."/>
                    </a>
                </div>
                <img id="bevthedev" src="https://i.imgur.com/owmVnir.png" alt="Bev the Dev"/>
        </>
    )
}