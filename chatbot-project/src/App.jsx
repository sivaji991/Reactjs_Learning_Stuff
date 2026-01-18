import { useEffect, useState } from 'react';

import './App.css'

import ChatInput  from './components/ChatInput.jsx';

import  ChatMessages  from './components/ChatMessages.jsx';

function App(){

        const [chatMessages, setChatMessages] = useState( JSON.parse(localStorage.getItem('messages')) || []);

        // const [chatMessages, setChatMessages] = React.useState([{
        //   message:'hello chatbot',
        //   sender:'user',
        //   id:'1'
        // },
        // {
        //   message:'Hello! How can I help you?',
        //   sender:'robot',
        //   id:'2'
        // },
        // {
        //   message:'todays date',
        //   sender:'user',
        //   id:'3'
        // },
        // {
        //   message:'Today is December 27',
        //   sender:'robot',
        //   id:'4'
        // }]);



        //const chatMessages = array[0];    //The current data
        //const setChatMessages = array[1];   //The Updater function

        //const [chatMessages, setChatMessages] =array;   //Array Destructuring

        

        /*State = data that is connected to the HTML,
          When we update this data, it will update the HTML.
        */
       useEffect(() => {
          localStorage.setItem('messages', JSON.stringify(chatMessages));
        }, [chatMessages]);

        return(
          <div className='app-container'>
            {chatMessages.length ===0 && (
              <p className='welcome-container'>Welcome to the Chatbot Project! Send a message using the textbox below.</p>
            )}
            <ChatMessages 
              chatMessages = {chatMessages}
            />
            <ChatInput 
              chatMessages = {chatMessages}
              setChatMessages = {setChatMessages}
            />
        </div>
        )
      }

export default App
