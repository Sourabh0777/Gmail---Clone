import React, { useEffect, useState } from 'react'
import "./EmailList.css"
import Section from './Section';
//Icons
import CheckBoxIcon from '@mui/icons-material/CheckBox';
import IndeterminateCheckBoxIcon from '@mui/icons-material/IndeterminateCheckBox';
import CheckBoxOutlineBlankIcon from '@mui/icons-material/CheckBoxOutlineBlank';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import RedoIcon from '@mui/icons-material/Redo';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import PrintIcon from '@mui/icons-material/Print';
import SettingsIcon from '@mui/icons-material/Settings';
import { Button, IconButton } from '@mui/material';
import InboxIcon from '@mui/icons-material/Inbox';
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
import LocalOfferIcon from '@mui/icons-material/LocalOffer';
import EmailRow from './EmailRow';
//Redux 
//Firebase
import { doc, onSnapshot, collection, documentId, getDoc, query, orderBy } from "firebase/firestore";
import { db } from './firebase';
//React Router

function EmailList() {
    const [emails, setEmails] = useState([]);
    useEffect(() => {
        const q = query(collection(db, 'emails'), orderBy('timestamp'));
        onSnapshot(q, (email) => {
            setEmails(email.docs.map(doc => (
                {
                    id: doc.id,
                    data: doc.data(),
                }
            )))
        })
    }, []);
    console.log(emails);


    return (
        <div className="emailList">
            <div className="emailList_settings">

                <div className="emailList_settingsLeft">
                    <IconButton><CheckBoxIcon /></IconButton>
                    <IconButton><ArrowDropDownIcon /></IconButton>
                    <IconButton><RedoIcon /></IconButton>
                    <IconButton><MoreVertIcon /></IconButton>
                </div>
                <div className="emailList_settingsRight">
                    <IconButton><KeyboardArrowLeftIcon /></IconButton>
                    <IconButton><KeyboardArrowRightIcon /></IconButton>
                    <IconButton><PrintIcon /></IconButton>
                    <IconButton><SettingsIcon /></IconButton>
                </div>
            </div>
            <div className="emailList_sections">
                <Section Icon={InboxIcon} title="Primary" color="red" selected />
                <Section Icon={PeopleAltIcon} title="Social" color="#1A73E8" />
                <Section Icon={LocalOfferIcon} title="Promotions" color="green" />
            </div>
            <div className="emailList_list">
                {emails.length>0 ?(emails.map(({ id, data: { to, subject, message, timestamp } }) => (
                    <EmailRow id={id}
                        key={id}
                        title={to}
                        subject={subject}
                        description={message}
                        time={new Date(timestamp?.seconds * 1000).toUTCString()}/>
                ))):((console.log("Not working")))}

            </div>
        </div>
    )
}

export default EmailList;