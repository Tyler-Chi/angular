import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  // template: "<p> hello world </p>",
  styleUrls: ['./servers.component.css']
})

//data binding
export class ServersComponent implements OnInit {

  allowNewServer = false;
  someText = 'stuff';
  doggo = 'a doggo';
  serverCreationStatus = 'No server was created!';
  serverName = "";
  serverCreated = false;
  servers = ['TestServer','Testserver 2'];

  constructor() {
    setTimeout(()=> {
      this.someText = 'more stuff'
      this.doggo = 'big red doggo'
      this.allowNewServer = true;
    }, 2000)
  }

  ngOnInit() {
  }

  onCreateServer(){
    this.serverCreated = true;
    this.servers.push(this.serverName);
    this.serverCreationStatus = 'Server was created!';
  }

  onUpdateServerName(event: any){
    console.log(event);
    this.serverName = (<HTMLInputElement>event.target).value
  }

}
