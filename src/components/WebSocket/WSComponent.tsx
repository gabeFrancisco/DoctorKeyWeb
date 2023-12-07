'use client'

import React, { useEffect } from 'react'
import useWebSocket, { ReadyState } from 'react-use-websocket';

interface Props{
  children: JSX.Element | JSX.Element[]
}

const WSComponent = (props: Props) => {
  const ws_url = "ws://10.0.10.250:5003/api/sockets";
  const { sendJsonMessage, lastMessage, readyState } = useWebSocket(ws_url, {
    share: false,
    shouldReconnect: () => true,
    heartbeat: true,
  });

  useEffect(() => {
    console.log("Connection state changed!");
    if (readyState === ReadyState.OPEN) {
      sendJsonMessage({
        event: "subscribe",
        data: {
          channel: "dashboard-socket",
        },
      });
    }
  }, [readyState]);

  useEffect(() => {
    console.log(`Got a new message: ${lastMessage?.data}`);
  }, [lastMessage]);
  return (
    <div>{props.children}</div>
  )
}

export default WSComponent