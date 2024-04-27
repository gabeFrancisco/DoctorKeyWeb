import { Middleware } from "@reduxjs/toolkit";
import * as signalR from "@microsoft/signalr";
import { dashboardActions } from "../features/dashboardSlice";
import { notificationActions } from "../features/notificationSlice";
import api, { apiUrl } from "@/services/api";
import { getSession } from "next-auth/react";

const socketMiddleware: Middleware = (store) => {
  // if (!dashboardActions.startConnecting.match(action)) {
  //   return next(action);
  // }
  const session = getSession()
  const token = session.then(s => s?.user.accessToken);
  const connection = new signalR.HubConnectionBuilder()
    .withUrl(
      `${apiUrl}/socket/apphub?workgroup=${token}`
    )
    .configureLogging(signalR.LogLevel.Information)
    .build();

  connection.start();

  return (next) => {
    // connection.on("ReceiveInitialData", (data) => {
    //   store.dispatch(dashboardActions.loadData(JSON.parse(data)));
    // });

    // connection.on("KeyCount", (data) => {
    //   store.dispatch(dashboardActions.loadKeyCount(data));
    // });

    connection.on("NotificationAdd", async (data) => {
      let notification = JSON.stringify(data);
      store.dispatch(
        notificationActions.addNotification(JSON.parse(notification))
      );
    });

    return (action) => {
      next(action);
    };
  };
};

export default socketMiddleware;
