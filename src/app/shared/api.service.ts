import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor( private http : HttpClient) { }

  postUser(data : any){
    return this.http.post("http://localhost:3000/posts",data).pipe(map((res:any)=>{
      return res;
    }))
    };
  
  getUser(){
    return this.http.get("http://localhost:3000/posts").pipe(map((res:any)=>{
      return res;
    }))
    };
  
  updateUser(data : any, id : number){
    return this.http.put("http://localhost:3000/posts/"+id,data).pipe(map((res:any)=>{
      return res;
    }))
   };

   getIndividualUser(username : string){
    let params = new HttpParams();
    params = params.append('username',username);
    return this.http.get("http://localhost:3000/posts/",{params: params}).pipe(map((res:any)=>{
      return res;
    }))
    };
  }
