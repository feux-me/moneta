import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AccordionModule } from 'ngx-bootstrap/accordion';
import { AppRoutingModule } from './app-routing.module';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { AppComponent } from './app.component';
import { AppService } from './app.service';
import { HttpClientModule } from '@angular/common/http';
import { WorkspaceComponent } from './workspace.component';
import { FormsModule } from '@angular/forms';
import { WorkspaceBradescoComponent } from './workspace-bradesco/workspace-bradesco.component';
import { NewWorkspaceComponent } from './new-workspace/new-workspace.component';
import { NewRuleComponent } from './new-rule/new-rule.component';

@NgModule({
  declarations: [
    AppComponent,
    WorkspaceComponent,
    WorkspaceBradescoComponent,
    NewWorkspaceComponent,
    NewRuleComponent
  ],
  imports: [
    BrowserModule,
    AngularFontAwesomeModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    AccordionModule.forRoot()
  ],
  providers: [AppService, HttpClientModule],
  bootstrap: [AppComponent]
})
export class AppModule { }
