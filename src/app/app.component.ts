import { Component, OnInit } from '@angular/core';
import { AppService } from './app.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers:  [ AppService ]
})
export class AppComponent implements OnInit {
  title = 'Área de trabalho';
  subtitle = 'Visão geral dos seus workspaces';
  workspace: Array<any> = new Array();
  
  constructor(private appService: AppService) { }

  ngOnInit() {
    this.listaWorkspaces();
  }

  listaWorkspaces() {
    this.appService.listaWorkspaces().subscribe(workspace => {
      this.workspace = workspace;
    }, err => {
      console.log('Erro ao listar workspaces', err)
    })
  }

}
