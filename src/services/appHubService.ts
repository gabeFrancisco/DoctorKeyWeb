import * as signalR from "@microsoft/signalr";

export class AppHubService{
  private connection: signalR.HubConnection;
  /**
   *
   */
  constructor(connection: signalR.HubConnection) {
    this.connection = connection
  }

  sendMessage(){
    this.connection.invoke("Message", {message: "God loves you! Jesus!"});
  }
}