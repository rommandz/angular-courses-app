import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-search-section',
  templateUrl: './search-section.component.html',
  styleUrls: ['./search-section.component.css']
})
export class SearchSectionComponent implements OnInit {
  searchValue: string;

  constructor() { }

  ngOnInit() {
  }

  onSearchBtnClicked() {
    console.log(this.searchValue);
  }
}
