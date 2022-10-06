import './Resume.css';

export default function Resume() {
    return (
        <>
            <img id="resume" src="https://i.imgur.com/QexmGOM.png" alt="RESUME"/>
            <img id="resarrow" src="https://i.imgur.com/BBbEIzb.png" alt="arrow"/>
            <div className="cards">
                <div className="flip-card">
                    <div className="flip-card-inner">
                        <div className="flip-card-front" style={{backgroundImage: `url(https://i.imgur.com/2Ju9Llh.png)`}}/>
                        <div className="flip-card-back" style={{backgroundImage: `url(https://i.imgur.com/SRSV1nv.png)`}}>
                            <ul>
                                <li>Created full MERN Stack applications</li>
                                <li>Implemented full CRUD</li>
                                <li>Gained proficiency in JavaScript, Python, CSS, and HTML</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="flip-card">
                    <div className="flip-card-inner">
                        <div className="flip-card-front" style={{backgroundImage: `url(https://i.imgur.com/jgiPQMu.png)`}}/>
                        <div className="flip-card-back" style={{backgroundImage: `url(https://i.imgur.com/I9jPO9R.png)`}}>
                            <ul>
                                <li>Worked alongside Director to create program from the ground up.</li>
                                <li>Monitored students' academic, social, and emotional progress and recorded individual files.</li>
                                <li>Identified characteristics, needs, and abilities of each child through personal interaction and progress reports to optimize approaches.</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="flip-card">
                    <div className="flip-card-inner">
                        <div className="flip-card-front" style={{backgroundImage: `url(https://i.imgur.com/LqgbJdu.png)`}}/>
                        <div className="flip-card-back" style={{backgroundImage: `url(https://i.imgur.com/AHv77oG.png)`}}>
                            <ul>
                                <li>Delivered lesson plans, implemented school curriculum, and used data to create, monitor, and establish personalized learning plan for each student.</li>
                                <li>Supported students in achieving highest Math growth in school.</li>
                                <li>As grade level lead, mentored teachers to use various EdTech tools.</li>
                            </ul>                
                        </div>
                    </div>
                </div>
                <div className="flip-card">
                    <div className="flip-card-inner">
                        <div className="flip-card-front" style={{backgroundImage: `url(https://i.imgur.com/152gJsf.png)`}}/>
                        <div className="flip-card-back" style={{backgroundImage: `url(https://i.imgur.com/DNvwhi3.png)`}}>
                            <ul>
                                <li>Consulted with Director and site's Child Therapist to drive program efficiency.</li>
                                <li>Observed children to identify individuals in need of additional support and developed strategies to improve assistance.</li>
                            </ul>            
                        </div>
                    </div>
                </div>
            </div>  
        </>
    )
}