import { Avatar } from '@material-ui/core';
import React from "react";
import './SidebarChat.css';

function SidebarChat(){
  return <div className="sidebarChat">
<Avatar />
<div className="sidebarChat_info">
  <h2>Chat Name</h2>
  <p>How are you?</p>

</div>
  </div>;

}
export default SidebarChat;
