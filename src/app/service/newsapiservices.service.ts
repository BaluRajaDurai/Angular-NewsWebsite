import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NewsapiservicesService {

  constructor(private _http:HttpClient) { }

  newsApiUrl ="https://newsapi.org/v2/top-headlines?country=in&apiKey=ea85b40cdc6a4f829a59d2fd23db6bcb";
  techApiUrl ="https://newsapi.org/v2/top-headlines?country=in&category=technology&apiKey=ea85b40cdc6a4f829a59d2fd23db6bcb";
  businessApiUrl ="https://newsapi.org/v2/top-headlines?country=in&category=business&apiKey=ea85b40cdc6a4f829a59d2fd23db6bcb";
  scienceApiUrl ="https://newsapi.org/v2/top-headlines?country=in&category=science&apiKey=ea85b40cdc6a4f829a59d2fd23db6bcb";
  healthApiUrl ="https://newsapi.org/v2/top-headlines?country=in&category=health&apiKey=ea85b40cdc6a4f829a59d2fd23db6bcb";
  sportsApiUrl ="https://newsapi.org/v2/top-headlines?country=in&category=sports&apiKey=ea85b40cdc6a4f829a59d2fd23db6bcb";
  entertainmentApiUrl ="https://newsapi.org/v2/top-headlines?country=in&category=entertainment&apiKey=ea85b40cdc6a4f829a59d2fd23db6bcb";



  topHeading():Observable<any>{

        return this._http.get(this.newsApiUrl);
  }  

  topNews():Observable<any>{

    return this._http.get(this.techApiUrl);
  }  

  businessNews():Observable<any>{

    return this._http.get(this.businessApiUrl);
  }  
  
  scienceNews():Observable<any>{

    return this._http.get(this.scienceApiUrl);
  }
  
  healthNews():Observable<any>{

    return this._http.get(this.healthApiUrl);
  }  

  sportsNews():Observable<any>{

    return this._http.get(this.sportsApiUrl);
  }  

  entertainmentNews():Observable<any>{

    return this._http.get(this.entertainmentApiUrl);
  }  



}
