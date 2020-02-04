import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { Review } from '../model/review';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  private url="http://localhost:8090/create";
  postReview(review : Review)
  {
    return this.http.post<Review>(this.url,review);
  }

  getAllDataUrl : string="http://localhost:8090/getAll"

  getReview() : Observable<Review[]>
  {
    return this.http.get<Review[]>(this.getAllDataUrl);
    
                          //  .catch(this.errorHandler);
  }
  constructor(private http: HttpClient) { }
}
