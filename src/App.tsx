import { useState } from 'react';
import './App.css';
import { FormJoin } from './components/Form';
import { HubConnection, HubConnectionBuilder, LogLevel } from '@microsoft/signalr';

function App() {
  const [connection, setConn] = useState<HubConnection>();

  const joinChatRoom = async (username: string, chatRoom: string) => {
    try {
      const conn = new HubConnectionBuilder()
        .withUrl('https://localhost:7163')
        .configureLogging(LogLevel.Information)
        .build();

      conn.on('JoinSpecificChatRoom', (userName: string, msg: string) => {
        console.log('msg: ', msg, 'userName: ', userName);
      });

      await conn.start();
      await conn.invoke('JoinSpecificationChatRoom', { username, chatRoom });

      setConn(conn);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <FormJoin connectionSignal={joinChatRoom} />
    </>
  );
}

export default App;
