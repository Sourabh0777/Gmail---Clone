import React from 'react'
import "./Header.css"

// Icons
import MenuIcon from '@mui/icons-material/Menu';
import AppsIcon from '@mui/icons-material/Apps';
import SearchIcon from '@mui/icons-material/Search';
import {Avatar, IconButton } from '@mui/material';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import NotificationsIcon from '@mui/icons-material/Notifications';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
//Redux 

//Firebase

function Header() {
    return (
        <div className='header'>
            <div className='header_left'>
                <IconButton>
                    <MenuIcon />
                </IconButton>
                <img src="https://www.vectorlogo.zone/logos/gmail/gmail-ar21.svg" alt="" />
            </div>

            <div className='header_center'>
                <SearchIcon />
                <input type="search" placeholder='Search' />
                <ArrowDropDownIcon />
            </div>

            <div className='header_right'>
                <IconButton>
                    <AppsIcon />
                </IconButton>
                <IconButton>
                    <NotificationsIcon />
                </IconButton>
                <IconButton>
                    <Avatar  />
                </IconButton>

            </div>
        </div>
    )
}

export default Header