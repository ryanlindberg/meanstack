import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class BlogService {

  mainURL:string = "blog";

  headers = new HttpHeaders().set('Content-Type',  `application/json`);

  constructor(private http: HttpClient, public router: Router) { }

  // Add Blog Function //

  addBlog(data: any): Observable<any> {
    let url = `${this.mainURL}/addBlog`;
    
    return this.http.post(url, data, {headers: this.headers}).pipe()
  }

  // Get Blog Function //

  getBlog(): Observable<any> {
    let url = `${this.mainURL}/getBlog`;
    
    return this.http.get(url, {headers: this.headers}).pipe(
      //catchError(this.errorMgmt)
    )
  }

}
