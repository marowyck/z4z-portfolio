import '../experiences/Experiences.css';

export default function Experiences() {
    return (
        <div className='experiences' id='experiences'>
            <h1>EXPERIENCES</h1>
            <div className="timelineContainer">
                <div className="timelineItem left">
                    <div className="content">
                        <h3>The Wave Story</h3>
                        <p>04/2021</p>
                    </div>
                    <span className="circle"></span>
                </div>

                <div className="timelineItem right">
                    <span className="circle"></span>
                    <div className="content">
                        <h3>Z4Z</h3>
                        <p>2020.1 – 2024.2</p>
                    </div>
                </div>

                <div className="timelineItem left">
                    <div className="content">
                        <h3>Hey Brother</h3>
                        <p>03/2022</p>
                    </div>
                    <span className="circle"></span>
                </div>

                <div className="timelineItem left">
                    <div className="content">
                        <h3>Roll Your Life</h3>
                        <p>07/2022</p>
                    </div>
                    <span className="circle"></span>
                </div>
            </div>
        </div>
    );
}
