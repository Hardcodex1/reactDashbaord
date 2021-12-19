import './Sidebar.css'
import HomeIcon from '@mui/icons-material/Home';
import AccountTreeIcon from '@mui/icons-material/AccountTree';
import KeyboardIcon from '@mui/icons-material/Keyboard';
import QuestionAnswerIcon from '@mui/icons-material/QuestionAnswer';
import Divider from '@mui/material/Divider';
import { Link } from 'react-router-dom';

export default function Sidebar({username,avatar}) {

    return (
        <div className='sidebar'>
            <div className="loginContainer">
                <img src={avatar} alt="" className="loginImg" />
               <a className='link' href='https://discord.com/api/oauth2/authorize?client_id=862304613185093642&redirect_uri=http%3A%2F%2Flocalhost%3A3000&response_type=token&scope=identify'>{username}</a>
            </div>
            <Divider />
           <div className="sidebarContents">
               <br className="lineBreak" />
               <ul className="sidebarOptions">
                   <li className="sidebarOptionsList">
                   <Link to="/" className='link'>
                    <div className="option">
                    <HomeIcon className='logo'/>
                   <span className="options">Home</span>
                   </div>
                   </Link>
                   <Link to="/guilds" className='link'>
                   <div className="option">
                    <AccountTreeIcon className='logo'/>
                   <span className="options">Guilds</span>
                   </div>
                   </Link>
                   <Link to="/commands" className='link'>
                   <div className="option">
                    <KeyboardIcon className='logo'/>
                   <span className="options">Commands</span>
                   </div>
                   </Link>
                   <Link to="/about" className='link'>
                   <div className="option">
                    <QuestionAnswerIcon className='logo'/>
                   <span className="options">About</span>
                   </div>
                   </Link>
                   </li>
               </ul>
           </div>
        </div>
    )
}
/*https://cdn.discordapp.com/avatars/849905403021361162/cbe6f261d00c2777e01a7b3340110e2b.webp?size=80*/