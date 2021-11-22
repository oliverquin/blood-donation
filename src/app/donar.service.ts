import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Donar } from './donar.model';


@Injectable({
  providedIn: 'root'
})
export class DonarService {

  private usersUrl: string;
  private viewUrl: string;
  private deleteUrl:string;
  private searchUrl:string;


  constructor(private http: HttpClient) {
    this.usersUrl = 'http://localhost:9090/saveDonarRegistration';
    this.viewUrl = 'http://localhost:9090/viewDonarsList';
    this.deleteUrl = 'http://localhost:9090/deleteDonar/';
    this.searchUrl = 'http://localhost:9090/searchDonarsList/';
  }

  public save(donarDetails: Donar) {
    console.log("donar details : " + donarDetails)
    this.http.post<Donar>(this.usersUrl, donarDetails).subscribe(data => {
     console.log(data);
    });
    
  }
 
  donarsList: any;
  public viewDonarsList(){
     return this.http.get(this.viewUrl);
  }

  public searchDonarsList(searchText: string){
    return this.http.get(this.searchUrl + searchText);
 }
 
   async deleteDonar(id: any) {
    const result = confirm('Are You sure Want to Delete this Donar ?');
    if (result) {
      console.log("Success")
      return await this.http.delete(this.deleteUrl + id ).toPromise();
    } 
      console.log("fail")
      return false;
  }
}
