import './Guilds.css'
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import { Link } from 'react-router-dom'
import { useState } from 'react'
import getData from './data'
import axios from 'axios'
import Alert from '@mui/material/Alert';
import Stack from '@mui/material/Stack';

export default function Guilds({ guilds, username }) {

    const settingData =
        [
            {
                name: "nickname",
                title: "Change Nickname",
                type: "input",
                placeholder: "enter username",
                page: "General"
            },
            {
                name: "password",
                title: "Change Password",
                type: "input",
                placeholder: "enter password",
                page: "moderation"
            },
            {
                name: "currency",
                title: "Change Currency",
                type: "input",
                placeholder: "enter symbol",
                page: "General"
            },
        ]


    const [data, setData] = useState({})
    const [location, setLocation] = useState("Home")
    const [sidebar, setSidebar] = useState(false)
    const [action,setAction] = useState(false)

    const settingsCatagories =
        [
            {
                name: "General"
            },
            {
                name: "moderation"
            },
            {
                name: "levels"
            },
            {
                name: "giveaway"
            }
        ]


    const handleInput = (e) => {
        let name = e.target.name
        let value = e.target.value

        setData({
            ...data,
            [name]: value
        })
    }

    const dataSubmit = async () => {
        var split1 = window.location.href.split("#")
        var split2 = split1[0].split("/")
        const postData = {
            nickname: data.nickname,
            password: data.password,
            currency: data.currency,
            ID: split2[4]
        }
        axios.post("https://ServerMain.iamrf40.repl.co/test/update", postData)
        console.log("data updated")
        console.log(postData)
        setAction(true)
    }

    const changeLocation = async (name) => {
        setLocation(name)
        var split1 = window.location.href.split("#")
        var split2 = split1[0].split("/")
        var data1 = await getData(split2[4])
        setData(data1)
    }

    return (
        <div className='guild'>
            <div className="guildContentWrapper">
                <div className="guildContentTitle">
                    <span className="contentTitle">Managable Servers</span>
                </div>
                <div className="guildServerContainer">
                    <div className="guildServerLeft">
                        <img src='https://cdn.discordapp.com/attachments/858622987913920562/920247233104990209/Discord-logo.png' alt='pfp' onClick={()=> {setSidebar(false); setLocation("Home")}} className='serverSidebarIconsBox' />
                        <br />
                        {guilds.map(guild => <Link to={`/servers/${guild.id}`} className="linkRegular"><img src={guild.avatar} alt='pfp' onClick={() => {setSidebar(true); setLocation("Home")}} className='serverSidebarIcons' /> </Link>)}
                    </div>
                    <div className="guildServerCenter">
                        <div className="serverCenterHeading">
                            <header className="centerTitle">Nekie</header>
                            <ArrowDropDownIcon className="centerIcon" />
                        </div>
                        <div className='serverCenterDetails'>
                            {sidebar ? <div className="centerContainer">
                                <span className="centerDetails">members-1000</span>
                            </div> : null}
                        </div>
                        <div className="serverCenterSettings">
                            <div className="centerSettingsWrapper">
                                {settingsCatagories.map(catagory =>
                                    sidebar ? <Link to={`#${catagory.name}`} className='linkRegular'>
                                        <div className="centerSettingsContainer" onClick={() => changeLocation(catagory.name)}>
                                            <span className="centerSettings">{catagory.name}</span>
                                        </div> </Link> : null
                                )
                                }
                            </div>
                        </div>
                    </div>
                    <div className="guildServerRight">
                        <div className="serverRightHeading">
                            <header className="rightTitle">Nekie</header>
                            {action ? <Stack sx={{ width: '100%' }} spacing={2}>
                                <Alert onClose={() => {setAction(false)}}>All Changes Made Successfully</Alert>
                            </Stack> : null}
                            {sidebar ? <button onClick={() => dataSubmit()} className="submitButton">Save Changes</button> : null}
                        </div>
                        <div className="serverRightContentContainer">
                            <div className="serverRightContentTitle">
                                <span className="serverRightContentTitleText">{location}</span>
                            </div>
                            <div className="serverRightContentWrapper">
                                {
                                    settingData.map(({ placeholder, type, name, page, title }) =>
                                        location === page ? <div className="rightFunctionContainer">
                                            <div className="functionTitle">
                                                <span className="functionTitleText">{title}</span>
                                            </div>
                                            {type === "input" ? <input className="functionInput" name={name} value={data[name]} onChange={handleInput} placeholder={placeholder} /> : <button>Hi</button>}
                                        </div> : null
                                    )
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

/* <div className="guildTableWrapper">
                    <table className='guildTable'>
                        <tr>
                            <th>Server Name:</th>
                            <th>Member Count:</th>
                            <th>Actions:</th>
                        </tr>
                        
                        {guilds.map(guild => <tr><td key={guild.count}>{guild.name}</td><td>{guild.count}</td><td>{guild.type}</td></tr>)}
                        
                    </table>
                </div> */
