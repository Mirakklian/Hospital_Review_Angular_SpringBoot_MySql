import { Component, OnInit } from '@angular/core';
import { ServiceService } from 'src/app/hospitalService/service.service';

@Component({
  selector: 'app-show-review',
  templateUrl: './show-review.component.html',
  styleUrls: ['./show-review.component.css']
})
export class ShowReviewComponent implements OnInit {

  review =[]

  constructor(private rev : ServiceService) { }

  ngOnInit() {

    this.rev.getReview().subscribe(data=>this.review=data);
  }

}
