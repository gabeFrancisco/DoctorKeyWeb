import * as signalR from "@microsoft/signalr";
import { apiUrl } from "./api";

export class AppHubService{
  private connection: signalR.HubConnection;
  /**
   *work
   */
  constructor(token: string) {
    this.connection = new signalR.HubConnectionBuilder()
    .withUrl(`${apiUrl}/socket/apphub?workgroup=${token}`, { accessTokenFactory: () => token})
    .withAutomaticReconnect()
    .configureLogging(signalR.LogLevel.Information)
    .build();

    this.connection.start().then(() => this.receiveMethods())
  }

  sendMessage(){
    this.connection.invoke("Message", {message: "God loves you! Jesus!"});
  }

  private receiveMethods(){
    this.connection.on("NotificationAdd", (data) => {
      alert(data.message)
    })
  }
}