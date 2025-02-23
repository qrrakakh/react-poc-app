import React, { useState, useEffect } from 'react';

import ChatAPI, { cb_arg, cb_func } from './ChatAPIMock.tsx';
import './styles/friend.status.css';

function useFriendStatus(friendID: number) {
  const [isOnline, setIsOnline] = useState<boolean>(false);

  useEffect(() => {
    function handleStatusChange(status: cb_arg) {
      setIsOnline(status.isOnline);
    }
    ChatAPI.subscribeToFriendStatus(friendID, handleStatusChange);
    // Specify how to clean up after this effect:
    return function cleanup() {
      ChatAPI.unsubscribeFromFriendStatus(friendID, handleStatusChange);
    };
  });

  return isOnline;

}

const EffectExample = (props) => {
  
  const isOnline = useFriendStatus(props.friend.id);

  if (isOnline === null) {
    return <>'Loading...'</>;
  }  else if (isOnline) {
    return (
      <>
          <span className="online-indicator"></span> 
          <span className="online-offline-text text-success"> Online</span>
      </>
    );
  } else {
    return (
      <>     
        <span className="offline-indicator"></span> 
        <span className="online-offline-text text-secondary"> Offline</span>
      </>    
    );
  }
}

export default EffectExample