import RobotProfileImage from '../assets/robot.png';
import UserProfileImage from '../assets/user.png';
import dayjs from 'dayjs';

import './ChatMessage.css';


function ChatMessage({ message, sender, time }){
        // const message = props.message;
        // const sender = props.sender;
        // const { message, sender } = props;

        /*  if (sender === 'robot') {
          return (
            <div>
              <img src="/new/robot.png" alt="user" width="45"/>
              {message}
            </div>
          );
        }   */

        return(
          <div className={
            sender ==='user'
              ? 'chat-message-user' 
              : 'chat-message-robot'
          }>
            {
              sender === 'robot' && (
              <img src={RobotProfileImage} 
              className = 'chat-message-profile'
              />
            )}
            <div className='chat-message-text'>
              {message}
               {/* The "time && (" check is optional. I added it just to be safe. */}
        {time && (
          <div className='chat-message-time'>
            {dayjs(time).format('h:mma')}
          </div>
        )}
              </div>
            {
              sender === 'user' && (
              <img src={UserProfileImage} 
              className = 'chat-message-profile'
              />
            )}
          </div>
        )
      }

export default ChatMessage;
