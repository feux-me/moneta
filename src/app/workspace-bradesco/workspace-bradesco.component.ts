import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-workspace-bradesco',
  templateUrl: './workspace-bradesco.component.html',
  styleUrls: ['../app.component.css']
})
export class WorkspaceBradescoComponent implements OnInit {

  title = 'Novo workspace';
  subtitle = 'regras adicionadas';

  constructor() { }

  ngOnInit() {
  }
  teste() {
    localStorage.setItem('myDataKey', 'someData');
  }
}
