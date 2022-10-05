import './Resume.css';

export default function Resume() {
    return (
        <>
        <h1 id="resume">RESUME</h1>
        <div className="cards">
            <div className="resume-card" id="ga">
                <h3>Software Engineering Fellow - General Assembly, Remote</h3>
                <ul>
                    <li>Created full MERN Stack applications</li>
                    <li>Implemented full CRUD</li>
                    <li>Gained proficiency in JavaScript, Python, CSS, and HTML</li>
                </ul>
            </div>
            <div className="resume-card" id="knd">
              <h3>K/TK Teacher - Kids N' Dance N' Theater Arts, Oakland CA</h3>
                <ul>
                    <li>Worked alongside Director to create program from the ground up.</li>
                    <li>Monitored students' academic, social, and emotional progress and recorded individual files.</li>
                    <li>Identified characteristics, needs, and abilities of each child through personal interaction and progress reports to optimize approaches.</li>
                </ul>
            </div>
            <div className="resume-card" id="rfa">
                <h3>K/1 Teacher - Rocketship Public Schools, Concord CA</h3>
                <ul>
                    <li>Delivered lesson plans, implemented school curriculum, and used data to create, monitor, and establish personalized learning plan for each student.</li>
                    <li>Supported students in achieving highest Math growth in school.</li>
                    <li>As grade level lead, mentored other teachers to use various EdTech tools such as Nearpod, Peardeck, Quizizz, and GoGuardian.</li>
                </ul>                
            </div>
            <div className="resume-card" id="cdrc">
                <h3>Teacher/Site Supervisor - Child Development Resource Center, San Luis Obispo CA</h3>
                <ul>
                    <li>Consulted with Director and site's Child Therapist to drive program efficiency.</li>
                    <li>Observed children to identify individuals in need of additional support and developed strategies to improve assistance.</li>
                    <li>Maintained well-controlled classrooms by clearly outlining standards and reinforcing positive behaviors.</li>
                </ul>
            </div>
        </div>
        </>
    )
}