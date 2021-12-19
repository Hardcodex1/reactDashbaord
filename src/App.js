import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Cookies from 'universal-cookie';
import { useState } from 'react';
import Topbar from './mainComponents/topbar/Topbar';
import Sidebar from './mainComponents/sidebar/Sidebar';
import Home from './mainComponents/pages/Home';
import Servers from './mainComponents/pages/Guilds';
import axios from 'axios'
import Hero from './mainComponents/pages/Hero';

function App() {

  const cookies = new Cookies();
  const [username, setusername] = useState("Not Signed In!")
  const [pfp, setpfp] = useState("https://cdn.discordapp.com/attachments/858622987913920562/920247233104990209/Discord-logo.png")
  const [login,setLogin] = useState("Login")
  const [id,setid] = useState("Not Signed In!")
  const [guilds,setguilds] = useState([])

  window.onload = () => {

    let serverID = ""
    let serverGuilds = []

    let accessToken1 = cookies.get('authToken', { doNotParse: true })
    let tokenType1 = cookies.get('authType', { doNotParse: true })

    if (!accessToken1) {
      const fragment = new URLSearchParams(window.location.hash.slice(1));
      const [accessToken, tokenType] = [fragment.get('access_token'), fragment.get('token_type')];

      if (!accessToken) return;

      fetch('https://discord.com/api/users/@me/guilds', {
        headers: {
          authorization: `${tokenType} ${accessToken}`,
        },
      })
      .then (result => result.json())
      .then (response => {
        console.log(response)
        serverGuilds = response
      })

      fetch('https://discord.com/api/users/@me', {
        headers: {
          authorization: `${tokenType} ${accessToken}`,
        },
      })
        .then(result => result.json())
        .then(response => {
          const { username, discriminator,id } = response;
          console.log(response)
          setusername(username + "#" + discriminator);
          setpfp(`https://cdn.discordapp.com/avatars/${response.id}/${response.avatar}`)
          setLogin("Logout")
          setid(id)
          var today = new Date()
          var expire = new Date(today)
          expire.setDate(today.getDate() + 7)
          cookies.set('authToken', accessToken, {expires: expire})
          cookies.set('authType', tokenType, {expires: expire})
          serverID = id
        })
        .catch(console.error);

        setTimeout(function() {
          const guildsData = {
            guilds: serverGuilds,
            ID: serverID
          }
          axios.post(`https://server2.iamrf40.repl.co/guilds`, guildsData)
          .then(res => {
            console.log(res.data)
            setguilds(res.data)
          })
        },5000)

    }
    else if (accessToken1) {

      fetch('https://discord.com/api/users/@me/guilds', {
        headers: {
          authorization: `${tokenType1} ${accessToken1}`,
        },
      })
      .then (result => result.json())
      .then (response => {
        console.log(response)
        serverGuilds = response
      })

      fetch('https://discord.com/api/users/@me', {
        headers: {
          authorization: `${tokenType1} ${accessToken1}`,
        },
      })
        .then(result => result.json())
        .then(response => {
          const { username, discriminator,id } = response;
          console.log(response)
          setusername(username + "#" + discriminator);
          setLogin("Logout")
          setid(id)
          serverID = id
          setpfp(`https://cdn.discordapp.com/avatars/${response.id}/${response.avatar}`)
          var today = new Date()
          var expire = new Date(today)
          expire.setDate(today.getDate() + 7)
          cookies.set('authToken', accessToken1, {expires: expire})
          cookies.set('authType', tokenType1, {expires: expire})
        })
        .catch(console.error);
        
        setTimeout(function() {
          const guildsData = {
            guilds: serverGuilds,
            ID: serverID
          }
          axios.post(`https://server2.iamrf40.repl.co/guilds`, guildsData)
          .then(res => {
            console.log(res.data)
            setguilds(res.data)
          })
        },5000)
    }
  }

  return (
    <Router>
      <Topbar username={username} login={login} avatar={pfp} />
      <div className="container">
        <Routes>
          <Route path="/" exact element={<Hero login={login} />} />
          <Route path="/dashboard" element={<><Sidebar username={username} avatar={pfp} /> <Home login={login} ID={id} guilds={guilds} avatar={pfp} username={username}/> </>} />
          <Route path="servers/" element={<Servers guilds={guilds} username={username} />}  />
          <Route path="servers/:id" element={<Servers guilds={guilds} username={username} />}  />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
