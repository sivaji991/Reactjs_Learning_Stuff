import { useEffect, useRef } from "react";
import  ChatMessage from "./ChatMessage";

import './ChatMessages.css';

function ChatMessages( { chatMessages } ){

        const chatMessagesRef = useRef(null);

          useEffect(()=>{
          const containerElem = chatMessagesRef.current
          if(containerElem){
            containerElem.scrollTop = containerElem.scrollHeight
          }
        }, [chatMessages]);
        /*React will run this function -
            -after component is created
            -every time th component is updated
            */
       
      return(
        <div className = 'chat-messages-container'
            ref = {chatMessagesRef}>
          {chatMessages.map((chatMess)=>{
            return(
              <ChatMessage 
                message = {chatMess.message}
                sender = {chatMess.sender}
                key = {chatMess.id}
                time={chatMess.time}
              />
            )
          })}
        </div>
      );
}

export default ChatMessages;