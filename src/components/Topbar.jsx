import './Topbar.css'
import SettingsIcon from '@mui/icons-material/Settings';
import NotificationsIcon from '@mui/icons-material/Notifications';
import { Link } from 'react-router-dom';
import Cookies from 'universal-cookie'
import Home from './pages/Home';

export default function Topbar({username}) {

    const cookies = new Cookies();

    const handleClick = () => {
        console.log("me button")
        cookies.remove('authToken')
        cookies.remove('authType')
        window.location = "/"
    }

    return (
        <>
        <div className='topbar'>
            <div className="topbarLeft">
            <div className="topbarTitle">
                <span className="topbarTitleText">Welcome</span>
            </div>
            </div>
            <div className="topbarRight">
                <div className="topbarTitle">
                <span className="topbarTitleTextR">{username}</span>
                <button className="link2" onClick={() => handleClick()}>Logout</button>
            </div>
            </div>
        </div>
        </>
    )
}
