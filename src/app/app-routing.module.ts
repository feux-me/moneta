import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { WorkspaceComponent } from './workspace.component';
import { WorkspaceBradescoComponent } from "./workspace-bradesco/workspace-bradesco.component";
import { NewWorkspaceComponent } from './new-workspace/new-workspace.component';
import { NewRuleComponent } from './new-rule/new-rule.component';

const routes: Routes = [
  { 
    path: 'app', 
    component: AppComponent 
  },
  { 
    path: 'new-rule', 
    component: NewRuleComponent 
  },
  { 
    path: 'new-workspace', 
    component: NewWorkspaceComponent 
  },
  { 
    path: 'workspace-bradesco', 
    component: WorkspaceBradescoComponent 
  },
  { 
    path: 'workspace', 
    component: WorkspaceComponent 
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
