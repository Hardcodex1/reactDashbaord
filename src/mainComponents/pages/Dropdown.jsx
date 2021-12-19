import * as React from 'react';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Cookies from 'universal-cookie'

export default function Dropdown({username,login}) {

    const cookies = new Cookies()

    const Login = () => {
        window.location = "https://discord.com/api/oauth2/authorize?client_id=862304613185093642&redirect_uri=http%3A%2F%2Flocalhost%3A3000&response_type=token&scope=identify%20guilds%20guilds.members.read"
    }

    const Logout = () => {
        cookies.remove("authToken")
        cookies.remove("authType")
        window.location = "/"
    }

  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <Button
        id="basic-button"
        aria-controls="basic-menu"
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
      >
        {username}
      </Button>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
      >
        <MenuItem onClick={() => {login === "Login" ? Login() : Logout()}} className='linkBlack'>{login}</MenuItem>
      </Menu>
    </div>
  );
}