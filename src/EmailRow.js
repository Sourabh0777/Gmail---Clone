import React from 'react';
import "./EmailRow.css"; 
//Icons
import CheckBoxIcon from '@mui/icons-material/CheckBox';
import StarBorderIcon from '@mui/icons-material/StarBorder';
import LabelImportantIcon from '@mui/icons-material/LabelImportant';
import { Button, IconButton } from '@mui/material';
//Redux 
import { useDispatch } from 'react-redux';
import { selectMail } from './features/mailSlice';
//Firebase
//React Router
import { useHistory } from 'react-router-dom';


function EmailRow({ id, title, subject, description, time }) {
  const history= useHistory()
  const dispatch = useDispatch();

  const openMail = ()=> {dispatch(selectMail({id, title, subject, description, time}));
  history.push("/mail")
};

  return (
    <div onClick={openMail} className='emailRow'>
      <div className="emailRow_options">
        <IconButton><CheckBoxIcon /></IconButton>
        <IconButton><StarBorderIcon /></IconButton>
        <IconButton><LabelImportantIcon /></IconButton>
      </div>
      <div className="emailRow_title">{title}</div>
      <div className="emailRow_message">
        <h4>
          {subject}{" "}
          <span className="emailRow_Description">{description}</span>
        </h4>
      </div>
      <div className="emailRow_time">{time}</div>

    </div>
  )
}

export default EmailRow;