import './Home.css'

export default function Home() {
    return (
        <div className='home'>
            <div className="homeContent">
            <div className="homeContentWrapper">
                <div className="homeContentDisplay">
                    <span className="contentTitle">No Of Guilds</span>
                    <span className="contentDetails">120 Guilds</span>
                </div>
                <div className="homeContentDisplay">
                <span className="contentTitle">No Of Managable Guilds</span>
                <span className="contentDetails">30 Guilds</span>
                </div>
                <div className="homeContentDisplay">
                <span className="contentTitle">No Of Unknown</span>
                <span className="contentDetails">150 Guilds</span>
                </div>
            </div>
            </div>
        </div>
    )
}
