import { Component } from "@angular/core";

@Component({
    selector:'app-server',
    templateUrl:'./server.component.html'
})

export class ServerComponent{
    serverName:string = "Server Main";
    serverStatus:string = "Running";
    serverRunning:boolean = true;
    serverNum:number= 10;
    allowNewServers:boolean = false;
    serverCreationStatus:string = "No server was created";
    newServerName:string = "Server 2";
    newServerAddress:string="192.168.1.1";
    name:string = "";
    id:number = null;
    collegeName : "";
    placedIn: "";

    superHeros = [
          {id: 1, name:'Superman'},
          {id: 2, name:'Batman'},
          {id: 5, name:'BatGirl'},
          {id: 3, name:'Robin'},
          {id: 4, name:'Flash'}
     ];
    
    
    constructor(){
        setTimeout(()=>{
            this.serverName = "New Server";
            this.allowNewServers = !this.allowNewServers;
        },3000);
    
    }
    //methods
    isServerRunning(){
         alert(this.serverRunning);
    }
    isServerRunning1(){
        return (this.serverRunning);
   }
   onCreateServer(){
        this.serverCreationStatus = "Server was created successfully";
   }
   onUpdateServer(event){
        console.log(event.target.value);
        this.newServerName = event.target.value;
   }
   onUpdateAddress(event){
        console.log(event.target.value);
        this.newServerAddress = event.target.value;
   }
   display(){

   }

}