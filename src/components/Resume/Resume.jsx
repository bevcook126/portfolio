import './Resume.css';

export default function Resume() {
    return (
        <>
        <img id="resume" src="https://i.imgur.com/T6a0HbF.png" alt="RESUME"/>
        <div className="cards">
            <div className="resume-card" id="ga">
                <ul>
                    <li>Created full MERN Stack applications</li>
                    <li>Implemented full CRUD</li>
                    <li>Gained proficiency in JavaScript, Python, CSS, and HTML</li>
                    <li></li>
                </ul>
            </div>
            <div className="resume-card" id="knd">
                <ul>
                    <li>Worked alongside Director to create program from the ground up.</li>
                    <li>Monitored students' academic, social, and emotional progress and recorded individual files.</li>
                    <li>Identified characteristics, needs, and abilities of each child through personal interaction and progress reports to optimize approaches.</li>
                </ul>
            </div>
            <div className="resume-card" id="rfa">
                <ul>
                    <li>Delivered lesson plans, implemented school curriculum, and used data to create, monitor, and establish personalized learning plan for each student.</li>
                    <li>Supported students in achieving highest Math growth in school.</li>
                    <li>As grade level lead, mentored teachers to use various EdTech tools.</li>
                </ul>                
            </div>
            <div className="resume-card" id="cdrc">
                <ul>
                    <li>Consulted with Director and site's Child Therapist to drive program efficiency.</li>
                    <li>Observed children to identify individuals in need of additional support and developed strategies to improve assistance.</li>
                </ul>
            </div>
        </div>
        </>
    )
}