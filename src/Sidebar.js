import { Button } from "@mui/material";
import React from "react";
import "./Sidebar.css";
import CreateIcon from "@mui/icons-material/Create";
import SidebarOption from "./SidebarOption";
import InboxIcon from "@mui/icons-material/Inbox";
import StarBorderIcon from "@mui/icons-material/StarBorder";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import LabelImportantIcon from "@mui/icons-material/LabelImportant";
import SendIcon from "@mui/icons-material/Send";
import InsertDriveFileIcon from "@mui/icons-material/InsertDriveFile";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { useDispatch } from "react-redux";
import { openSendMessage } from "./features/mailSlice";

function Sidebar() {
  const dispatch = useDispatch();
  return (
    <div className="sidebar">
      <Button
        color="inherit"
        startIcon={<CreateIcon fontsize="large" />}
        className="sidebar__compose"
        onClick={() => dispatch(openSendMessage())}
      >
        compose
      </Button>
      <SidebarOption
        Icon={InboxIcon}
        title="Inbox"
        number={26}
        selected={true}
      />
      <SidebarOption Icon={StarBorderIcon} title="Starred" number={26} />
      <SidebarOption Icon={AccessTimeIcon} title="Snoozed" number={26} />
      <SidebarOption Icon={LabelImportantIcon} title="Important" number={26} />
      <SidebarOption Icon={SendIcon} title="Sent" number={26} />
      <SidebarOption Icon={InsertDriveFileIcon} title="Drafts" number={26} />
      <SidebarOption Icon={ExpandMoreIcon} title="More" number={26} />
    </div>
  );
}

export default Sidebar;
