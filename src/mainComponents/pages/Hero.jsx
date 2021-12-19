import './Hero.css'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import SendIcon from '@mui/icons-material/Send';
import {Link} from 'react-router-dom'

export default function hero({login}) {

    const inviteLink = () => {
        window.location = "https://discord.com/api/oauth2/authorize?client_id=862304613185093642&permissions=407689624640&scope=bot%20applications.commands"
    }

    const dashboardLink = () => {
        if (login === "Logout")
        {
            window.location = "/dashboard"
        }
        else if (login === "Login")
        {
            window.location = "https://discord.com/api/oauth2/authorize?client_id=862304613185093642&redirect_uri=http%3A%2F%2Flocalhost%3A3000&response_type=token&scope=identify%20guilds%20guilds.members.read"
        }
    }

    return (
        <div className='hero'>
            <div className="heroMainContainer">
                <div className="heroMainLeft">
                    <div className="mainLeftTextContainer">
                        <span className="mainLeftTitle">Welcome To</span>
                        <span className="mainLeftTitle">Nekie</span>
                        <span className="mainLeftText">Nekie is a multipurpose bot meant to suit all the needs to your server be it moderation giveaway music reddit and much more. Nekie comes with a fully customisable discord style Dashboard to make you feel at home. What are you waiting for? Hop on now!</span>
                        <div className="buttonContainer">
                            <div className="dashboardButtonContainer" onClick={() => dashboardLink()}>
                            <button className="dashboardButton">Try Now For Free</button>
                            <ArrowForwardIcon/>
                            </div>
                            <div className="inviteButtonContainer" onClick={() => inviteLink()}>
                            <button className='inviteButton'>Invite Now</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="heroMainRight">
                    <div className="mainRightImgContainer">
                        <img src="https://cdn.discordapp.com/attachments/851841691173781554/922016492659281940/unknown.png" alt="img" className="mainRightImg" />
                    </div>
                </div>
            </div>
        </div>
    )
}
