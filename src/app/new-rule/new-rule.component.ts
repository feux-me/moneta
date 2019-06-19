import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-new-rule',
  templateUrl: './new-rule.component.html',
  styleUrls: ['../app.component.css']
})
export class NewRuleComponent implements OnInit {

  title = 'Nova Regra';
  subtitle = 'Entre com as informações abaixo';

  constructor() { }

  ngOnInit() {
  }

}
