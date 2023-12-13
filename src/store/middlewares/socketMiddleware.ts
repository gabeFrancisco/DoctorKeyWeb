import { Middleware } from "@reduxjs/toolkit";
import * as signalR from "@microsoft/signalr";
import { dashboardActions } from "../features/dashboardSlice";

const socketMiddleware: Middleware = (store) => (next) => (action) => {
  const connection = new signalR.HubConnectionBuilder()
    .withUrl("http://10.0.10.250:5003/socket/dashboard")
    .configureLogging(signalR.LogLevel.Information)
    .build();

  connection
    .start()
    .then(() => {
      connection.on("GetData", (data) => {
        store.dispatch(dashboardActions.loadData(data));
      });
    });

  next(action);
};

export default socketMiddleware;
