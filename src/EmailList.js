import React, { useEffect, useState } from 'react'
import './EmailList.css'
import { Checkbox } from '@mui/material';
import { IconButton } from "@mui/material";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import RedoIcon from "@mui/icons-material/Redo";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import NavigateBeforeIcon from "@mui/icons-material/NavigateBefore";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import InboxIcon from "@mui/icons-material/Inbox";
import LocalOfferIcon from "@mui/icons-material/LocalOffer";
import PeopleAltIcon from "@mui/icons-material/PeopleAlt";
import Section from './Section';
import EmailRow from './EmailRow';
import { db } from './firebase';

function EmailList() {
  const [emails, setEmails] = useState([]);

  useEffect (()=> {
    db.collection("emails").orderBy("timestamp", "desc").onSnapshot((snapshot)=> setEmails(
      snapshot.docs.map((doc) => ({
        id: doc.id,
        data: doc.data(),
      })) 
    ))
  },[])
  return (
    <div className="emailList">
      <div className="emailList__settings">
        <div className="emaiList__settingsLeft">
          <Checkbox />
          <IconButton>
            <ArrowDropDownIcon />
          </IconButton>
          <IconButton>
            <RedoIcon />
          </IconButton>
          <IconButton>
            <MoreVertIcon />
          </IconButton>
        </div>
        <div className="emailList__settingsRight">
          <IconButton>
            <NavigateBeforeIcon />
          </IconButton>
          <IconButton>
            <NavigateNextIcon />
          </IconButton>
        </div>
      </div>
      <div className="emailList__sections">
        <Section Icon={InboxIcon} title="Primary" color="#0b57d0" selected />
        <Section Icon={LocalOfferIcon} title="Promotions" color="gray" />
        <Section Icon={PeopleAltIcon} title="Social" color="gray" />
      </div>
      <div className="emailList__list">
        {emails.map(({id, data: {to, subject, message, timestamp
        }})=>(
          <EmailRow 
          id={id}
          key={id}
          title = {to}
          subject = {subject}
          description = {message} 
          time = {new Date(timestamp?.seconds * 1000).toUTCString()}
          />
        ))}
      </div>
    </div>
  );
}

export default EmailList
