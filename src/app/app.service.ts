import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { WorkspaceModel } from './workspace.model';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  constructor( private http: HttpClient) { }

  listaWorkspaces():Observable<any> {
    return this.http.get("http://localhost:3000/workspace")
  }
  listaRegra():Observable<any> {
    return this.http.get("http://localhost:3000/workspace/rules")
  }
  cadastrarWorkspace(changedWorkspace: WorkspaceModel):Observable<any> {
    return this.http.post("http://localhost:3000/workspace", changedWorkspace);
  }
  removeWorkspace(id:any) {
    return this.http.delete("http://localhost:3000/workspace/".concat(id));
  }
}
