import { Component, OnInit } from '@angular/core';
import { Review } from 'src/app/model/review';
import { ServiceService} from '../../hospitalService/service.service'
//import { from } from 'rxjs';
import {HttpClientModule} from '@angular/common/http'

@Component({
  selector: 'app-submit-review',
  templateUrl: './submit-review.component.html',
  styleUrls: ['./submit-review.component.css']
})
export class SubmitReviewComponent implements OnInit {


  constructor(private serve:ServiceService){}
  // status='';
  review : Review =new Review("","",0);
  message:any;
  showData(data)
  { 
     console.log("data hospitalName");
     let resp=this.serve.postReview(this.review);
     resp.subscribe((data)=>this.message(data));

  }

 

  ngOnInit() {
  }

}
