import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  serviceUrl = 'http://localhost:40000';

  constructor(
    private http: HttpClient

  ) { }

  httpOptions = {
    headers : new HttpHeaders({
      'Content-Type' : 'application/json'
    }),
  }

  public localTest(){
    try{
      let roboto = {
        "name": 'Yes',
        "violent": true
      }
      return roboto;
    }
    catch(e){
      console.log(e);
      return e;
    }
  }

  public testGet(){
    try{
      return this.http.get(this.serviceUrl + '/api/hello');
    }
    catch(e){
      console.log(e);
      return e;
    }
  }
}

