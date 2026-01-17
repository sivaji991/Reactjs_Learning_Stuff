import { useState } from 'react';
import LoadingSpinnerImage from '../assets/loading-spinner.gif';
import { Chatbot } from 'supersimpledev';
import './ChatInput.css';

function ChatInput( { chatMessages,setChatMessages } ){
        const [inputText, setInputText ] = useState('');
        const [isLoading,setIsLoading] = useState(false);
        function saveInputText(event){
          setInputText(event.target.value);
        }
        async function  sendMessage(){  
          if(isLoading || inputText ===''){
            return;
            
          }

          // Set isLoading to true at the start, and set it to
          // false after everything is done.
          setIsLoading(true);

          // We can put this at the top of the function or
          // after the first setChatMessages(). Both work.
          setInputText('');


          //Here we have done "Lifting the State UP" means , Share state between multiple components , to access the "setChatMessages" in this 'ChatInput' component from the 'ChatMessages' component
          const newChatMessages = [
            ...chatMessages,
            {
              message:inputText,
              sender:'user',
              id: crypto.randomUUID()
            }
          ]
          setChatMessages(newChatMessages);

                setChatMessages([
                  ...newChatMessages,
                  // This creates a temporary Loading... message.
                  // Because we don't save this message in newChatMessages,
                  // it will be remove later, when we add the response.
                  {
                    message: <img className='spinner' src={LoadingSpinnerImage}/>,
                    sender: 'robot',
                    id: crypto.randomUUID()
                  }
                ]);

          
          const response = await Chatbot.getResponseAsync(inputText);
          setChatMessages([
            ...newChatMessages,
            {
              message:response,
              sender:'robot',
              id: crypto.randomUUID()
            }
          ]);

          setIsLoading(false);
          
          // setInputText('')
        }
        //State does not update immediately , 
        //State is updated after all of the code is finished

        //Using the 'value' property we controlle the Input like in the following

        function enterKeyFunc(event){
          if(event.key === 'Enter'){
            // console.log('entered');
            sendMessage();
          }else if(event.key === 'Escape'){
            setInputText('')
          }
        }
        return(
          <div className = 'chat-input-container'>
            <input
              className = 'chat-input'
              placeholder="Send a message to chatbot" size="30"
              onChange={saveInputText}
              onKeyDown={enterKeyFunc}
              value = {inputText}
            />
            <button
              className = 'send-button'
              onClick={sendMessage}
            >Send</button>
          </div>
        )
      }

      export default ChatInput;