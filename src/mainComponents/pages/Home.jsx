import './Home.css'
import AccountTreeIcon from '@mui/icons-material/AccountTree';
import PersonIcon from '@mui/icons-material/Person';
import Grid3x3Icon from '@mui/icons-material/Grid3x3';

export default function Home({username,avatar,guilds, ID, login}) {
    return (
        <div className='home'>
            <div className="homeContent">
                <div className="homeWidgets">
                    <div className="homeWidgetCard">
                       <span className="homeCardTitle">Number Of Guilds</span>
                       <span className="homeCardCount">{guilds.length}</span>
                    </div>
                    <div className="homeWidgetCard">
                       <span className="homeCardTitle">Number Of Managable Guilds</span>
                       <span className="homeCardCount">15</span>
                    </div>
                    <div className="homeWidgetCard">
                       <span className="homeCardTitle">Number Of Invitable Guilds</span>
                       <span className="homeCardCount">10</span>
                    </div>
                </div>
                <div className="homeWelcomeScreen">
                    <div className="screenMainWrapper">
                    <span className="screenTitle">User Infomation:</span>
                        <div className="screenLeft">
                            <img src={avatar} alt="pfp" className="leftScreenImg" />
                        </div>
                        <div className="screenRight">
                            <div className="detailContainer">
                                <PersonIcon className='detailIcon' />:
                            <span className="rightScreenText">{username}</span>
                            </div>
                            <div className="detailContainer">
                                <Grid3x3Icon className='detailIcon' />:
                            <span className="rightScreenText">{ID}</span>
                            </div>
                            <div className="detailContainer">
                                <AccountTreeIcon className='detailIcon' />:
                            <span className="rightScreenText">{guilds.length}</span>
                            </div>
                        </div>              
                    </div>
                </div>
            </div>
        </div>
    )
}
