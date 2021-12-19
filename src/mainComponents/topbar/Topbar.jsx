import './Topbar.css'
import {Home, Settings, CircleNotifications, Edit} from '@mui/icons-material'
import { Link } from 'react-router-dom'
import Dropdown from '../pages/Dropdown'
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';

export default function Topbar({username, login, avatar}) {

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
        <div className='topbar'>
            <div className="topbarLeft">
                <img src="https://cdn.discordapp.com/avatars/862304613185093642/d54c28e957fc1e09a23b6d33ade8409b.png?size=256" alt="" className="topbarLogo" />
                <span className="topbarTitle">Nekie</span>
                <div className="leftdashboardButton" onClick={() => dashboardLink() }>
                    <Edit />
                    <button className="leftButton">Dashboard</button>
                </div>
            </div>
            <div className="topbarCenter">
            <Link to="/" className="linkRegular">
                <div className="topbarIcons">
                    <button className="topbarButton">{<Home/>}</button>
                </div>
            </Link>
                <div className="topbarIcons">
                    <button className="topbarButton" onClick={()=> dashboardLink()}>{<Edit />}</button>
                </div>
            <Link to="/notifications" className="linkRegular">
                <div className="topbarIcons">
                    <button className="topbarButton">{<CircleNotifications/>}</button>
                </div>
            </Link>
            </div>
            <div className="topbarRight">
            <div className="topbarUser">
                <img src={avatar} alt="" className="topbarUserImg" />
                <Dropdown username={username} login={login} />
                <ArrowDropDownIcon />
            </div>
            </div>
        </div>
    )
}
