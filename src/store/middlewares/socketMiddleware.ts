import { Middleware } from "@reduxjs/toolkit";
import * as signalR from "@microsoft/signalr";
import { dashboardActions } from "../features/dashboardSlice";
import { notificationActions } from "../features/notificationSlice";
import api, { apiUrl } from "@/services/api";
import { getSession } from "next-auth/react";
import workGroupSlice, { setConnecting } from "../features/workGroupSlice";

const socketMiddleware: Middleware = (store) => (next) => (action) => {
  // if (!dashboardActions.startConnecting.match(action)) {
  //   return next(action);
  // }
  let isConnected = store.getState().workGroups.isWebSocketConnected;
  let isConnecting = store.getState().workGroups.isWebSocketConnecting;
  let token = store.getState().workGroups.workGroupSocketId;
  console.log(token)
  // store.dispatch(setConnecting(true));
  if (isConnecting) {
    store.dispatch(setConnecting(false));
    var connection = new signalR.HubConnectionBuilder()
      .withUrl(`${apiUrl}/socket/apphub?workgroup=${token}`)
      .configureLogging(signalR.LogLevel.Information)
      .build();
    {
      connection.on("ReceiveInitialData", (data) => {
        store.dispatch(dashboardActions.loadData(JSON.parse(data)));
      });

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
      // next(action);
    }

    next(action);
  }
};

export default socketMiddleware;
