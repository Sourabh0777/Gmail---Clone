import React from 'react'
import "./Mail.css";
//Icons
import { Avatar, IconButton } from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import MoveToInboxIcon from '@mui/icons-material/MoveToInbox';
import ReportGmailerrorredIcon from '@mui/icons-material/ReportGmailerrorred';
import DeleteIcon from '@mui/icons-material/Delete';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import AddTaskIcon from '@mui/icons-material/AddTask';
import LabelImportantIcon from '@mui/icons-material/LabelImportant';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import UnfoldMoreIcon from '@mui/icons-material/UnfoldMore';
import PrintIcon from '@mui/icons-material/Print';
import OpenInNewIcon from '@mui/icons-material/OpenInNew';
import { useSelector } from 'react-redux';
import { selectOpenMail } from './features/mailSlice';
//Redux 
//Firebase
//React Router


function Mail() {
  const selectedMail = useSelector(selectOpenMail);
  console.log(selectedMail);
  return (
    <div className='mail'>
      <div className="mail_tools">
        <div className="mail_toolLeft">
          <IconButton><ArrowBackIcon /></IconButton>
          <IconButton><MoveToInboxIcon /></IconButton>
          <IconButton><ReportGmailerrorredIcon /></IconButton>
          <IconButton><DeleteIcon /></IconButton>
          <IconButton><AccessTimeIcon /></IconButton>
          <IconButton><AddTaskIcon /></IconButton>
          <IconButton><LabelImportantIcon /></IconButton>
          <IconButton><MoreVertIcon /></IconButton>

        </div>
        <div className="mail_toolRight">
          <IconButton><UnfoldMoreIcon /></IconButton>
          <IconButton><PrintIcon /></IconButton>
          <IconButton><OpenInNewIcon /></IconButton>
        </div>
      </div>
      <div className="mail_body">
        <div className="mail_bodyHeader">
          <h2>{selectedMail?.subject}</h2>
          <LabelImportantIcon className='mail_important' />
          <p>{selectedMail?.title}</p>
          <p className='mail_time'>{selectedMail?.time}</p>
        </div>
        <div className="mail_message">
          <p>{selectedMail?.description}</p>
        </div>
      </div>
    </div>
  )
}

export default Mail