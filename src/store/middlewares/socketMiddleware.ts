import { Middleware } from "@reduxjs/toolkit";
import * as signalR from "@microsoft/signalr";
import { dashboardActions } from "../features/dashboardSlice";
import { notificationActions } from "../features/notificationSlice";
import api, { apiUrl } from "@/services/api";
import { getSession } from "next-auth/react";
import workGroupSlice from "../features/workGroupSlice";

const socketMiddleware: Middleware = (store) => (next) => (action) => {
  // if (!dashboardActions.startConnecting.match(action)) {
  //   return next(action);
  // }
  if (store.getState().workGroups.webSocketConnection) {
    let token;
    console.log(getSession().then((s) => (token = s?.user.accessToken)));

    var connection = new signalR.HubConnectionBuilder()
      .withUrl(`${apiUrl}/socket/apphub?workgroup=${token}`)
      .configureLogging(signalR.LogLevel.Information)
      .build();
    {
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

      connection.start();
      next(action);
    }
  }

  next(action);
};

export default socketMiddleware;
