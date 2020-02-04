import { Component, OnInit,EventEmitter,Output } from '@angular/core';
// import { EventEmitter } from 'protractor';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  @Output() selected=new EventEmitter<string>();
  onSelect(item: string)
  {
    this.selected.emit(item);
  }
  constructor() { }

  ngOnInit() {
  }

}
