import React from 'react'
import "./Sidebar.css"
import SidebarOptions from './SidebarOptions';
// Icons
import AddIcon from '@mui/icons-material/Add';
import InboxIcon from '@mui/icons-material/Inbox';
import StarIcon from '@mui/icons-material/Star';
import QueryBuilderIcon from '@mui/icons-material/QueryBuilder';
import LabelImportantIcon from '@mui/icons-material/LabelImportant';
import SendIcon from '@mui/icons-material/Send';
import DraftsIcon from '@mui/icons-material/Drafts';
import { Button, IconButton } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import PersonIcon from '@mui/icons-material/Person';
import DuoIcon from '@mui/icons-material/Duo';
import PhoneIcon from '@mui/icons-material/Phone';
//Redux 
import { useDispatch } from 'react-redux';
import { openSendMessage } from './features/mailSlice';

//Firebase

function Sidebar() {
    const dispatch =useDispatch();
    return (
        <div className='sidebar'>
            <div>
                <Button 
                startIcon={<AddIcon />} 
                className='sidebar_compose'
                onClick={()=>dispatch(openSendMessage())}
                > Compose</Button>
            </div>

            <SidebarOptions
                Icon={InboxIcon}
                text="Inbox"
                number="52"
            />
            <SidebarOptions
                Icon={StarIcon}
                text="Starred"
                number="2"
            />
            <SidebarOptions
                Icon={QueryBuilderIcon}
                text="Snoozed"
                number="1"
            />
            <SidebarOptions
                Icon={LabelImportantIcon}
                text="Important"
                number="8"
            />
            <SidebarOptions
                Icon={SendIcon}
                text="Sent"
                number="15"
            />
            <SidebarOptions
                Icon={DraftsIcon}
                text="Draft"
                number="0"
            />
            <SidebarOptions
                Icon={ExpandMoreIcon}
                text="More"
                number=""
            />
            <div className="sidebar_footer">
                <IconButton><PersonIcon /></IconButton>
                <IconButton><DuoIcon /></IconButton>
                <IconButton><PhoneIcon /></IconButton>
            </div>
        </div>
    )
}

export default Sidebar