import './Sidebar.css'
import {Link} from 'react-router-dom'
import HomeIcon from '@mui/icons-material/Home';
import AccountTreeIcon from '@mui/icons-material/AccountTree';
import KeyboardIcon from '@mui/icons-material/Keyboard';
import QuestionAnswerIcon from '@mui/icons-material/QuestionAnswer';

export default function Sidebar({username,avatar}) {
    return (
        <div className='sidebar'>
            <div className="sidebarLogin">
                <img src={avatar} alt="user pfp" className="sidebarImg" />
                <button className="sidebarLoginTitle">{username}</button>
            </div>
            <br/>
            <div className="sidebarContents">
                <ul className="sidebarList">
                    <Link to="/" className="linkRegular">
                    <li className="sidebarListItems">
                        <HomeIcon className='sidebarListIcons' />
                        <span className="sidebarOptions">Home</span>
                    </li>
                    </Link>
                    <Link to="/servers" className="linkRegular">
                    <li className="sidebarListItems">
                        <AccountTreeIcon className='sidebarListIcons' />
                        <span className="sidebarOptions">Servers</span>
                    </li>
                    </Link>
                    <br />
                    <Link to="/commands" className="linkRegular">
                    <li className="sidebarListItems">
                        <KeyboardIcon className='sidebarListIcons' />
                        <span className="sidebarOptions">Commands</span>
                    </li>
                    </Link>
                    <Link to="/about" className="linkRegular">
                    <li className="sidebarListItems">
                        <QuestionAnswerIcon className='sidebarListIcons' />
                        <span className="sidebarOptions">About</span>
                    </li>
                    </Link>
                </ul>
            </div>
        </div>
    )
}
