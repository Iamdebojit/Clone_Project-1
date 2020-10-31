import React from "react";
import "./Chat.css";
import { Avatar,IconButton } from '@material-ui/core';
import SearchOutlinedIcon from '@material-ui/icons/SearchOutlined';
import AttachFileOutlinedIcon from '@material-ui/icons/AttachFileOutlined';
import MoreVertOutlinedIcon from '@material-ui/icons/MoreVertOutlined';
import InsertEmoticonOutlinedIcon from '@material-ui/icons/InsertEmoticonOutlined';
import MicOutlinedIcon from '@material-ui/icons/MicOutlined';
function Chat(){
  return(
    <div className="chat">
    <div className="chat_header">
<Avatar />
<div className="chat_headerinfo">
<h3>Chat Name</h3>
<p>Last seen at...</p>
</div>
<div className="chat_headerRight">
<IconButton>
<SearchOutlinedIcon  />
</IconButton>

<IconButton>
<AttachFileOutlinedIcon />
</IconButton>

<IconButton>
<MoreVertOutlinedIcon />
</IconButton>
</div>
    </div>
    <div className="chat_body">
<p className="chat_message">
<span className="chat_name">Pepe</span>
This is a message
<span classname="chat_timestamp">
{new Date().toUTCString()}
</span>
</p>

<p className="chat_message chat_receiver">
<span className="chat_name">Pepe</span>
This is a message
<span classname="chat_timestamp">
{new Date().toUTCString()}
</span>
</p>

<p className="chat_message">
<span className="chat_name">Pepe</span>
This is a message
<span classname="chat_timestamp">
{new Date().toUTCString()}
</span>
</p>
<p className="chat_message">
<span className="chat_name">Pepe</span>
This is a message
<span classname="chat_timestamp">
{new Date().toUTCString()}
</span>
</p>
<p className="chat_message chat_receiver">
<span className="chat_name">Pepe</span>
This is a message
<span classname="chat_timestamp">
{new Date().toUTCString()}
</span>
</p>

<p className="chat_message">
<span className="chat_name">Pepe</span>
This is a message
<span classname="chat_timestamp">
{new Date().toUTCString()}
</span>
</p>

<p className="chat_message">
<span className="chat_name">Pepe</span>
This is a message
<span classname="chat_timestamp">
{new Date().toUTCString()}
</span>
</p>
<p className="chat_message chat_receiver">
<span className="chat_name">Pepe</span>
This is a message
<span classname="chat_timestamp">
{new Date().toUTCString()}
</span>
</p>
<p className="chat_message">
<span className="chat_name">Pepe</span>
This is a message
<span classname="chat_timestamp">
{new Date().toUTCString()}
</span>
</p>
<p className="chat_message chat_receiver">
<span className="chat_name">Pepe</span>
This is a message
<span classname="chat_timestamp">
{new Date().toUTCString()}
</span>
</p>
    </div>
    <div className="chat_footer">
    <IconButton>
    <InsertEmoticonOutlinedIcon />
    </IconButton>
    <form>
    <input placeholder="Type a message" type="text" />
<button type="submit">Send a message</button>
    </form>
    <IconButton>
    <MicOutlinedIcon />
    </IconButton>
    </div>
    </div>
  )

}

export default Chat;
