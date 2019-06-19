import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-new-workspace',
  templateUrl: './new-workspace.component.html',
  styleUrls: ['../app.component.css']
})
export class NewWorkspaceComponent implements OnInit {

  title = 'Novo Workspace';
  subtitle = 'regras adicionadas';

  constructor() { }

  ngOnInit() {
  }

}
