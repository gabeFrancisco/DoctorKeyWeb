import { Middleware } from "@reduxjs/toolkit";
import * as signalR from "@microsoft/signalr";
import { dashboardActions } from "../features/dashboardSlice";

const socketMiddleware: Middleware = (store) => (next) => (action) => {
  // if (!dashboardActions.startConnecting.match(action)) {
  //   return next(action);
  // }

  const connection = new signalR.HubConnectionBuilder()
    .withUrl("http://10.0.10.250:5003/socket/dashboard")
    .configureLogging(signalR.LogLevel.Information)
    .build();

  if (dashboardActions.startConnecting.match(action)) {
    
    connection.start();
    connection.on("ReceiveInitialData", (data) => {
      store.dispatch(dashboardActions.loadData(JSON.parse(data)));
      console.log(data)
    });
  }

  next(action);
};

export default socketMiddleware;
