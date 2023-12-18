import { Middleware } from "@reduxjs/toolkit";
import * as signalR from "@microsoft/signalr";
import { dashboardActions } from "../features/dashboardSlice";
import { apiUrl } from "@/services/api";

const socketMiddleware: Middleware = (store) => (next) => (action) => {
  // if (!dashboardActions.startConnecting.match(action)) {
  //   return next(action);
  // }

  const connection = new signalR.HubConnectionBuilder()
    .withUrl(`${apiUrl}/socket/dashboard`)
    .configureLogging(signalR.LogLevel.Information)
    .build();
        
    connection.start();
    connection.on("ReceiveInitialData", (data) => {
      store.dispatch(dashboardActions.loadData(JSON.parse(data)));
    });

    connection.on("KeyCount", (data) => {
      store.dispatch(dashboardActions.loadKeyCount(data))
    })
  

  next(action);
};

export default socketMiddleware;
