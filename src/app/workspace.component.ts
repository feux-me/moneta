import { Component, OnInit } from '@angular/core';
import { AppService } from './app.service';
import { WorkspaceModel } from './workspace.model';

@Component({
  selector: 'app-root',
  templateUrl: './workspace.component.html',
  styleUrls: ['./app.component.css'],
  providers:  [ AppService ]
})
export class WorkspaceComponent implements OnInit {
  title = 'Área de trabalho';
  subtitle = 'Visão geral dos seus workspaces';
  workspace: Array<any> = new Array();
  changedWorkspace: WorkspaceModel = new WorkspaceModel();
  
  constructor(private appService: AppService) { }

  ngOnInit() {
    this.listaWorkspaces();
  }

  removeWorkspace(id:number) {
    this.appService.removeWorkspace(id).subscribe(changedWorkspace => {
      this.changedWorkspace = new WorkspaceModel();
      this.listaWorkspaces(); 
    }, err => {
      console.log('Erro ao excluir Workspace.')
    })
  }

  listaWorkspaces() {
    this.appService.listaWorkspaces().subscribe(workspace => {
      this.workspace = workspace;
    }, err => {
      console.log('Erro ao listar workspaces', err)
    })
  }

}
